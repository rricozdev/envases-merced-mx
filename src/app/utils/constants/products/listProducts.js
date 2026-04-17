const CategoriaProducto = Object.freeze({
  AGUA: "Agua y bebidas",
  AMENIDADES: "Amenidades",
  COSMETICO: "Cosméticos",
  ESPECIEROS: "Especieros",
  FARMACIA: "Farmacéutico",
  GARRAFAS: "Garrafas",
  LIMPIEZA: "Limpieza",
  PROMOCIONALES: "Promocionales",
  TARROS: "Tarros y vitroleros",
  COMPLEMENTOS: "Tapas y complementos",
});

const EtiquetaProducto = Object.freeze({
  STOCK: "Stock",
  PEDIDO: "Bajo pedido",
  MULTICOLOR: "Multi color",
  PERSONALIZADO: "Color bajo pedido",
});

const RoscaEstandar = Object.freeze({
  GPI_400: 400,
  GPI_410: 410,
  GPI_415: 415,
});

const CodigoRosca = Object.freeze({
  ROSCA_18: "18",
  ROSCA_28: "28",
  ROSCA_45: "45",
  ROSCA_20: "20",
  ROSCA_24: "24",
  ROSCA_38: "38",
  ROSCA_63: "63",
  ROSCA_110: "110",
});

const ColorProducto = Object.freeze({
  CRISTAL: "Cristal",
  HUMO: "Humo",
  AMBAR: "Ámbar",
  COLORES: "Colores",
  BLANCO: "Blanco",
  AZUL: "Azul",
  AMARILLO: "Amarillo",
  NATURAL: "Natural",
});

// Se agrega unidades de medida estándar utilizadas para volumen o capacidad de los productos
const UnidadesDeMedida = Object.freeze({
  MILILITRO: "ml",
  LITRO: "lt",
  GALON: "gal",
  KILOGRAMO: "kgrs",
});

