import { Notification } from "@/types/notification";

const API_BASE = "http://localhost:8000";

export const fetchNotifications = async (userId: number): Promise<Notification[]> => {
  const res = await fetch(`${API_BASE}/notifications/${userId}`);
  if (!res.ok) throw new Error("Failed to fetch notifications");
  return res.json();
};

export const markAsRead = async (id: number): Promise<void> => {
  const res = await fetch(`${API_BASE}/notifications/${id}/read`, {
    method: "PATCH",
  });
  if (!res.ok) throw new Error("Failed to mark as read");
};

