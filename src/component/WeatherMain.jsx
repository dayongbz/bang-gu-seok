/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

export default function WeatherMain({ weather, score }) {
  return (
    <div id="weatherMain">
      {score &&
        score.length !== 0 &&
        (+(score.reduce((a, b) => a + b) / 3).toFixed(2) >= 50 ? (
          <>
            <div
              className="scoreWrapper"
              style={{ color: 'rgba(22, 160, 133, 1)' }}
            >
              <span className="score">
                {` ${(score.reduce((a, b) => a + b) / 3).toFixed(2)} `}
              </span>
              <span className="scoreSub">/100</span>
              <div className="details">
                <p style={{ color: 'rgba(22, 160, 133, 1)' }}>
                  {'"나가기 좋은 날입니다!"'}
                </p>
                <div
                  className="bar"
                  style={{ backgroundImage: `url("images/bar.png")` }}
                />
              </div>
            </div>
          </>
        ) : (
          <div
            className="scoreWrapper"
            style={{ color: 'rgba(231, 76, 60, 1)' }}
          >
            <span className="score">
              {` ${(score.reduce((a, b) => a + b) / 3).toFixed(2)} `}
            </span>
            <span className="scoreSub">/100</span>
            <div className="details">
              <p style={{ color: 'rgba(231, 76, 60, 1)' }}>
                {'나가면 죽기 좋은 날입니다!'}
              </p>
              <div
                className="bar"
                style={{ backgroundImage: `url("images/bar.png")` }}
              />
            </div>
          </div>
        ))}
      <div className="help">?</div>
      <div className="helpDetails">
        <p>점수는 기온, 비, 눈 여부, 습도에 따라 정해집니다.</p>
        <div
          className="bar"
          style={{ backgroundImage: `url("images/bar.png")` }}
        />
      </div>
    </div>
  );
}

WeatherMain.propTypes = {
  weather: PropTypes.object,
  score: PropTypes.array,
};
