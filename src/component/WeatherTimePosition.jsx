import React from 'react';
import PropTypes from 'prop-types';

export default function WeatherTimePosition({ position, time }) {
  return (
    <div id="weatherTimePositionWrapper">
      <div id="weatherTime">
        <p id="weatherDate">{time.date}</p>
        <p>
          {time.hour}
          <span className="small">:</span>
          {time.minute}
          <span className="small">:</span>
          {time.seconds}
          <span className="small">{time.ampm}</span>
        </p>
      </div>
    </div>
  );
}

WeatherTimePosition.propTypes = {
  position: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    dong: PropTypes.string,
  }),
  time: PropTypes.shape({
    date: PropTypes.string,
    hour: PropTypes.string,
    minute: PropTypes.string,
    seconds: PropTypes.string,
    ampm: PropTypes.string,
  }),
};

WeatherTimePosition.defaultProps = {
  position: { latitude: 37.6314, longitude: 126.8345, dong: '화정2동' },
  time: {
    date: '2019.01.01',
    hour: '00',
    minute: '00',
    seconds: '00',
    ampm: 'AM',
  },
};
