
import { ReactNode, useState } from "react";
import { toast as sonnerToast } from "sonner";

type ToastProps = {
  title?: string;
  description?: string;
  action?: ReactNode;
  variant?: "default" | "destructive" | "success";
  id?: string;
};

// This is needed to satisfy the Toaster component's expected type
export type ToasterToast = ToastProps & {
  id: string;
};

// Create a store to hold toast states
const TOAST_LIMIT = 20;
let count = 0;
const toastStore: ToasterToast[] = [];

const generateId = () => {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
};

const addToast = (toast: ToasterToast) => {
  toastStore.push(toast);
  if (toastStore.length > TOAST_LIMIT) {
    toastStore.shift();
  }
};

export const useToast = () => {
  const [toasts, setToasts] = useState<ToasterToast[]>(toastStore);
  
  const toast = ({ title, description, action, variant = "default" }: ToastProps) => {
    const id = generateId();
    const newToast = { id, title, description, action, variant };
    addToast(newToast);
    setToasts([...toastStore]);
    
    sonnerToast(title, {
      id,
      description,
      action,
      className: variant === "destructive" ? "bg-red-500" : variant === "success" ? "bg-green-500" : "",
    });
  };

  return { toast, toasts };
};

export const toast = ({ title, description, action, variant = "default" }: ToastProps) => {
  const id = generateId();
  const newToast = { id, title, description, action, variant };
  addToast(newToast);
  
  sonnerToast(title, {
    id,
    description,
    action,
    className: variant === "destructive" ? "bg-red-500" : variant === "success" ? "bg-green-500" : "",
  });
};
