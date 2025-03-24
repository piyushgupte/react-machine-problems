import { useEffect, useState } from "react";

export const ProgressBar = ({ progress }) => {
  const[animatedProgress, setAnimatedProgress] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setAnimatedProgress(progress);
    }, 1000);
  }, [progress]);
  return (
    <>
      <div className="outer">
        <div
          className="inner"
          style={{
            // width:`${progress}%`
            transform: `translateX(${animatedProgress - 100}%)`,
          }}
        >
          {progress}%
        </div>
      </div>
    </>
  );
};
