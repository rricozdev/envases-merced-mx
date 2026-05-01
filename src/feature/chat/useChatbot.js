import { useState } from "react";
import { getBotResponse } from "./conversationEngine";

export function useChatbot() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [context, setContext] = useState({
    intent: null,
    category: null,
    subcategory: null,
    branch: null, // 🔥 faltaba
  });

  const sendMessage = (userMessage) => {
    const userMsg = {
      role: "user",
      parts: [{ text: userMessage }],
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    /**
     * 🔥 SNAPSHOT del contexto (evita stale state)
     */
    const currentContext = { ...context };

    setTimeout(() => {
      const botData = getBotResponse(userMessage, currentContext);

      /**
       * 🔥 CONTEXT UPDATE
       */
      if (botData?.nextContext) {
        setContext((prev) => ({
          ...prev,
          ...botData.nextContext,
        }));
      }

      /**
       * 🔥 PAYLOAD ACTIONS
       */
      if (botData?.payload?.type === "catalog") {
        if (botData.payload.url) {
          window.open(botData.payload.url, "_blank");
        }
      }

      if (botData?.payload?.type === "whatsapp") {
        const phone = botData.payload?.phone || "";
        const message =
          botData.payload?.message || "Hola, quiero hablar con un asesor";

        const cleanPhone = phone.replace(/\D/g, "");

        /**
         * 🔥 GUARD CLAUSE (evita 404 tipo '521')
         */
        if (botData?.payload?.type === "whatsapp") {
          const phone = botData.payload?.phone;
          const message = botData.payload?.message;

          const cleanPhone = phone?.replace(/\D/g, "");

          console.log("🧪 DEBUG PHONE:", {
            phoneOriginal: phone,
            phoneLimpio: cleanPhone,
            length: cleanPhone?.length,
          });

          const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
            message,
          )}`;

          console.log("🧪 URL FINAL:", url);

          /**
           * 🔥 SIN GUARD → queremos ver el error real
           */
          window.open(url, "_blank");
        }
      }

      /**
       * 🔥 MENSAJE BOT
       */
      const botMsg = {
        role: "model",
        parts: [
          {
            text:
              botData?.response ||
              "Puedo ayudarte con envases PET, catálogo o cotización.",
          },
        ],
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsLoading(false);
    }, 500);
  };

  return { messages, sendMessage, isLoading };
}
