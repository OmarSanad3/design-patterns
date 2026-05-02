import type { ToastProps } from "./components/Toast";
import { Observer } from "./Observer";

console.log(
  "%cObserver Design Pattern!",
  "color: #815854; background-color: #F9EBDE; font-size: 20px; font-weight: bold;",
);

export const toastObserver = new Observer<Omit<ToastProps, "onClose">>();

export const toast = (message: string) =>
  toastObserver.notifySubscribes({
    id: Math.random(),
    message,
    variant: "default",
  });

toast.success = (message: string) =>
  toastObserver.notifySubscribes({
    id: Math.random(),
    message,
    variant: "success",
  });

toast.error = (message: string) =>
  toastObserver.notifySubscribes({
    id: Math.random(),
    message,
    variant: "error",
  });
