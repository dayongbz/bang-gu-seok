/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

export default function WeatherMain({ weather, score }) {
  return (
    <div id="weatherMain">
      <p>
        오늘의 날씨의 점수는
        {score &&
          score.length !== 0 &&
          (+(score.reduce((a, b) => a + b) / 3).toFixed(2) >= 50 ? (
            <span className="bold" style={{ color: 'rgba(22, 160, 133, 1)' }}>
              {` ${(score.reduce((a, b) => a + b) / 3).toFixed(2)} `}
            </span>
          ) : (
            <span className="bold" style={{ color: 'rgba(231, 76, 60, 1)' }}>
              {` ${(score.reduce((a, b) => a + b) / 3).toFixed(2)} `}
            </span>
          ))}
        {score ? ' 점 입니다!' : ' 0 점 입니다!'}
      </p>
    </div>
  );
}

WeatherMain.propTypes = {
  weather: PropTypes.object,
  score: PropTypes.array,
};
