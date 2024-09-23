import { useEffect } from "react";

export const ProgressBar = ({ play, setProgressCompleted }) => {
  useEffect(() => {
    let timer;
    if (play) {
      // this condition to check play is true is important
      timer = setTimeout(() => {
        setProgressCompleted();
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [play]);
  return (
    <div className="progress-bar">
      <div className={`progress-status ${play ? "play" : ""}`}></div>
    </div>
  );
};
