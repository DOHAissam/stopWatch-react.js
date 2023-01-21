import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'

export default function StopWatch() {


  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false)

  useEffect(() => {

    let interval;

    if (running) {

      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);

      }, 10);


    } else if (!running) {
      clearInterval(interval);

    }
    return () => clearInterval(interval);


  }, [running])

  return (
    <div>
      <div className='stopWatch'>
        <div className='headers'>
          <h1> stop Watch  </h1>
          <div className='thetiem'>
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + ((time / 10))).slice(-2)}:</span>

          </div>

          <div className='stop-start'>
            <button onClick={() => setRunning(true)}>start</button>
            <button onClick={() => setRunning(false)}>stop</button>
            <button onClick={() => setTime(0)}>Reset</button>

          </div>
        </div>
      </div>

    </div>
  )
}

