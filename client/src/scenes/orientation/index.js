import React from "react";
import OrientationCard from "components/orientationCard/OrientationCard";
import styles from "./orientationmain.module.css";
const Orientation = () => {
  return (
    <div>
      <div className="maincarddiv">
        <div>
          <h2>Upcoming Events...</h2>
        </div>
        <div className={styles.carddivinner}>
          <OrientationCard />
        </div>
        <div>
          <h2> Prerecorded Sessions</h2>
        </div>
        <div className={styles.carddivinner}>
          <OrientationCard />
        </div>
      </div>
    </div>
  );
};

export default Orientation;
