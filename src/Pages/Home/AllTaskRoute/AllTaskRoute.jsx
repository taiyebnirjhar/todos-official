import React from "react";
import AddTask from "../AddTask";

function AllTaskRoute() {
  return (
    <>
      <div className="flex justify-center items-center mb-12">
        <AddTask />
      </div>
      {/***************/}

      <div className="col-div-3">
        <div className="box">
          <p>
            0
            <br />
            <span>Total Task</span>
          </p>
        </div>
      </div>
      <div className="col-div-3">
        <div className="box">
          <p>
            0
            <br />
            <span>Completed Task</span>
          </p>
        </div>
      </div>
      <div className="col-div-3">
        <div className="box">
          <p>
            0
            <br />
            <span>Pending Task</span>
          </p>
        </div>
      </div>

      {/***************/}

      <div className="clearfix"></div>
      <br />
      <br />

      {/***************/}

      <div className="col-div-8">
        <div className="box-8">
          <div className="content-box">
            <p className="text-slate-300"> All Tasks</p>
            <br />
          </div>
        </div>
      </div>

      {/***************/}
      <div className="col-div-4">
        <div className="box-4">
          <div className="content-box">
            <p className="text-slate-300">Completed Task Ratio</p>

            <div className="circle-wrap">
              <div className="circle">
                <div className="mask full">
                  <div className="fill"></div>
                </div>
                <div className="mask half">
                  <div className="fill"></div>
                </div>
                <div className="inside-circle"> 0% </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/***************/}

      <div className="clearfix"></div>
      {/***************/}
    </>
  );
}

export default AllTaskRoute;
