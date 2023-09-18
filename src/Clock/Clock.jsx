import React, { useEffect, useState } from 'react'
import './Clock.css'
function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getDegree = (unit, max) => {
    return (unit / max) * 360;
  };

  const secondHandStyle = {
    transform: `rotate(${getDegree(time.getSeconds(), 60)}deg)`,
  };

  const minuteHandStyle = {
    transform: `rotate(${getDegree(time.getMinutes(), 60)}deg)`,
  };

  const hourHandStyle = {
    transform: `rotate(${getDegree(
      (time.getHours() % 12) + time.getMinutes() / 60,
      12
    )}deg)`,
  };
  return (
    <div className="analog-clock-container">
      <div className="analog-clock">
        <div className="hour-hand" style={hourHandStyle}></div>
        <div className="minute-hand" style={minuteHandStyle}></div>
        <div className="second-hand" style={secondHandStyle}></div>
        <div className="center-circle"></div>
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className={`hour-mark mark-${index + 1}`}
          ></div>
        ))}
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className={`digit digit-${index + 1}`}
          >
          
          </div>
        ))}
      </div>
      <div className="time-label">
        {time.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })}
      </div>
    </div>
  )
}

export default Clock