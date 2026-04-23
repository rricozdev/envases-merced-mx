"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";

const UIContext = createContext(null);

export function UIProvider({ children }) {
  const [overlays, setOverlays] = useState({});

  const open = useCallback((key) => {
    setOverlays((prev) => ({ ...prev, [key]: true }));
  }, []);

  const close = useCallback((key) => {
    setOverlays((prev) => ({ ...prev, [key]: false }));
  }, []);

  const toggle = useCallback((key) => {
    setOverlays((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const closeAll = useCallback(() => {
    setOverlays({});
  }, []);

  const isOpen = useCallback((key) => Boolean(overlays[key]));

  const value = useMemo(
    () => ({
      overlays,
      open,
      close,
      toggle,
      closeAll,
      isOpen,
    }),
    [overlays, open, close, toggle, closeAll, isOpen],
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useUI debe usarse dentro de UIProvider");
  }
  return context;
}
