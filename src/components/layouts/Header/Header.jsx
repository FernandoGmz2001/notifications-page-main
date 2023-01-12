import NotificationBadge from "../../ui/NotificationBadge";
import "../../../styles/Header.css";
import Body from "../../layouts/Body/Body";
import People from "../../../utils/NotificationInfo.json";
import { useState } from "react";

function Header() {
  const [notification, setNotification] = useState(People);

  function markAllReaded() {
    setNotification((notification) =>
      notification.map((p) => {
        return {
          ...p,
          isReaded: true,
        };
      })
    );
  }

  return (
    <>
      <header className="header">
        <div className="header_notifications">
          <h3>Notifications</h3>
          <NotificationBadge
            Notifications={
              notification.filter((n) => n.isReaded == false).length
            }
          />
        </div>
        <div className="header_markAsRead">
          <a onClick={markAllReaded}>Mark all as read</a>
        </div>
      </header>
      <Body initialReaded={notification} />
    </>
  );
}

export default Header;
