import React, { useState } from "react";
import styles from "./card.module.scss";
import airplane from "../assets/airplane.png";

const Card = (props) => {
  const {
    boarding,
    dst,
    gates,
    logoSrc,
    logoStyle,
    price,
    seat,
    src,
    transfer,
  } = props?.data;
  const [isChecked, setIsChecked] = useState(false);

  
  const handleInputChange = (event) => {
    setIsChecked(event.target.checked);
  };


  /**
   * convert time to human readable 
   * 
   * @param {string} dateString 
   * @param {string} option 
   * @returns objeect
   */
  function convertTime(dateString, option) {
    let date = new Date(dateString);
    if (option === "time") {
      let timeOptions = {
        timeZone: "Asia/Tehran",
        hour: "numeric",
        minute: "2-digit",
        hour12: false,
      };
      return date.toLocaleString("en-US", timeOptions);

    } else if (option === "date") {
      let dateOptions = {
        timeZone: "Asia/Tehran",
        month: "long",
        day: "2-digit",
      };
      return date.toLocaleString("en-US", dateOptions);

    } else return;
  }



/**
 * this function calculates the duration of the flight
 * 
 * @param {object} start 
 * @param {object} end 
 * @returns object
 */
  function calculateDuration(start, end) {
    var duration = end - start;

    var hours = Math.floor(duration / (1000 * 60 * 60));
    var minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));

    return {
      hours: hours,
      minutes: minutes,
    };
  }

  const duration = calculateDuration(new Date(src.time), new Date(dst.time));



  return (
    <div
      className={
        isChecked
          ? `${styles["height"]} ${styles["checked"]}`
          : styles["height"]
      }
    >
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
            <div className={styles["ribbon"]}>{props?.data?.class}</div>
            <div className={styles["front-inner"]}>
              <div className={styles["description"]}>
                <div className={styles["logo"]}>
                    <img src={logoSrc} alt="logo" style={logoStyle} />
                </div>
                <div className={styles["detail"]}>
                  <span>{src?.country}</span>
                  <span>{convertTime(src.time, "time")}</span>
                  <span>{convertTime(src.time, "date")}</span>
                </div>
                <div className={styles["plane-icon"]}>
                  <img alt="airplane" src={airplane} />
                </div>
                <div className={styles["detail"]}>
                  <span>{dst?.country}</span>
                  <span>{convertTime(dst.time, "time")}</span>
                  <span>{convertTime(dst.time, "date")}</span>
                </div>
              </div>
              <div className={styles["cost"]}>${price}</div>
            </div>
          </div>
          <div className={`${styles["inner-bottom"]} ${styles["face"]}`}>
            <div className={styles["inner-boottom-rotate"]}>
              <div className={styles["bottom-description"]}>
                <div className={styles["row"]}>
                  <div className={styles["flex"]}>
                    <span>
                      {convertTime(src.time, "time")}-{" "}
                      {convertTime(dst.time, "time")}
                    </span>
                    <span>Flight Time</span>
                  </div>
                  <div className={styles["flex"]}>
                    <span>{duration?.hours}h {duration?.minutes}min</span>
                    <span>Duration</span>
                  </div>
                  <div className={styles["flex"]}>
                    <span>{boarding}</span>
                    <span>Boarding</span>
                  </div>
                </div>
                <div className={styles["row"]}>
                  <div className={styles["flex"]}>
                    <span>{transfer === true ? "Yes" : "No"}</span>
                    <span>Transfer</span>
                  </div>
                  <div className={styles["flex"]}>
                    <span>{gates}</span>
                    <span>Gate</span>
                  </div>
                  <div className={styles["flex"]}>
                    <span>{seat}</span>
                    <span>Seat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles["inner-top"]} ${styles["face"]}`}>
            <div className={styles["ribbon"]}>{props?.data?.class}</div>
            <div className={styles["top-description"]}>
              <div className={styles["from"]}>
                <span>From</span>
                <span>{src.iso3}</span>
                <span>{src.airline}</span>
              </div>
              <div className={styles["icon"]}>
              <div className={styles["dot"]}></div>
                <img src={airplane} alt="airplane" />
                <span className={styles["cost"]}>${price}</span>
              </div>
              <div className={styles["to"]}>
                <span>To</span>
                <span>{dst.iso3}</span>
                <span>{dst.airline}</span>
              </div>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Card;