const CatalogoProductos = Object.freeze({
  productos: Object.freeze([
    // * AGUAS Y JUGOS
    {
      id: "sinfin-250-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Sinfín",
      volumen: 250,
      categorias: [CategoriaProducto.AGUA],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 253,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/img-r28-sinfin--250.webp",
        alt: "sinfin-250-cristal",
      },
    },
    {
      id: "sinfin-500-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Sinfín",
      volumen: 500,
      categorias: [CategoriaProducto.AGUA],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 190,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/img-r28-sinfin-500.webp",
        alt: "sinfin-500-cristal",
      },
    },
    {
      id: "sinfin-1000-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Sinfín",
      volumen: 1000,
      categorias: [CategoriaProducto.AGUA],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 165,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/img-r28-sinfin-1000.webp",
        alt: "sinfin-1000-cristal",
      },
    },
    {
      id: "sinfin-1500-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Sinfín",
      volumen: 1500,
      categorias: [CategoriaProducto.AGUA],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 130,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/img-r28-sinfin-1500.webp",
        alt: "sinfin-1500-cristal",
      },
    },
    {
      id: "olas-rombo-500-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Olas / Rombo",
      volumen: 500,
      categorias: [CategoriaProducto.AGUA],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 190,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/olas_rombo_r-28.webp",
        alt: "olas-rombo-500-cristal",
      },
    },
    {
      id: "jubileo-355-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Jubileo",
      volumen: 355,
      categorias: [CategoriaProducto.AGUA],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 208,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/jubileo-r28-cristal.webp",
        alt: "jubileo-355-cristal",
      },
    },

    // * COMPLEMENTOS - AGUA
    {
      id: "tapa-cintillo-rosca-28",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Tapa Cintillo",
      volumen: null,
      categorias: [CategoriaProducto.AGUA, CategoriaProducto.COMPLEMENTOS],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 3500,
      color: ColorProducto.COLORES,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "/assets/product_img/tapa_cintillo-r-28.webp",
        alt: "tapa-cintillo-rosca-28",
      },
    },
    {
      id: "refresquera-rosca-28",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Refresquera",
      volumen: null,
      categorias: [CategoriaProducto.AGUA, CategoriaProducto.COMPLEMENTOS],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 3500,
      color: ColorProducto.COLORES,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "/assets/product_img/tapa-1.webp",
        alt: "refresquera-rosca-28",
      },
    },

    // AMENIDADES
    {
      id: "licorera-1000-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Licorera",
      volumen: 1000,
      categorias: [CategoriaProducto.AMENIDADES],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 149,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/licorera-1000-500.webp",
        alt: "licorera-1000-cristal",
      },
    },
    {
      id: "licorera-500-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Licorera",
      volumen: 500,
      categorias: [CategoriaProducto.AMENIDADES],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 198,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "/assets/product_img/licorera-1000-500.webp",
        alt: "licorera-500-cristal",
      },
    },
    {
      id: "piñera-930-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Piñera",
      volumen: 930,
      categorias: [CategoriaProducto.AMENIDADES],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 91,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/piñera-930.webp",
        alt: "piñera-930-cristal",
      },
    },

    // LIMPIEZA
    {
      id: "agroquimica-1000-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Agroquímica",
      volumen: 1000,
      categorias: [CategoriaProducto.LIMPIEZA],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 145,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/agronomica-cristal.webp",
        alt: "agroquimica-1000-cristal",
      },
    },
    {
      id: "agroquimica-1000-humo",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Agroquímica",
      volumen: 1000,
      categorias: [CategoriaProducto.LIMPIEZA],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 145,
      color: ColorProducto.HUMO,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "/assets/product_img/agronomica-humo.webp",
        alt: "agroquimica-1000-humo",
      },
    },
    {
      id: "agroquimica-1000-ambar",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Agroquímica",
      volumen: 1000,
      categorias: [CategoriaProducto.LIMPIEZA],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 145,
      color: ColorProducto.AMBAR,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/agronomica-ambar.webp",
        alt: "agroquimica-1000-ambar",
      },
    },
    {
      id: "lavatrastes-400-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Lavatrastes",
      volumen: 400,
      categorias: [CategoriaProducto.LIMPIEZA],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 240,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "/assets/product_img/lavatrastes-400.webp",
        alt: "lavatrastes-400-cristal",
      },
    },
    {
      id: "lavatrastes-900-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Lavatrastes",
      volumen: 900,
      categorias: [CategoriaProducto.LIMPIEZA],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 180,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/lavatrastes-900.webp",
        alt: "lavatrastes-900-cristal",
      },
    },
    {
      id: "lavatrastes-1300-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Lavatrastes",
      volumen: 1300,
      categorias: [CategoriaProducto.LIMPIEZA],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 144,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/lavatrastes-1300.webp",
        alt: "lavatrastes-1300-cristal",
      },
    },
    {
      id: "garrafa-4000-cristal",
      unidad: UnidadesDeMedida.LITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Garrafa",
      volumen: 4,
      categorias: [CategoriaProducto.LIMPIEZA, CategoriaProducto.GARRAFAS],
      rosca: {
        diametro: CodigoRosca.ROSCA_45,
        estandar: null,
      },
      piezasPorPaquete: 35,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/garrafa-4000.webp",
        alt: "garrafa-4000-cristal",
      },
    },
    {
      id: "garrafa-5000-cristal",
      unidad: UnidadesDeMedida.LITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Garrafa",
      volumen: 5,
      categorias: [CategoriaProducto.LIMPIEZA, CategoriaProducto.GARRAFAS],
      rosca: {
        diametro: CodigoRosca.ROSCA_45,
        estandar: null,
      },
      piezasPorPaquete: 30,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/garrafa-5000.webp",
        alt: "garrafa-5000-cristal",
      },
    },
    {
      id: "garrafa-10000-cristal",
      unidad: UnidadesDeMedida.LITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Garrafa",
      volumen: 10,
      categorias: [CategoriaProducto.LIMPIEZA, CategoriaProducto.GARRAFAS],
      rosca: {
        diametro: CodigoRosca.ROSCA_45,
        estandar: null,
      },
      piezasPorPaquete: 30,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/garrafa-10000.webp",
        alt: "garrafa-10000-cristal",
      },
    },
    {
      id: "gatillera-250-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Gatillera",
      volumen: 250,
      categorias: [CategoriaProducto.LIMPIEZA],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 160,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "/assets/product_img/gatillera-250.webp",
        alt: "gatillera-250-cristal",
      },
    },
    {
      id: "multiusos-2000-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Multiusos",
      volumen: 2000,
      categorias: [CategoriaProducto.LIMPIEZA],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 110,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/multiusos-2000.webp",
        alt: "multiusos-2000-cristal",
      },
    },
    {
      id: "trigger-500-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Trigger",
      volumen: 500,
      categorias: [CategoriaProducto.LIMPIEZA],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 924,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "/assets/product_img/trigger-500-cristal.webp",
        alt: "trigger-500-cristal",
      },
    },
    {
      id: "trigger-500-blanco",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Trigger",
      volumen: 500,
      categorias: [CategoriaProducto.LIMPIEZA],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 924,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/trigger-500-blanco.webp",
        alt: "trigger-500-blanco",
      },
    },

    // * Boston cosmeticos
    {
      id: "boston-60-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Boston",
      volumen: 60,
      categorias: [CategoriaProducto.COSMETICO],
      rosca: {
        diametro: CodigoRosca.ROSCA_20,
        estandar: RoscaEstandar.GPI_410,
      },
      piezasPorPaquete: 600,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "/assets/product_img/boston-60.webp",
        alt: "boston-60-cristal",
      },
    },
    {
      id: "boston-250-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Boston",
      volumen: 250,
      categorias: [CategoriaProducto.COSMETICO],
      rosca: {
        diametro: CodigoRosca.ROSCA_24,
        estandar: RoscaEstandar.GPI_410,
      },
      piezasPorPaquete: 208,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "/assets/product_img/boston-250-r415.webp",
        alt: "boston-250-cristal",
      },
    },
    {
      id: "boston-250-2-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Boston",
      volumen: 250,
      categorias: [CategoriaProducto.COSMETICO],
      rosca: {
        diametro: CodigoRosca.ROSCA_24,
        estandar: RoscaEstandar.GPI_415,
      },
      piezasPorPaquete: 208,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/boston-250-r415.webp",
        alt: "boston-250-2-cristal",
      },
    },
    {
      id: "boston-500-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Boston",
      volumen: 500,
      categorias: [CategoriaProducto.COSMETICO],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 200,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/boston-500-sm.webp",
        alt: "boston-500-cristal",
      },
    },
    {
      id: "boston-900-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Boston",
      volumen: 900,
      categorias: [CategoriaProducto.COSMETICO],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 192,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "/assets/product_img/boston-900.webp",
        alt: "boston-900-cristal",
      },
    },
    {
      id: "boston-1000-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Boston",
      volumen: 1000,
      categorias: [CategoriaProducto.COSMETICO],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 180,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "/assets/product_img/boston-900.webp",
        alt: "boston-1000-cristal",
      },
    },

    // Especieros
    {
      id: "especiero-alto-120-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Especiero Alto",
      volumen: 120,
      categorias: [CategoriaProducto.ESPECIEROS],
      rosca: {
        diametro: CodigoRosca.ROSCA_38,
        estandar: null,
      },
      piezasPorPaquete: 456,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/espciero-alto.webp",
        alt: "especiero-alto-120-cristal",
      },
    },
    {
      id: "especiero-corto-120-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Especiero Corto",
      volumen: 120,
      categorias: [CategoriaProducto.ESPECIEROS],
      rosca: {
        diametro: CodigoRosca.ROSCA_38,
        estandar: null,
      },
      piezasPorPaquete: 429,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/espciero-corto.webp",
        alt: "especiero-corto-120-cristal",
      },
    },

    // * Ovales
    {
      id: "oval-60-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Oval",
      volumen: 60,
      categorias: [CategoriaProducto.COSMETICO],
      rosca: {
        diametro: CodigoRosca.ROSCA_20,
        estandar: null,
      },
      piezasPorPaquete: 650,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "/assets/product_img/oval-60-125.webp",
        alt: "oval-60-cristal",
      },
    },
    {
      id: "oval-125-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Oval",
      volumen: 125,
      categorias: [CategoriaProducto.COSMETICO],
      rosca: {
        diametro: CodigoRosca.ROSCA_24,
        estandar: RoscaEstandar.GPI_415,
      },
      piezasPorPaquete: 312,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "/assets/product_img/oval-60-125.webp",
        alt: "oval-125-cristal",
      },
    },
    {
      id: "oval-250-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Oval",
      volumen: 250,
      categorias: [CategoriaProducto.COSMETICO],
      rosca: {
        diametro: CodigoRosca.ROSCA_24,
        estandar: RoscaEstandar.GPI_415,
      },
      piezasPorPaquete: 180,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "/assets/product_img/oval-60-125.webp",
        alt: "oval-250-cristal",
      },
    },
    {
      id: "silueta-125-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Silueta",
      volumen: 125,
      categorias: [CategoriaProducto.COSMETICO],
      rosca: {
        diametro: CodigoRosca.ROSCA_24,
        estandar: RoscaEstandar.GPI_415,
      },
      piezasPorPaquete: 312,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "/assets/product_img/silueta-125.webp",
        alt: "silueta-125-cristal",
      },
    },
    {
      id: "silueta-500-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Silueta",
      volumen: 500,
      categorias: [CategoriaProducto.COSMETICO],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 180,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "/assets/product_img/silueta-500.webp",
        alt: "silueta-500-cristal",
      },
    },
    {
      id: "campanita-500-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Campanita",
      volumen: 500,
      categorias: [CategoriaProducto.COSMETICO],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: RoscaEstandar.GPI_410,
      },
      piezasPorPaquete: 174,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.PEDIDO, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "/assets/product_img/campanita-60.webp",
        alt: "campanita-500-cristal",
      },
    },
    {
      id: "campana-50-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Campana",
      volumen: 50,
      categorias: [CategoriaProducto.COSMETICO],
      rosca: {
        diametro: CodigoRosca.ROSCA_18,
        estandar: null,
      },
      piezasPorPaquete: 900,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.PEDIDO, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "/assets/product_img/campanita-500.webp",
        alt: "campana-50-cristal",
      },
    },
    {
      id: "campana-500-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Campana",
      volumen: 500,
      categorias: [CategoriaProducto.COSMETICO],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 195,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/campana-500.webp",
        alt: "campana-500-cristal",
      },
    },
    {
      id: "campana-250-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Campana",
      volumen: 250,
      categorias: [CategoriaProducto.COSMETICO],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: null,
      },
      piezasPorPaquete: 180,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/camapana-250.webp",
        alt: "campana-250-cristal",
      },
    },

    // * Amenidades
    {
      id: "lapiz-25-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Lapiz",
      volumen: 25,
      categorias: [CategoriaProducto.AMENIDADES],
      rosca: {
        diametro: CodigoRosca.ROSCA_18,
        estandar: null,
      },
      piezasPorPaquete: 1500,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "/assets/product_img/lapiz-25.webp",
        alt: "lapiz-25-cristal",
      },
    },
    {
      id: "invertida-30-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Invertida",
      volumen: 30,
      categorias: [CategoriaProducto.AMENIDADES],
      rosca: {
        diametro: CodigoRosca.ROSCA_18,
        estandar: null,
      },
      piezasPorPaquete: 900,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "/assets/product_img/invertidad-30.webp",
        alt: "invertida-30-cristal",
      },
    },
    {
      id: "institucional-30-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Institucional",
      volumen: 30,
      categorias: [CategoriaProducto.AMENIDADES],
      rosca: {
        diametro: CodigoRosca.ROSCA_18,
        estandar: null,
      },
      piezasPorPaquete: 900,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "/assets/product_img/institucional.webp",
        alt: "institucional-30-cristal",
      },
    },
    {
      id: "cilindrica-30-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Cilindrica",
      volumen: 30,
      categorias: [CategoriaProducto.AMENIDADES],
      rosca: {
        diametro: CodigoRosca.ROSCA_18,
        estandar: null,
      },
      piezasPorPaquete: 900,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "/assets/product_img/cilindrica.webp",
        alt: "cilindrica-30-cristal",
      },
    },
    {
      id: "cilindrica-40-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Cilindrica",
      volumen: 40,
      categorias: [CategoriaProducto.AMENIDADES],
      rosca: {
        diametro: CodigoRosca.ROSCA_18,
        estandar: null,
      },
      piezasPorPaquete: 900,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "/assets/product_img/cilindrica.webp",
        alt: "cilindrica-40-cristal",
      },
    },
    {
      id: "cubo-40-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Cubo",
      volumen: 40,
      categorias: [CategoriaProducto.AMENIDADES],
      rosca: {
        diametro: CodigoRosca.ROSCA_18,
        estandar: null,
      },
      piezasPorPaquete: 900,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "/assets/product_img/cubo-40.webp",
        alt: "cubo-40-cristal",
      },
    },
    {
      id: "farma-40-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Farma",
      volumen: 40,
      categorias: [CategoriaProducto.AMENIDADES],
      rosca: {
        diametro: CodigoRosca.ROSCA_18,
        estandar: null,
      },
      piezasPorPaquete: 900,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "/assets/product_img/farma-40.webp",
        alt: "farma-40-cristal",
      },
    },
    {
      id: "Oliva-45-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Oliva",
      volumen: 45,
      categorias: [CategoriaProducto.AMENIDADES],
      rosca: {
        diametro: CodigoRosca.ROSCA_18,
        estandar: null,
      },
      piezasPorPaquete: 900,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/oliva-45.webp",
        alt: "Oliva-45-cristal",
      },
    },
    {
      id: "Oval-60-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Oval",
      volumen: 60,
      categorias: [CategoriaProducto.AMENIDADES],
      rosca: {
        diametro: CodigoRosca.ROSCA_20,
        estandar: null,
      },
      piezasPorPaquete: 650,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/oval-60-125.webp",
        alt: "Oval-60-cristal",
      },
    },

    // =========================
    //  * FARMA 125 ML
    // =========================
    {
      id: "farma-125-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Farma",
      volumen: 125,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: {
        diametro: CodigoRosca.ROSCA_24,
        estandar: RoscaEstandar.GPI_410,
      },
      piezasPorPaquete: 351,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/farma-240-24.webp",
        alt: "farma-125-cristal",
      },
    },
    {
      id: "farma-125-blanco",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Farma",
      volumen: 125,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: {
        diametro: CodigoRosca.ROSCA_24,
        estandar: RoscaEstandar.GPI_410,
      },
      piezasPorPaquete: 351,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/farma-125-blanco.webp",
        alt: "farma-125-blanco",
      },
    },
    {
      id: "farma-125-ambar",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Farma",
      volumen: 125,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: {
        diametro: CodigoRosca.ROSCA_24,
        estandar: RoscaEstandar.GPI_410,
      },
      piezasPorPaquete: 351,
      color: ColorProducto.AMBAR,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/farma-125-ambar.webp",
        alt: "farma-125-ambar",
      },
    },

    // =========================
    // FARMA 240 ML
    // =========================
    {
      id: "farma-240-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Farma",
      volumen: 240,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: {
        diametro: CodigoRosca.ROSCA_24,
        estandar: RoscaEstandar.GPI_410,
      },
      piezasPorPaquete: 180,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/farma-240-24.webp",
        alt: "farma-240-cristal",
      },
    },
    {
      id: "farma-240-blanco",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Farma",
      volumen: 240,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: {
        diametro: CodigoRosca.ROSCA_24,
        estandar: RoscaEstandar.GPI_410,
      },
      piezasPorPaquete: 180,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/farma-125-blanco.webp",
        alt: "farma-240-blanco",
      },
    },
    {
      id: "farma-240-ambar",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Farma",
      volumen: 240,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: {
        diametro: CodigoRosca.ROSCA_24,
        estandar: RoscaEstandar.GPI_410,
      },
      piezasPorPaquete: 180,
      color: ColorProducto.AMBAR,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/farma-125-ambar.webp",
        alt: "farma-240-ambar",
      },
    },

    // =========================
    // PASTILLERO 110 ML
    // =========================
    {
      id: "pastillero-110-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Pastillero",
      volumen: 110,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: { diametro: CodigoRosca.ROSCA_38, estandar: null },
      piezasPorPaquete: 468,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "/assets/product_img/pastillero-110.webp",
        alt: "pastillero-110-cristal",
      },
    },
    {
      id: "pastillero-110-blanco",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Pastillero",
      volumen: 110,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: { diametro: CodigoRosca.ROSCA_38, estandar: null },
      piezasPorPaquete: 468,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/pastillero-110-blanco.webp",
        alt: "pastillero-110-blanco",
      },
    },
    {
      id: "pastillero-110-ambar",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Pastillero",
      volumen: 110,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: { diametro: CodigoRosca.ROSCA_38, estandar: null },
      piezasPorPaquete: 468,
      color: ColorProducto.AMBAR,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "/assets/product_img/pastillero-110-ambar.webp",
        alt: "pastillero-110-ambar",
      },
    },
    {
      id: "pastillero-110-azul",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Pastillero",
      volumen: 110,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: { diametro: CodigoRosca.ROSCA_38, estandar: null },
      piezasPorPaquete: 468,
      color: ColorProducto.AZUL,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "/assets/product_img/pastillero-110-azul.webp",
        alt: "pastillero-110-azul",
      },
    },
    {
      id: "pastillero-110-amarillo",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Pastillero",
      volumen: 110,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: { diametro: CodigoRosca.ROSCA_38, estandar: null },
      piezasPorPaquete: 468,
      color: ColorProducto.AMARILLO,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "/assets/product_img/pastillero-110-amarillo.webp",
        alt: "pastillero-110-amarillo",
      },
    },

    // =========================
    // PASTILLERO 150 ML
    // =========================
    {
      id: "pastillero-150-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Pastillero",
      volumen: 150,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: { diametro: CodigoRosca.ROSCA_38, estandar: null },
      piezasPorPaquete: 352,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "/assets/product_img/pastillero-150-cristal.webp",
        alt: "pastillero-150-cristal",
      },
    },
    {
      id: "pastillero-150-blanco",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Pastillero",
      volumen: 150,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: { diametro: CodigoRosca.ROSCA_38, estandar: null },
      piezasPorPaquete: 352,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/pastillero-150-blanco.webp",
        alt: "pastillero-150-blanco",
      },
    },
    {
      id: "pastillero-150-ambar",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Pastillero",
      volumen: 150,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: { diametro: CodigoRosca.ROSCA_38, estandar: null },
      piezasPorPaquete: 352,
      color: ColorProducto.AMBAR,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/pastillero-150-ambar.webp",
        alt: "pastillero-150-ambar",
      },
    },
    {
      id: "pastillero-150-azul",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Pastillero",
      volumen: 150,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: { diametro: CodigoRosca.ROSCA_38, estandar: null },
      piezasPorPaquete: 352,
      color: ColorProducto.AZUL,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "/assets/product_img/pastillero-150-azul.webp",
        alt: "pastillero-150-azul",
      },
    },
    {
      id: "pastillero-150-amarillo",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Pastillero",
      volumen: 150,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: { diametro: CodigoRosca.ROSCA_38, estandar: null },
      piezasPorPaquete: 352,
      color: ColorProducto.AMARILLO,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "/assets/product_img/pastillero-150-amarillo.webp",
        alt: "pastillero-150-amarillo",
      },
    },

    // =========================
    // TAPAS FARMACÉUTICAS
    // =========================
    {
      id: "tapa-inviolable-r24",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Tapa Inviolable",
      volumen: null,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: {
        diametro: CodigoRosca.ROSCA_24,
        estandar: null,
      },
      piezasPorPaquete: 500,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/tapa_inviolable.webp",
        alt: "tapa-inviolable-r24",
      },
    },
    {
      id: "tapa-children-r38",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Tapa Childrens",
      volumen: null,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: { diametro: CodigoRosca.ROSCA_38, estandar: null },
      piezasPorPaquete: 500,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/tapa-children.webp",
        alt: "tapa-children-r38",
      },
    },
    {
      id: "tapa-Ciega-r38",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Tapa Ciega",
      volumen: null,
      categorias: [CategoriaProducto.FARMACIA],
      rosca: { diametro: CodigoRosca.ROSCA_38, estandar: null },
      piezasPorPaquete: 500,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/tapa-ciega.webp",
        alt: "tapa-Ciega-r38",
      },
    },

    // =========================
    // TARRO 250 ML
    // =========================
    {
      id: "tarro-250-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Tarro",
      volumen: 250,
      categorias: [CategoriaProducto.TARROS],
      rosca: { diametro: CodigoRosca.ROSCA_63, estandar: null },
      piezasPorPaquete: 136,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/tarro_250.webp",
        alt: "tarro-250-cristal",
      },
    },

    // =========================
    // TARRO 500 ML
    // =========================
    {
      id: "tarro-500-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Tarro",
      volumen: 500,
      categorias: [CategoriaProducto.TARROS],
      rosca: { diametro: CodigoRosca.ROSCA_63, estandar: null },
      piezasPorPaquete: 112,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/tarro_500.webp",
        alt: "tarro-500-cristal",
      },
    },

    // =========================
    // TARRO 1000 ML
    // =========================
    {
      id: "tarro-1000-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Tarro",
      volumen: 1000,
      categorias: [CategoriaProducto.TARROS],
      rosca: { diametro: CodigoRosca.ROSCA_63, estandar: null },
      piezasPorPaquete: 104,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/tarro_1000_.webp",
        alt: "tarro-1000-cristal",
      },
    },
    {
      id: "tarro-500-colores",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Tarro",
      volumen: 500,
      categorias: [CategoriaProducto.TARROS],
      rosca: { diametro: CodigoRosca.ROSCA_63, estandar: null },
      piezasPorPaquete: 112,
      color: ColorProducto.COLORES,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.PERSONALIZADO],
      img: {
        src: "/assets/product_img/tarro_colores.webp",
        alt: "tarro-1000-Colores",
      },
    },

    // =========================
    // TAPA TARRO
    // =========================
    {
      id: "tapa-tarro-r63",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Tapa Tarro",
      volumen: null,
      categorias: [CategoriaProducto.TARROS, CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_63, estandar: null },
      piezasPorPaquete: null,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/Tapa_Tarro_.webp",
        alt: "tapa-tarro-r63",
      },
    },
    // =========================
    // VITROLERO CUADRADO
    // =========================
    {
      id: "vitrolero-cuadrado-2k",
      unidad: UnidadesDeMedida.KILOGRAMO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Vitrolero Cuadrado",
      volumen: 2, // 2 Kilos ≈ 2000 ml
      categorias: [CategoriaProducto.TARROS],
      rosca: { diametro: CodigoRosca.ROSCA_110, estandar: null },
      piezasPorPaquete: 40,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/vitrilero_cuadrado.webp",
        alt: "vitrolero-cuadrado-2k",
      },
    },

    // =========================
    // VITROLERO 1 KILO
    // =========================
    {
      id: "vitrolero-1k",
      unidad: UnidadesDeMedida.KILOGRAMO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Vitrolero",
      volumen: 1,
      categorias: [CategoriaProducto.TARROS],
      rosca: { diametro: CodigoRosca.ROSCA_110, estandar: null },
      piezasPorPaquete: 60,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "/assets/product_img/vitrilero_1000.webp",
        alt: "vitrolero-1k",
      },
    },

    // =========================
    // VITROLERO 1/2 GALÓN
    // =========================
    {
      id: "vitrolero-medio-galon",
      unidad: UnidadesDeMedida.GALON, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Vitrolero",
      volumen: 0.5, // 1/2 galón ≈ 1.9 L
      categorias: [CategoriaProducto.TARROS],
      rosca: { diametro: CodigoRosca.ROSCA_110, estandar: null },
      piezasPorPaquete: 32,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/vitrilero_1_2_galon.webp",
        alt: "vitrolero-medio-galon",
      },
    },

    // =========================
    // VITROLERO 1 GALÓN
    // =========================
    {
      id: "vitrolero-1-galon",
      unidad: UnidadesDeMedida.GALON, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Vitrolero",
      volumen: 1, // 1 galón ≈ 3.8 L
      categorias: [CategoriaProducto.TARROS],
      rosca: { diametro: CodigoRosca.ROSCA_110, estandar: null },
      piezasPorPaquete: 25,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/vitrilero_1_galon.webp",
        alt: "vitrolero-1-galon",
      },
    },

    // =========================
    // TAPA VITROLEROS
    // =========================
    {
      id: "tapa-vitrolero-r110",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Tapa Vitrolero",
      volumen: null,
      categorias: [CategoriaProducto.TARROS, CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_110, estandar: null },
      piezasPorPaquete: null,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/tapa_vitrilero.webp",
        alt: "tapa-vitrolero-r110",
      },
    },
    // =========================
    // CILINDROS
    // =========================
    {
      id: "Cilindro-1000-cristal",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Cilindro",
      volumen: 1000,
      categorias: [CategoriaProducto.PROMOCIONALES],
      rosca: { diametro: CodigoRosca.ROSCA_110, estandar: null },
      piezasPorPaquete: 105,
      color: ColorProducto.COLORES,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/cilindro_colores.webp",
        alt: "Cilindro-1000-colores",
      },
    },
    // =========================
    // COMPLEMENTOS
    // =========================
    {
      id: "Trigger-Economico-r-28",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Trigger Economico",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_28, estandar: null },
      piezasPorPaquete: 480,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/trigger_economico.webp",
        alt: "Trigger-Economico-r-28",
      },
    },
    {
      id: "Trigger-Industrial-r-28",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Trigger Industrial",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_28, estandar: null },
      piezasPorPaquete: 500,
      color: ColorProducto.CRISTAL,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.MULTICOLOR],
      img: {
        src: "/assets/product_img/trigger-industrial.webp",
        alt: "Trigger-Industrial-r-28",
      },
    },

    {
      id: "Trigger-Cola-Pato-r-28",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Trigger Cola de Pato",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_28, estandar: null },
      piezasPorPaquete: 500,
      color: ColorProducto.COLORES,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.MULTICOLOR],
      img: {
        src: "/assets/product_img/Trigger-cola-de-pato.webp",
        alt: "Trigger-Cola-Pato-r-28",
      },
    },
    {
      id: "Trigger-Mini-28",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Trigger Mini",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_28, estandar: null },
      piezasPorPaquete: 900,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.MULTICOLOR],
      img: {
        src: "/assets/product_img/mini-trigger-28.webp",
        alt: "Trigger-Mini-28",
      },
    },

    {
      id: "Trigger-Mini-24",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Trigger Mini",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_24, estandar: null },
      piezasPorPaquete: 900,
      color: ColorProducto.COLORES,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.MULTICOLOR],
      img: {
        src: "/assets/product_img/mini-trigger-24.webp",
        alt: "Trigger-Mini-24",
      },
    },
    {
      id: "Atomizador-Boston-18",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Atomizador Boston",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_18, estandar: null },
      piezasPorPaquete: 1000,
      color: ColorProducto.COLORES,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.MULTICOLOR],
      img: {
        src: "/assets/product_img/atomizaro_boston_1.webp",
        alt: "Atomizador-Boston-18",
      },
    },
    {
      id: "Atomizador-Boston-20",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Atomizador Boston",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_20, estandar: null },
      piezasPorPaquete: 2500,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/atomizaro_boston_1.webp",
        alt: "Atomizador-Boston-20",
      },
    },
    {
      id: "Atomizador-Boston-24",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Atomizador Boston",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_24, estandar: null },
      piezasPorPaquete: 1000,
      color: ColorProducto.COLORES,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.MULTICOLOR],
      img: {
        src: "/assets/product_img/atomizaro_boston_1.webp",
        alt: "Atomizador-Boston-24",
      },
    },
    {
      id: "Atomizador-Boston-28",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Atomizador Boston",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_28, estandar: null },
      piezasPorPaquete: 1000,
      color: ColorProducto.COLORES,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.MULTICOLOR],
      img: {
        src: "/assets/product_img/atomizaro_boston_1.webp",
        alt: "Atomizador-Boston-28",
      },
    },

    {
      id: "Bomba-Dosificadora-28",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Bomba Dosificadora",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_28, estandar: null },
      piezasPorPaquete: 1000,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/bomba-dosificadora.webp",
        alt: "Bomba-Dosificadora-28",
      },
    },
    {
      id: "Bomba-Dosificadora-28-A",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Bomba Dosificadora Reforzada",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_28, estandar: null },
      piezasPorPaquete: 600,
      color: ColorProducto.AZUL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/bomba-dosificadora-reforzada.webp",
        alt: "Bomba-Dosificadora-28-A",
      },
    },

    {
      id: "Bomba-Dosificadora-24-A",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Bomba Dosificadora",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_24, estandar: null },
      piezasPorPaquete: 2000,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.MULTICOLOR],
      img: {
        src: "/assets/product_img/bomba-dosificadora.webp",
        alt: "Bomba-Dosificadora-24-A",
      },
    },
    {
      id: "Sport-r-28",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Sport",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS, CategoriaProducto.TARROS],
      rosca: { diametro: CodigoRosca.ROSCA_28, estandar: null },
      piezasPorPaquete: 2300,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "/assets/product_img/tapa-sport.webp",
        alt: "Sport-r-28",
      },
    },
    {
      id: "Sport-r-63",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Sport",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_63, estandar: null },
      piezasPorPaquete: 1500,
      color: ColorProducto.COLORES,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "/assets/product_img/tapa_sport.webp",
        alt: "Sport-r-63",
      },
    },

    {
      id: "Sport-Tapa-Ciega-r-18",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Tapa Ciega",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_18, estandar: null },
      piezasPorPaquete: 1000,
      color: ColorProducto.COLORES,
      etiquetas: [EtiquetaProducto.STOCK, EtiquetaProducto.MULTICOLOR],
      img: {
        src: "/assets/product_img/tapa-ciega-p.webp",
        alt: "Sport-Tapa-Ciega-r-18",
      },
    },
    {
      id: "doble-pared-r-18",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Doble Pared",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: { diametro: CodigoRosca.ROSCA_18, estandar: null },
      piezasPorPaquete: 1000,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "/assets/product_img/tapa-doble-pared.webp",
        alt: "doble-pared-r-18",
      },
    },
    {
      id: "Flip-Top-r-18",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Flip Top",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: {
        diametro: CodigoRosca.ROSCA_18,
        estandar: RoscaEstandar.GPI_410,
      },
      piezasPorPaquete: 1000,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/flip-flop-1.webp",
        alt: "Flip-Top-r-18",
      },
    },

    {
      id: "Flip-Top-r-20",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Flip Top",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: {
        diametro: CodigoRosca.ROSCA_20,
        estandar: RoscaEstandar.GPI_410,
      },
      piezasPorPaquete: 1000,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/flip-flop-2.webp",
        alt: "Flip-Top-r-20",
      },
    },
    {
      id: "Flip-Top-r-24-410",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Flip Top",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: {
        diametro: CodigoRosca.ROSCA_24,
        estandar: RoscaEstandar.GPI_410,
      },
      piezasPorPaquete: 1000,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/flip-flop-3.webp",
        alt: "Flip-Top-r-24-410",
      },
    },
    {
      id: "Flip-Top-r-24-415",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Flip Top",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: {
        diametro: CodigoRosca.ROSCA_24,
        estandar: RoscaEstandar.GPI_415,
      },
      piezasPorPaquete: 1000,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/flip-flop-2.webp",
        alt: "Flip-Top-r-24-415",
      },
    },
    {
      id: "Flip-Top-r-28-410",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Flip Top",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: RoscaEstandar.GPI_410,
      },
      piezasPorPaquete: 1000,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/flip-flop-2.webp",
        alt: "Flip-Top-r-28-410",
      },
    },
    {
      id: "Flip-Top-r-28-410-29",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Flip Top",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: RoscaEstandar.GPI_410,
      },
      piezasPorPaquete: 1000,
      color: ColorProducto.NATURAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/flip-flop-natural.webp",
        alt: "Flip-Top-r-28-410",
      },
    },
    {
      id: "Tapa-Disk-Top-r-24-415",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Tapa Disk Top",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: {
        diametro: CodigoRosca.ROSCA_24,
        estandar: RoscaEstandar.GPI_415,
      },
      piezasPorPaquete: 1000,
      color: ColorProducto.BLANCO,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/tapa-disk-top.webp",
        alt: "Tapa-Disk-Top-r-24-415",
      },
    },
    {
      id: "Tapa-Disk-Top-r-20-410",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Tapa Disk Top",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: {
        diametro: CodigoRosca.ROSCA_20,
        estandar: RoscaEstandar.GPI_410,
      },
      piezasPorPaquete: 1000,
      color: ColorProducto.NATURAL,
      etiquetas: [EtiquetaProducto.PEDIDO],
      img: {
        src: "/assets/product_img/disk-top-sup.webp",
        alt: "Tapa-Disk-Top-r-20-410",
      },
    },
    {
      id: "Tapa-Disk-Top-r-28-415",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Tapa Disk Top",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: RoscaEstandar.GPI_415,
      },
      piezasPorPaquete: 1000,
      color: ColorProducto.NATURAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/disk-top-sup.webp",
        alt: "Tapa-Disk-Top-r-28-415",
      },
    },
    {
      id: "Tapa-Disk-Top-r-28-410",
      unidad: UnidadesDeMedida.MILILITRO, // utiliza el objeto, con la propiedad que corresponda
      nombre: "Tapa Disk Top",
      volumen: null,
      categorias: [CategoriaProducto.COMPLEMENTOS],
      rosca: {
        diametro: CodigoRosca.ROSCA_28,
        estandar: RoscaEstandar.GPI_410,
      },
      piezasPorPaquete: 1000,
      color: ColorProducto.NATURAL,
      etiquetas: [EtiquetaProducto.STOCK],
      img: {
        src: "/assets/product_img/tapa-disk-top.webp",
        alt: "Tapa-Disk-Top-r-28-410",
      },
    },
  ]),
});

export {
  CatalogoProductos,
  CategoriaProducto,
  CodigoRosca,
  ColorProducto,
  EtiquetaProducto,
};
