import greeting from "./responses/greeting.json";
import products from "./responses/products.json";
import pricing from "./responses/pricing.json";
import branches from "./responses/branches.json";
import fallback from "./responses/default.json";

const ALL_RESPONSES = [
  ...greeting.responses,
  ...products.responses,
  ...pricing.responses,
  ...branches.responses,
  ...fallback.responses,
];

function normalize(text = "") {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function fuzzyIncludes(input, word) {
  if (input.includes(word)) return true;

  let mismatches = 0;
  for (let i = 0; i < Math.min(input.length, word.length); i++) {
    if (input[i] !== word[i]) mismatches++;
    if (mismatches > 1) return false;
  }

  return true;
}

function mapSynonyms(input) {
  if (input.includes("opciones")) return "ver opciones";
  if (input.includes("catalog")) return "catalogo";
  if (input.includes("cotiza")) return "cotizacion";
  return input;
}

/**
 * 🔥 NUEVO: parser semántico de capacidad
 */
function parseCapacity(input) {
  if (!input) return null;

  let text = input
    .toLowerCase()
    .replace(/,/g, ".")
    .replace(/litros?/g, "l")
    .replace(/mililitros?/g, "ml")
    .replace(/\s+/g, " ")
    .trim();

  // casos especiales
  if (text.includes("medio l") || text.includes("medio litro")) return "500ml";
  if (text.includes("litro y medio") || text.includes("l y medio"))
    return "1.5l";

  // números escritos básicos
  text = text
    .replace(/un l/g, "1l")
    .replace(/uno l/g, "1l")
    .replace(/dos l/g, "2l")
    .replace(/tres l/g, "3l");

  const match = text.match(/(\d+(\.\d+)?)\s*(l|ml)/);

  if (!match) return null;

  const value = parseFloat(match[1]);
  const unit = match[3];

  if (unit === "l") {
    return value >= 1 ? `${value}l` : `${value * 1000}ml`;
  }

  return `${value}ml`;
}

function findMatch(input) {
  for (const item of ALL_RESPONSES) {
    for (const trigger of item.triggers) {
      if (input.includes(trigger)) {
        return item;
      }
    }
  }
  return null;
}

function getByType(type) {
  return ALL_RESPONSES.find((r) => r.type === type);
}

function resolveBranchData(branchKey) {
  return branches.responses.find((b) => b.nextContext?.branch === branchKey);
}

function detectBranch(input) {
  if (/cdmx|mexico/.test(input)) return "cdmx";
  if (/puebla/.test(input)) return "puebla";
  if (/veracruz/.test(input)) return "veracruz";
  if (/neza|nezahualcoyotl/.test(input)) return "neza";
  if (/queretaro|querettaro/.test(input)) return "queretaro";
  return null;
}

function buildWhatsAppMessage({ branch, context }) {
  const parts = ["Hola, quiero una cotización"];

  const categoryMap = {
    pharma: "de envases farmacéuticos",
    cleaning: "de envases para limpieza",
    drinks: "de envases para bebidas",
    cosmetics: "de envases cosméticos",
    food: "de envases para alimentos",
  };

  if (context?.category && categoryMap[context.category]) {
    parts.push(categoryMap[context.category]);
  }

  if (context?.subcategory === "solids") {
    parts.push("(pastillas/cápsulas)");
  }

  if (context?.subcategory === "liquids") {
    parts.push("(jarabes/líquidos)");
  }

  if (context?.capacity) {
    parts.push(`(${context.capacity})`);
  }

  if (branch) {
    parts.push(`desde ${branch}`);
  }

  return parts.join(" ");
}

function inferCategoryFromType(type) {
  if (type === "products_pharma") return "pharma";
  if (type === "products_cleaning") return "cleaning";
  if (type === "products_drinks") return "drinks";
  if (type === "products_cosmetics") return "cosmetics";
  if (type === "products_food") return "food";
  return null;
}

export function getBotResponse(userInput, context = {}) {
  let input = normalize(userInput);
  input = mapSynonyms(input);

  /**
   * =========================
   * 🔥 NUEVO: DETECCIÓN DE CAPACIDAD (PRIORIDAD ALTA)
   * =========================
   */
  const detectedCapacity = parseCapacity(input);

  if (detectedCapacity) {
    return {
      ...getByType("products_capacity"),
      nextContext: {
        ...context,
        capacity: detectedCapacity,
      },
    };
  }

  /**
   * =========================
   * 1. SALUDO
   * =========================
   */
  if (fuzzyIncludes(input, "hola") || /hi|hello|hey|shalom/.test(input)) {
    return getByType("greeting");
  }

  /**
   * =========================
   * 2. COTIZACIÓN
   * =========================
   */
  if (/cotizacion|cotizar|precio/.test(input)) {
    const detected = detectBranch(input);
    const branch = detected || context.branch;

    if (!branch) {
      return {
        response:
          "Para cotizar, indícame tu sucursal:\n\n• CDMX\n• Puebla\n• Veracruz\n• Neza\n• Querétaro",
        nextContext: {
          intent: "pricing",
        },
      };
    }

    const branchData = resolveBranchData(branch);
    const phone = branchData?.payload?.phone;

    return {
      response: "Te conecto con un asesor para tu cotización 👇",
      payload: {
        type: "whatsapp",
        phone,
        message: buildWhatsAppMessage({ branch, context }),
      },
      nextContext: { branch },
    };
  }

  /**
   * =========================
   * 3. CONTINUIDAD COTIZACIÓN
   * =========================
   */
  if (context.intent === "pricing") {
    const detected = detectBranch(input);

    if (detected) {
      const branchData = resolveBranchData(detected);
      const phone = branchData?.payload?.phone;

      return {
        response: "Te conecto con un asesor para tu cotización 👇",
        payload: {
          type: "whatsapp",
          phone,
          message: buildWhatsAppMessage({
            branch: detected,
            context,
          }),
        },
        nextContext: {
          intent: null,
          branch: detected,
        },
      };
    }
  }

  /**
   * =========================
   * 4. ASESOR
   * =========================
   */
  if (/asesor|hablar|humano|whatsapp|contactar/.test(input)) {
    const detected = detectBranch(input);
    const branch = detected || context.branch;

    if (!branch) {
      return {
        response:
          "¿De qué sucursal deseas hablar con un asesor?\n\n• CDMX\n• Puebla\n• Veracruz\n• Neza\n• Querétaro",
      };
    }

    const branchData = resolveBranchData(branch);
    const phone = branchData?.payload?.phone;

    return {
      response: "Puedes hablar directamente con un asesor aquí 👇",
      payload: {
        type: "whatsapp",
        phone,
        message: buildWhatsAppMessage({ branch, context }),
      },
      nextContext: { branch },
    };
  }

  /**
   * =========================
   * 5. CATÁLOGO
   * =========================
   */
  if (input.includes("catalogo")) {
    const catalog = ALL_RESPONSES.find((r) =>
      r.triggers?.some((t) => t.includes("catalog")),
    );
    if (catalog) return catalog;
  }

  /**
   * =========================
   * 6. CONTEXTO FARMACIA
   * =========================
   */
  if (context.category === "pharma") {
    if (/pastilla|capsula|tableta/.test(input)) {
      return {
        ...getByType("pharma_solids"),
        nextContext: {
          intent: "products",
          category: "pharma",
          subcategory: "solids",
        },
      };
    }

    if (/jarabe|liquido/.test(input)) {
      return {
        ...getByType("pharma_liquids"),
        nextContext: {
          intent: "products",
          category: "pharma",
          subcategory: "liquids",
        },
      };
    }

    if (input === "ver opciones") {
      return getByType("pharma_options");
    }
  }

  /**
   * =========================
   * 7. MATCH JSON + CONTEXTO GLOBAL
   * =========================
   */
  const match = findMatch(input);

  if (match) {
    const nextContext = {
      ...context,
      ...match.nextContext,
    };

    const inferredCategory = inferCategoryFromType(match.type);
    if (inferredCategory) {
      nextContext.category = inferredCategory;
    }

    if (/\d+(ml|l)/.test(input)) {
      nextContext.capacity = input;
    }

    return {
      ...match,
      nextContext,
    };
  }

  /**
   * =========================
   * 8. FALLBACK
   * =========================
   */
  return getByType("default");
}
