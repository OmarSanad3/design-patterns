import { useEffect, useState } from "react";
import { Toast, type ToastProps } from "./Toast";
import { toastObserver } from "..";

export function ToastContainer() {
  const [notifications, setNotifications] = useState<
    Omit<ToastProps, "onClose">[]
  >([]);

  useEffect(() => {
    const unsubscribe = toastObserver.subscribe((newNotification) => {
      setNotifications((prev) => [...prev, newNotification]);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="absolute bottom-0 inset-e-0 p-4 space-y-2 w-full h-full justify-end  flex flex-col max-w-xs ">
      {notifications.map((noti) => (
        <Toast
          id={noti.id}
          key={noti.id}
          message={noti.message}
          variant={noti.variant}
          onClose={() => {
            setNotifications((prev) => prev.filter((n) => n.id !== noti.id));
          }}
        />
      ))}
    </div>
  );
}
