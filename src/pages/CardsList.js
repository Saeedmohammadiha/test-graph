import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import styles from "./cardslist.module.scss";
import { instanceAxios } from "../utils/instanceAxios";
import { useNavigate } from "react-router-dom";
export default function CardsList() {
  const [list, setList] = useState([]);
  const [totalCards, setTotalCards] = useState();
  const [username, setUsername] = useState();
  const [pageTracker, setPageTracker] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    instanceAxios
      .get(`/username`)
      .then((res) => {
        setUsername(res.data.username);
      })
      .catch((err) => {
        console.log(err);
      });
    if (list.length === 0) {
      get3Card();
      // ;
      setPageTracker(pageTracker + 1);
    }
  }, []);

  function get3Card() {
    instanceAxios
      .get(`/list?size=3&page=${pageTracker}`)
      .then((res) => {
        setPageTracker(pageTracker + 1);

        setList((prevList) => [...prevList, ...res.data.result]);
        setTotalCards(res.data.total);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function logOutHandler() {
    instanceAxios
      .post(`/logout`)
      .then((res) => {
        window.localStorage.clear();
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className={styles["container"]}>
      <div className={styles["header"]}>
        <div className={styles["popover"]}>
          <button className={styles["popover-button"]}>Admin</button>
          <div
            onClick={() => {
              logOutHandler();
            }}
            className={styles["popover-content"]}
          >
            <span>Logout</span>

            <div className={`${styles['popover-arrow']} ${styles['bottom']}`}></div>
          </div>
        </div>
        <div className={styles["details"]}>
          <span>Viewed: {list?.length}</span>
          <span>Total: {totalCards}</span>
        </div>
      </div>
      <div className={styles["main"]}>
        <div className={styles["list"]}>
          {list?.map((card, index) => {
            return (
              <div key={index} className={styles["item"]}>
                <Card id={index} data={card} />
              </div>
            );
          })}
        </div>
        {totalCards === list.length ? null : (
          <button
            onClick={() => {
              get3Card();
            }}
            className={styles["load-more"]}
          >
            Load more
          </button>
        )}
      </div>
    </div>
  );
}
