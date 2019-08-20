import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function WeatherCard({ weather }) {
  useEffect(() => {}, [weather]);
  return (
    <div id="weatherCardWrap">
      <p>현재 날씨</p>
      <div id="weatherCardMain">
        <div className="weatherCard" style={{ marginTop: '0' }}>
          <p className="title">기온</p>
          <p className="details">
            {weather &&
              `${
                weather.item.filter(item => item.category === 'T1H')[0]
                  .obsrValue
              } ℃`}
          </p>
        </div>
        <div className="weatherCard" style={{ marginTop: '0' }}>
          <p className="title">비오나?눈오나?</p>
          <p className="details">
            {weather &&
              weather.item.filter(item => item.category === 'PTY')[0]
                .obsrValue === 0 &&
              '에잇! 안오네...'}
            {weather &&
              weather.item.filter(item => item.category === 'PTY')[0]
                .obsrValue === 1 &&
              '나이스! 비온다!'}
            {weather &&
              weather.item.filter(item => item.category === 'PTY')[0]
                .obsrValue === 2 &&
              '우와~ 비랑 눈 둘다!'}
            {weather &&
              weather.item.filter(item => item.category === 'PTY')[0]
                .obsrValue === 3 &&
              '나이스! 눈온다!'}
            {weather &&
              weather.item.filter(item => item.category === 'PTY')[0]
                .obsrValue === 4 &&
              '오! 소나기다!'}
          </p>
        </div>
        <div className="weatherCard" style={{ marginTop: '0' }}>
          <p className="title">습도</p>
          <p className="details">
            {weather &&
              `${
                weather.item.filter(item => item.category === 'REH')[0]
                  .obsrValue
              } %`}
          </p>
        </div>
        <div className="weatherCard">
          <p className="title">풍속</p>
          <p className="details">
            {weather &&
              `${
                weather.item.filter(item => item.category === 'WSD')[0]
                  .obsrValue
              } m/s`}
          </p>
        </div>
        <div className="weatherCard">
          <p className="title">지역기준</p>
          <p className="details">{weather && weather.dong}</p>
        </div>
        <div className="weatherCard">
          <p className="title">날짜기준</p>
          <p className="details">
            {weather && `${`${weather.item[0].baseTime}`.substring(0, 2)} 시`}
            {weather && <span className="small">{weather.date}</span>}
          </p>
        </div>
      </div>
    </div>
  );
}

WeatherCard.propTypes = {
  weather: PropTypes.object,
};
