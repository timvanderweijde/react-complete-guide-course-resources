import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log('SET TIMEOUT');
    const timeoutID = setTimeout(onTimeOut, timeout);

    return () => {
      clearTimeout(timeoutID); // Clear the interval to avoid memory leaks
    };

  }, [timeout, onTimeOut]);



  useEffect(() => {
    console.log('SET INTERVAL');
    const intervalID = setInterval(() => {
      setRemainingTime((prev) => prev - 10);
    }, 10);

    return () => {
      clearInterval(intervalID); // Clear the interval to avoid memory leaks
    };

  }, []);

  return <progress id="question-time" value={remainingTime} max={timeout} />;
}
