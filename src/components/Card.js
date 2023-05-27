import React, { useState } from "react";
import styles from "./card.module.scss";
import airplane from "../assets/airplane.png";

const Card = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleInputChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div className={isChecked?`${styles["height"]} ${styles["checked"]}`: styles["height"]}>
      <div className={styles["card-container"]}>
        <input
          type="checkbox"
          id={props.id}
          className={styles["card-toggle"]}
          value="selected"
          checked={isChecked}
          onChange={handleInputChange}
        />

        <label className={styles["card"]} htmlFor={props.id}>
          <div className={`${styles["front"]} ${styles["face"]}`}>
            <div className={styles["ribbon"]}>Economy</div>
            <div className={styles["front-inner"]}>
              <div className={styles["description"]}>
                <div className={styles["title"]}>
                  <div className="logo" style={{width:'50px', height:'50px'}}>
                    <img src="#" alt="logo" />
                  </div>
                  Lufthansa </div>
                <div className={styles["detail"]}>
                  <span>benaluru</span>
                  <span>6:20</span>
                  <span>jun 12</span>
                </div>
                <div className={styles["plane-icon"]}>
                  <img alt="airplane" src={airplane} />
                </div>
                <div className={styles["detail"]}>
                  <span>new delhi</span>
                  <span>5:45</span>
                  <span>jun 12</span>
                </div>
              </div>
              <div className={styles["cost"]}>$100</div>
            </div>
          </div>
          <div className={`${styles["inner-bottom"]} ${styles["face"]}`}>
            <div className={styles["inner-boottom-rotate"]}>
              <div className={styles["bottom-description"]}>
                <div className={styles["row"]}>
                  <div className={styles["flex"]}>
                    <span>6:20 - 8:45</span>
                    <span>Flight Time</span>
                  </div>
                  <div className={styles["flex"]}>
                    <span>2h 25 min</span>
                    <span>Duration</span>
                  </div>
                  <div className={styles["flex"]}>
                    <span>5:35</span>
                    <span>Boarding</span>
                  </div>
                </div>
                <div className={styles["row"]}>
                  <div className={styles["flex"]}>
                    <span>No</span>
                    <span>Transfer</span>
                  </div>
                  <div className={styles["flex"]}>
                    <span>8</span>
                    <span>Gate</span>
                  </div>
                  <div className={styles["flex"]}>
                    <span>20A</span>
                    <span>Seat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles["inner-top"]} ${styles["face"]}`}>
            <div className={styles["ribbon"]}>Economy</div>
            <div className={styles["top-description"]}>
              <div className={styles["from"]}>
                <span>From</span>
                <span>BLR</span>
                <span>kempegowda International</span>
              </div>
              <div className={styles["icon"]}>
                <img src={airplane} alt="airplane" />
                <span className={styles["cost"]}>$100</span>
              </div>
              <div className={styles["to"]}>
                <span>To</span>
                <span>DEL</span>
                <span>Indira Gandhi International</span>
              </div>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Card;
