"use client";

/**
 * ChatbotWidgetLazy
 *
 * Difiere la carga del chatbot (framer-motion, lógica conversacional)
 * fuera del bundle inicial. Se monta solo en cliente tras la hidratación.
 */

import dynamic from "next/dynamic";

const ChatbotWidget = dynamic(() => import("./ChatbotWidget"), {
  ssr: false,
});

export default function ChatbotWidgetLazy() {
  return <ChatbotWidget />;
}
