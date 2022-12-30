import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/auth.context";
import "./Home.css";

function Home() {
  const [showSidePanel, setShowSidePanel] = useState(false);

  const { logOut } = useContext(AuthContext);

  const userLogout = () => {
    logOut();
  };

  const togglePanel = () => {
    setShowSidePanel((prev) => !prev);
  };

  return (
    <div className="body w-full h-[100vh]">
      {/*sidebar*/}

      <div
        id="mySidenav"
        className={showSidePanel ? "sidenav SIDENAV" : "sidenav SIDENAV_alt"}
      >
        {showSidePanel ? (
          <p className="logo">todos</p>
        ) : (
          <a className="icon-a">
            <i className="bx bxl-tailwind-css text-slate-300"></i>
          </a>
        )}

        <a className="icon-a">
          <i className="bx bx-bulb pr-4"></i>{" "}
          {showSidePanel && (
            <span className="duration-300 ease-linear">All Task</span>
          )}
        </a>
        <a className="icon-a">
          <i className="bx bxs-bullseye pr-4"></i>
          {showSidePanel && (
            <span className="duration-300 ease-linear">My Task</span>
          )}
        </a>
        <a className="icon-a">
          <i className="fa fa-list icons pr-4"></i>

          {showSidePanel && (
            <span className="duration-300 ease-linear">Completed Task</span>
          )}
        </a>
        <a className="icon-a" onClick={userLogout}>
          <i class="bx bx-log-out-circle  pr-4"></i>
          {showSidePanel && (
            <span className="duration-300 ease-linear">Logout</span>
          )}
        </a>
      </div>

      {/* main */}
      <div id="main" className={showSidePanel ? "main" : "mainAlt"}>
        {/* head */}
        <div className="head">
          <div className="col-div-6">
            <span className="nav text-[30px] pointer  text-slate-300 mt-2"></span>
            <span className="nav text-[30px] pointer  text-slate-300 cursor-pointer">
              <i className="bx bx-menu" onClick={togglePanel}></i>
            </span>
          </div>

          <div className="col-div-6">
            <div className="profile">
              <img src="images/user.png" className="pro-img" />
              <p>
                abc adms <span>abc@gmail.com</span>
              </p>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
        {/***************/}

        <div className="clearfix"></div>
        <br />
        {/***************/}
        <Outlet />

        {/***************/}

        {/***************/}

        {/* *********** */}

        {/***************/}

        {/***************/}
      </div>
    </div>
  );
}

export default Home;
