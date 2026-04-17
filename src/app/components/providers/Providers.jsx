"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./CartProvider";
import { ThemeProvider } from "./ThemeProvider";
import { UIProvider } from "./UIProvider";

export default function Providers({ children }) {
  return (
    <ThemeProvider>
      <UIProvider>
        <CartProvider>
          {children}
          <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnHover
            draggable
            theme="light"
            toastClassName={() =>
              "bg-white text-gray-800 text-sm rounded-lg shadow-lg px-4 py-3"
            }
            progressClassName="bg-brand-accent"
          />
        </CartProvider>
      </UIProvider>
    </ThemeProvider>
  );
}
