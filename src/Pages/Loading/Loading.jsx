import Lottie from "lottie-react";
import React from "react";

import loader from "../../assets/images/loading.json";

function Loading() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center overflow-hidden bg-slate-800">
      <Lottie loop={true} animationData={loader} />
    </div>
  );
}

export default Loading;
