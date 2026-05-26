import React, { useEffect } from "react";

const Toast = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-xl shadow-lg text-sm font-semibold backdrop-blur-sm border transition-all
        ${type === "success"
          ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400"
          : "bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400"
        }`}
      role="status"
      aria-live="polite"
    >
      <span>{type === "success" ? "✅" : "❌"}</span>
      {message}
    </div>
  );
};

export default Toast;