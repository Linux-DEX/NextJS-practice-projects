"use client";

import { Notification } from "@/types/notification";
import { markAsRead } from "@/lib/api";
import { useState } from "react";

interface Props {
  notif: Notification;
}

export default function NotificationItem({ notif }: Props) {
  const [isRead, setIsRead] = useState(notif.is_read);

  const handleClick = async () => {
    if (!isRead) {
      await markAsRead(notif.id);
      setIsRead(true);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`p-3 border rounded-lg mb-2 cursor-pointer ${isRead ? "bg-gray-100" : "bg-white"} hover:bg-blue-50`}
    >
      <p className="text-sm">{notif.message}</p>
      <p className="text-xs text-gray-500">{new Date(notif.created_at).toLocaleString()}</p>
    </div>
  );
}

