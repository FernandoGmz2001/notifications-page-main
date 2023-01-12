import React from "react";
import RedBadge from "../../ui/RedBadge";

function Notification({
  Image,
  Name,
  Action,
  Content,
  Group,
  Time,
  isReaded,
  ImagePost,
  Message,
}) {
  return (
    <div
      className={isReaded ? "notification-container" : "notification-unreaded"}
    >
      <div className="notification">
        <div className="notification_image">
          <img src={Image} alt="" />
        </div>
        <div className="notification_content">
          <div className="notification_content-container">
            <p>
              <span className="notification_user">{Name}</span> {Action}
              <span className="notification_post">{Content}</span>
              <span className="notification_group">{Group}</span>
            </p>
            {isReaded ? null : <RedBadge />}
          </div>
          <div className="notification_time">
            <p>{Time}</p>
          </div>
          <div className={Message ? "notification_message" : null}>
            <p>{Message}</p>
          </div>
        </div>
      </div>
      <div className="notification_image-post">
        <img src={ImagePost} alt="" />
      </div>
    </div>
  );
}

export default Notification;
