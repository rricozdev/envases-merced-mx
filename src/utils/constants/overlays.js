/**
 * Mapa centralizado de overlays globales de la UI.
 *
 * Propósito:
 * - Definir identificadores únicos para cada capa flotante (drawer, modal, widget, etc.)
 * - Evitar strings hardcodeados en múltiples componentes
 * - Permitir control unificado desde UIProvider (open, close, isOpen)
 *
 * Beneficios:
 * - Escalabilidad: agregar nuevos overlays sin romper consistencia
 * - Mantenibilidad: cambios en un solo lugar
 * - Prevención de colisiones de estado entre componentes
 *
 * Uso típico:
 * - open(OVERLAYS.CART)
 * - isOpen(OVERLAYS.CHATBOT)
 */

export const OVERLAYS = {
  CART: "cart",
  CHATBOT: "chatbot",
};
