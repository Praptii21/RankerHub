import React from "react";
import { useLottie } from "lottie-react";

export const LottiePlayer = ({ animationData, loop = true, autoplay = true, className = "" }) => {
  const options = {
    animationData,
    loop,
    autoplay,
  };

  const { View } = useLottie(options);

  return <div className={className}>{View}</div>;
};

export default LottiePlayer;
