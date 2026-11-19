"use client";
import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type Notification = {
  message: string;
  type: "success" | "error";
};

const AUTO_CLOSE_MS = 5000;

type NotificationProps = {
  notification: Notification | null;
  onClose: () => void;
};

const Notifications = ({ notification, onClose }: NotificationProps) => {
  useEffect(() => {
    if (!notification) return;
    const timer = setTimeout(onClose, AUTO_CLOSE_MS);
    return () => clearTimeout(timer);
  }, [notification, onClose]);

  const isSuccess = notification?.type === "success";

  return (
    <div className="fixed right-4 bottom-4 sm:right-10 sm:bottom-10 z-[6000]">
      <AnimatePresence>
        {notification && (
          <motion.div
            key={notification.message}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.2 }}
            role={isSuccess ? "status" : "alert"}
            className="flex items-center w-full max-w-xs p-4 rounded-lg shadow text-gray-400 bg-gray-800"
          >
            <div
              className={`${isSuccess ? "bg-green-800 text-green-200" : "bg-red-800 text-red-200"} inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg`}
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                {isSuccess ? (
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                ) : (
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                )}
              </svg>
            </div>
            <div className="ms-3 text-sm font-normal">
              {notification.message}
            </div>
            <button
              type="button"
              className="ms-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex items-center justify-center h-8 w-8 text-gray-500 hover:text-white bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Закрыть"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Notifications;
