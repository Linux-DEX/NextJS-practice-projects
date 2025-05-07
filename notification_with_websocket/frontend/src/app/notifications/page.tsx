import NotificationItem from "./NotificationItem";
import { fetchNotifications } from "@/lib/api";
import { Notification } from "@/types/notification";

export default async function NotificationsPage() {
  const userId = 1; 
  const notifications: Notification[] = await fetchNotifications(userId);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      {notifications.length === 0 ? (
        <p>No notifications yet.</p>
      ) : (
        notifications.map((n) => <NotificationItem key={n.id} notif={n} />)
      )}
    </div>
  );
}

