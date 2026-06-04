"use client";
/**
 * ChatbotWidget
 *
 * Widget flotante global controlado por UIProvider (no estado local).
 *
 * Responsabilidades:
 * - Renderizar botón flotante (FAB) y panel del chatbot
 * - Consumir lógica conversacional desde useChatbot
 * - Gestionar input del usuario y envío de mensajes
 * - Auto-scroll al último mensaje
 *
 * Integración:
 * - Usa OVERLAYS.CHATBOT para visibilidad (open, close, isOpen)
 * - Se coordina con otros overlays (ej: CART) para evitar colisiones UI
 *
 * Notas:
 * - z-index elevado (z-[60]) para priorizar sobre contenido base
 * - Se desmonta si el carrito está abierto (regla UX)
 * - Mantiene estado mínimo local (input), lógica global en hooks/providers
 */

import { useState, useEffect, useRef } from "react";
import { useChatbot } from "@/feature/chat/useChatbot";
import { useUI } from "@/components/providers/UIProvider";
import { OVERLAYS } from "@/utils/constants/overlays";
import { MessageCircle, X, Send } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function ChatbotWidget() {
  const [input, setInput] = useState("");

  const { messages, sendMessage, isLoading } = useChatbot();
  const { isOpen, open, close } = useUI();

  const isChatOpen = isOpen(OVERLAYS.CHATBOT);
  const isCartOpen = isOpen(OVERLAYS.CART);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
  };

  if (isCartOpen) return null;

  return (
    <>
      {/* FAB */}
      <AnimatePresence initial={false}>
        {!isChatOpen && (
          <motion.button
            key="chat-fab"
            onClick={() => open(OVERLAYS.CHATBOT)}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="fixed bottom-4 right-4 z-[60] w-14 h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer bg-[var(--color-brand-accent)] text-white"
          >
            <MessageCircle size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* PANEL */}
      <AnimatePresence initial={false}>
        {isChatOpen && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 40, scale: 0.96, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 24, scale: 0.96, filter: "blur(4px)" }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="fixed bottom-4 right-4 z-[60] w-[90%] sm:w-80 h-[480px] rounded-xl flex flex-col backdrop-blur-md shadow-xl bg-[var(--color-surface-elevated)] border border-[var(--color-border-default)]"
          >
            {/* HEADER */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className="flex items-center justify-between px-4 py-3 rounded-t-xl border-b border-[var(--color-border-default)]"
            >
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-[var(--color-brand-accent)]"
                  >
                    <MessageCircle size={14} color="white" />
                  </div>
                  <span
                    className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 bg-green-500 border-[var(--color-surface-elevated)]"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-sm leading-tight">
                    Asistente La Merced
                  </span>
                  <span className="text-xs opacity-50">En línea</span>
                </div>
              </div>

              <motion.button
                onClick={() => close(OVERLAYS.CHATBOT)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
              >
                <X size={18} />
              </motion.button>
            </motion.div>

            {/* MENSAJES */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 chat-scrollbar">
              {messages.length === 0 && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="text-sm opacity-60"
                >
                  Hola 👋 ¿En qué podemos ayudarte con envases PET?
                </motion.p>
              )}

              {messages.map((msg, i) => {
                const text = msg.parts?.[0]?.text || "";
                const isUser = msg.role === "user";

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      delay: 0.04 * Math.min(i, 6),
                    }}
                    className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`px-3 py-2 rounded-lg max-w-[80%] text-sm ${
                        isUser
                          ? "bg-[var(--color-brand-accent)] text-white"
                          : "bg-[var(--color-surface)] text-[var(--foreground)]"
                      }`}
                    >
                      {text}

                      {msg.payload?.phone && (
                        <a
                          href={`https://wa.me/${msg.payload.phone}?text=${encodeURIComponent(
                            msg.payload.message,
                          )}`}
                          target="_blank"
                          className="block mt-1 text-xs underline opacity-80"
                        >
                          Abrir WhatsApp
                        </a>
                      )}
                    </div>
                  </motion.div>
                );
              })}

              <AnimatePresence>
                {isLoading && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="flex justify-start"
                  >
                    <div
                      className="px-3 py-2 rounded-lg max-w-[80%] text-sm flex gap-1 items-center bg-[var(--color-surface)]"
                    >
                      <span className="dot" />
                      <span className="dot" />
                      <span className="dot" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </div>

            {/* INPUT */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.2 }}
              className="p-3 flex gap-2 border-t border-[var(--color-border-default)]"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="flex-1 p-2 rounded-md text-sm outline-none transition-all duration-150 bg-[var(--color-surface)] border border-[var(--color-border-default)] text-[var(--foreground)]"
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />

              <motion.button
                onClick={handleSend}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1.5 bg-[var(--color-brand-accent)] text-white"
              >
                <Send size={14} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
