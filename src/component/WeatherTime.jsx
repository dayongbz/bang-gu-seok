import React, { useEffect, useRef } from 'react';

export default function WeatherTime({ time }) {
  const minuteRef = useRef();
  const secondsRef = useRef();
  const hoursRef = useRef();
  useEffect(() => {
    if (minuteRef && time) {
      minuteRef.current.style.transform = `rotate(${-90 +
        6 * +time.minute}deg)`;
    }
    if (secondsRef && time) {
      secondsRef.current.style.transform = `rotate(${-90 +
        6 * +time.seconds}deg)`;
    }
    if (hoursRef && time) {
      hoursRef.current.style.transform = `rotate(${-90 + 30 * +time.hour}deg)`;
    }
  }, [time]);
  return (
    <div className="weatherCardWrap">
      <p>현재 시간</p>
      <div className="weatherCardMain">
        <div id="clockWrap">
          <div id="hours" ref={hoursRef} />
          <div id="minute" ref={minuteRef} />
          <div id="seconds" ref={secondsRef} />
        </div>
      </div>
    </div>
  );
}
