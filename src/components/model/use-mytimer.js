
import { useEffect, useState } from "react";

export function useMyTimer(endDate){
  const [duration, setDuration] = useState(() => endDate ? endDate - Date.now() : 0)

  useEffect(()=>{
    if(endDate === undefined){
      return
    }
    const interval = setInterval(()=>{
      setDuration(endDate - Date.now())
    },1000)

    return () => clearInterval(interval)
  },[endDate])

  function toNormalDate(duration){
    if(duration <= 0){
      return {
        Days: 0,
        Hours: 0,
        Minutes: 0,
        Seconds: 0,
      }
    }
    const totalSeconds = Math.floor(duration / 1000);

    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;
  
    return {
      Days: days,
      Hours: hours,
      Minutes: minutes,
      Seconds: seconds,
    };
  }
  const timeData = toNormalDate(duration);


  return {duration, timeData}

}