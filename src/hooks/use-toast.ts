
import { useState, useEffect, useCallback, useRef } from "react";

// Types
export interface ToastProps {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  duration?: number;
  variant?: "default" | "destructive";
  onClose?: () => void;
}

export interface ToastActionElement {
  altText: string;
  onClick: () => void;
  children: React.ReactNode;
}

interface UseToastProps {
  toasts: ToastProps[];
  toast: (props: Omit<ToastProps, "id">) => string;
  dismiss: (toastId?: string) => void;
  update: (props: ToastProps) => void;
}

// Generate a unique id for a toast
const generateId = () => Math.random().toString(36).substr(2, 9);

export const useToast = (): UseToastProps => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);
  const toastsRef = useRef(toasts);

  useEffect(() => {
    toastsRef.current = toasts;
  }, [toasts]);

  const toast = useCallback(
    ({ duration = 5000, ...props }: Omit<ToastProps, "id">) => {
      const id = generateId();

      const newToast = {
        id,
        duration,
        ...props,
      };

      setToasts((prevToasts) => [...prevToasts, newToast]);

      if (duration > 0) {
        setTimeout(() => {
          dismiss(id);
        }, duration);
      }

      return id;
    },
    []
  );

  const dismiss = useCallback((toastId?: string) => {
    if (toastId) {
      setToasts((prevToasts) =>
        prevToasts.filter((toast) => toast.id !== toastId)
      );
    } else {
      setToasts([]);
    }
  }, []);

  const update = useCallback((props: ToastProps) => {
    if (!props.id) {
      return;
    }

    setToasts((prevToasts) =>
      prevToasts.map((t) =>
        t.id === props.id ? { ...t, ...props } : t
      )
    );
  }, []);

  return {
    toasts,
    toast,
    dismiss,
    update,
  };
};

// Single use toast function
export const toast = (props: Omit<ToastProps, "id">) => {
  const { toast } = useToast();
  return toast(props);
};
