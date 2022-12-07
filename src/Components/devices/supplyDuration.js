import React, { useState, useRef } from 'react';

function Duration(){
  const [timer, setTimer] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const increment = useRef(null)


  function handleStart() {
  setIsActive(true);
  setIsPaused(true);
  increment.current = setInterval(() => {
    setTimer((timer) => timer + 1);
  }, 1000);
  formatTime();
  }
  // const handleStart = () => {
  //   setIsActive(true)
  //   setIsPaused(true)
  //   increment.current = setInterval(() => {
  //     setTimer((timer) => timer + 1)
  //   }, 1000)
  //   formatTime();
  // }
  const handlePause = () => {
    clearInterval(increment.current)
    setIsPaused(false)
  }

  const handleResume = () => {
    setIsPaused(true)
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const handleReset = () => {
    clearInterval(increment.current)
    setIsActive(false)
    setIsPaused(false)
    setTimer(0)
  }

  const formatTime = () => {
    const getSeconds = ` 0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = ` 0${minutes % 60}`.slice(-2)
    const getHours = ` 0${Math.floor(timer / 3600)}`.slice(-2)

    return `${getHours} : ${getMinutes} : ${getSeconds} `
  }

  // return (
  //   <p>{formatTime()}</p>
  // //   // <div className="app">
  // //   //   <div>
  // //   //     <p>{formatTime()}</p>
  // //   //     <div>
  // //   //       {
  // //   //         !isActive && !isPaused ?
  // //   //           <button onClick={handleStart}>Start</button>
  // //   //           : (
  // //   //             isPaused ? <button onClick={handlePause}>Pause</button> :
  // //   //               <button onClick={handleResume}>Resume</button>
  // //   //           )
  // //   //       }
  // //   //       <button onClick={handleReset} disabled={!isActive}>Reset</button>
  // //   //     </div>
  // //   //   </div>
  // //   // </div>
  // );
}
export default Duration;


