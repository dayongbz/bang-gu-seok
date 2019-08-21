import React from 'react';
import PropTypes from 'prop-types';

export default function WeatherMain({ weather, score }) {
  return (
    <div id="weatherMain">
      <h1>
        오늘의 날씨의 점수는
        <span className="bold">
          {score && score.length !== 0
            ? (score.reduce((a, b) => a + b) / 3).toFixed(2)
            : '00.00'}
        </span>
        점 입니다!
      </h1>
    </div>
  );
}

WeatherMain.propTypes = {
  weather: PropTypes.object,
  score: PropTypes.array,
};
