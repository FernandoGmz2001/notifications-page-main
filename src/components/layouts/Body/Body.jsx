import Notification from "../../common/Notification/Notification";
import "../../../styles/Body.css";

function Body({ initialReaded }) {
  return (
    <div className="body">
      {initialReaded.map((people) => {
        return (
          <Notification
            key={people.id}
            Image={people.Image}
            Name={people.Name}
            Action={people.Action}
            Content={people.Content}
            Group={people.Group}
            Time={people.Time}
            isReaded={people.isReaded}
            ImagePost={people.ImagePost}
            Message={people.Message}
          />
        );
      })}
    </div>
  );
}

export default Body;
