import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import "./cardslist.scss";
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
    <div className="container">
      <div className="header">
        <div className="popover">
          <button className="popover-button">Admin</button>
          <div
            onClick={() => {
              logOutHandler();
            }}
            className="popover-content"
          >
            <span>Logout</span>

            <div className="popover-arrow bottom"></div>
          </div>
        </div>
        <div className="details">
          <span>Viewed: {list?.length}</span>
          <span>Total: {totalCards}</span>
        </div>
      </div>
      <div className="main">
        <div className="list">
          {list?.map((card, index) => {
            return (
              <div key={index} className="item">
                <Card id={index} />
              </div>
            );
          })}
        </div>
        {totalCards === list.length ? null : (
          <button
            onClick={() => {
              get3Card();
            }}
            className="load-more"
          >
            Load more
          </button>
        )}
      </div>
    </div>
  );
}
