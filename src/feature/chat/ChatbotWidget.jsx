"use client";

import { useState, useEffect, useRef } from "react";
import { useChatbot } from "@/feature/chat/useChatbot";
import { MessageCircle, X } from "lucide-react";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const { messages, sendMessage, isLoading } = useChatbot();

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isLoading]);

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105"
          style={{
            background: "var(--color-brand-accent)",
            color: "white",
          }}
        >
          <MessageCircle size={24} />
        </button>
      )}

      {isOpen && (
        <div
          className="fixed bottom-4 right-4 z-50 w-[90%] sm:w-80 h-[480px] rounded-xl flex flex-col backdrop-blur-md shadow-xl"
          style={{
            background: "var(--color-surface-elevated)",
            border: "1px solid var(--color-border-default)",
          }}
        >
          {/* HEADER */}
          <div
            className="flex items-center justify-between px-4 py-3 rounded-t-xl"
            style={{
              borderBottom: "1px solid var(--color-border-default)",
            }}
          >
            <div className="flex flex-col">
              <span className="font-semibold text-sm">Asistente La Merced</span>
              <span className="text-xs opacity-70">En línea</span>
            </div>

            <button onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* MENSAJES */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.length === 0 && (
              <p className="text-sm opacity-70">
                Hola 👋 ¿En qué podemos ayudarte con envases PET?
              </p>
            )}

            {messages.map((msg, i) => {
              const text = msg.parts?.[0]?.text || "";

              return (
                <div
                  key={i}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className="px-3 py-2 rounded-lg max-w-[80%] text-sm"
                    style={{
                      background:
                        msg.role === "user"
                          ? "var(--color-brand-accent)"
                          : "var(--color-surface)",
                      color:
                        msg.role === "user" ? "white" : "var(--foreground)",
                    }}
                  >
                    {text}

                    {msg.payload?.phone && (
                      <a
                        href={`https://wa.me/${msg.payload.phone}?text=${encodeURIComponent(
                          msg.payload.message,
                        )}`}
                        target="_blank"
                        className="block mt-1 text-xs underline"
                      >
                        Abrir WhatsApp
                      </a>
                    )}
                  </div>
                </div>
              );
            })}

            {isLoading && (
              <div className="flex justify-start">
                <div
                  className="px-3 py-2 rounded-lg max-w-[80%] text-sm flex gap-1"
                  style={{
                    background: "var(--color-surface)",
                  }}
                >
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* INPUT */}
          <div
            className="p-3 flex gap-2"
            style={{
              borderTop: "1px solid var(--color-border-default)",
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="flex-1 p-2 rounded-md text-sm outline-none"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border-default)",
                color: "var(--foreground)",
              }}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />

            <button
              onClick={handleSend}
              className="px-3 py-2 rounded-md text-sm font-medium"
              style={{
                background: "var(--color-brand-accent)",
                color: "white",
              }}
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
