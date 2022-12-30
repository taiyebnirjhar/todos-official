import React from "react";

import "../Pages/Home/Home.css";
function Head() {
  return (
    <>
      <div className="head">
        <div className="col-div-6">
          <span
            // style="font-size:30px;cursor:pointer; color: white;"
            className="nav text-[30px] pointer text-slate-300"
          >
            <i className="bx bx-menu"></i>
          </span>
          <span
            // style="font-size:30px;cursor:pointer; color: white;"
            className="nav text-[30px] pointer text-slate-300"
          >
            {" "}
            Dashboard
          </span>
        </div>

        <div className="col-div-6">
          <div className="profile">
            <img src="images/user.png" className="pro-img" />
            <p>
              Manoj Adhikari <span>UI / UX DESIGNER</span>
            </p>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default Head;
