import React from "react";

function NotificationBadge({ Notifications }) {
  return (
    <div className="notificationBadge">
      <p>{Notifications}</p>
    </div>
  );
}

export default NotificationBadge;
