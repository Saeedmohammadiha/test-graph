import React from "react";
import styles from "./popup.module.scss";

export default function Popup(props) {
  const { setTogglePopup, titlePopup } = props;

  return (
    <div
      className={styles["overlay"]}
      onClick={(e) => {
        setTogglePopup(false);
      }}
    >
      <div className={styles["modal-body"]}>
        <span className={styles["close-button"]}>&times;</span>
        <h2>{titlePopup}</h2>
        <button>OK</button>
      </div>
    </div>
  );
}
