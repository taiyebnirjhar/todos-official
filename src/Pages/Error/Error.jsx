import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router-dom";
import errorImage from "../../assets/images/Error.json";
import "./Error.css";

function Error() {
  return (
    <div className="w-[100%] h-[100vh] flex  justify-center items-center overflow-hidden bg-slate-800">
      <div className="sm:w-[110%] md:w-[100%] lg:w-[80%] xl:w-[60%] h-[90%] flex flex-col self-center justify-center">
        <Lottie loop={false} animationData={errorImage} />{" "}
        <div className="flex justify-center ml-8 sm:ml-12 cursor-pointer my-4">
          <Link to={"/"}>
            <button
              type="button"
              className="text-stone-100 opacity-30 border-2 sm:border-4 sm:w-28 md:w-32 lg:w-36  border-stone-400 font-medium rounded-full text-[0.5rem] md:text-sm px-4 py-1.5 sm:px-4 sm:py-2 xl:px-5 xl:py-2.5 text-center mr-2 mb-2 "
            >
              Default
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
