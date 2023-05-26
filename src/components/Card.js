// import React from "react";
// import  './card.scss'
// export default function Card(props) {
//   return (
//     // <div className={styles['card-container']}>
//     //   <div className={styles["static-card"]}>static</div>
//     //   <div class={styles["flip-card"]}>
//     //     <div class={styles["flip-card-inner"]}>
//     //       <div class={styles["flip-card-front"]}>front</div>
//     //       <div class={styles["flip-card-back"]}>back</div>
//     //     </div>
//     //   </div>
//     // </div>
//     <div className="postal-card">
//     <div className="cover">
//        Content for the cover
//       <div className="content">
//         <h2>Cover</h2>
//         <p>This is the content for the cover of the postal card.</p>
//       </div>
//     </div>
//     <div className="inner-content">
//       <div className="page top-page">
//          Content for the top page
//         <h2>Top Page</h2>
//         <p>This is the content for the top page of the postal card.</p>
//       </div>
//       <div className="page bottom-page">
//          Content for the bottom page
//         <h2>Bottom Page</h2>
//         <p>This is the content for the bottom page of the postal card.</p>
//       </div>
//     </div>
//   </div>

//   );
// }

import React, { useState } from "react";
import "./card.scss"; // Create a CSS file to style the components

const Card = () => {



  return (
    <div className="card-container">
        <div className="ribbon" >ECONOMY</div>
      <input
        type="checkbox"
        id="card-toggle"
        className="card-toggle"
        value="selected"
      />
      <label className="card" for="card-toggle">
        <div className="front face">test1</div>
        <div className="inner-bottom face">test left</div>
        <div className="inner-top face">test right</div>
      </label>
    </div>
  );
};

export default Card;
