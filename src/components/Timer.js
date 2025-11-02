import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(() => {
    const id = setInterval(function () {
      dispatch({ type: "tik" });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);
  return (
    <p className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </p>
  );
}

export default Timer;
