import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import "./cardslist.scss";
import { instanceAxios } from "../utils/instanceAxios";
export default function CardsList() {
  const [list, setList] = useState([]);
  const [totalCards, setTotalCards] = useState();
  const [username, setUsername] = useState();
  let pageTracker = 1;
  // totalCards/3 === pageTracker

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
      pageTracker++;
    }
  }, []);

  function get3Card() {
    instanceAxios
      .get(`/list?size=3&page=${pageTracker}`)
      .then((res) => {
        pageTracker++;
        setList(res.data.result);
        setTotalCards(res.data.total);
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
          <div className="popover-content">
            <span>Logout</span>

            <div className="popover-arrow bottom"></div>
          </div>
        </div>
        <div className="details">
          <span>Viewed: {list?.length }</span>
          <span>Total: {totalCards}</span>
        </div>
      </div>
      <div className="main">
        {list?.map((card,index)=>{
          return (
            <div key={index} className="item">
              <Card id={index}/>
            </div>
          )
        })}
      </div>
    </div>
  );
}
