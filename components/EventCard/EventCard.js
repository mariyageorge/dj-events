import styles from "./EventCard.module.scss";

const EventCard = ({ evt }) => {
  const handleClick = () => {
    console.log("clicked");
  };
  
  return (
    <div className={styles.eventCard}>
      <div className={styles.eventName}>{evt.name}</div>
      <div className={styles.eventDescription}>{evt.description}</div>
      <div>
        <button onClick={handleClick}>More Details</button>
      </div>
    </div>
  );
};

export default EventCard;
