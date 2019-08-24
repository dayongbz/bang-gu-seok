/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function WeatherCard({ weather, score, position }) {
  useEffect(() => {}, [weather]);
  return (
    <div className="weatherCardWrap">
      <p>현재 날씨</p>
      <div className="weatherCardMain">
        <div className="weatherCard">
          <p className="title">기온</p>
          {weather &&
            weather.item.filter(item => item.category === 'T1H')[0].obsrValue <
              900 &&
            weather.item.filter(item => item.category === 'T1H')[0].obsrValue >
              -900 &&
            (score[0] >= 50 ? (
              <>
                <p
                  className="details"
                  style={{ color: 'rgba(22, 160, 133, 1)' }}
                >
                  {
                    weather.item.filter(item => item.category === 'T1H')[0]
                      .obsrValue
                  }
                  {' ℃'}
                </p>
                <div className="greenLight" />
              </>
            ) : (
              <>
                <p
                  className="details"
                  style={{ color: 'rgba(231, 76, 60, 1)' }}
                >
                  {
                    weather.item.filter(item => item.category === 'T1H')[0]
                      .obsrValue
                  }
                  {' ℃'}
                </p>
                <div className="redLight" />
              </>
            ))}
          {weather ? '' : <span className="loading">로딩중</span>}
          {weather &&
            (weather.item.filter(item => item.category === 'T1H')[0]
              .obsrValue >= 900 ||
              weather.item.filter(item => item.category === 'T1H')[0]
                .obsrValue <= -900) && <p className="details">관측실패</p>}
        </div>
        <div className="weatherCard">
          <p className="title">비오나?눈오나?</p>
          {weather &&
            (weather.item.filter(item => item.category === 'PTY')[0]
              .obsrValue >= 900 ||
              weather.item.filter(item => item.category === 'PTY')[0]
                .obsrValue <= -900) && <p className="details">관측실패</p>}
          {weather ? '' : <span className="loading">로딩중</span>}
          {weather &&
            weather.item.filter(item => item.category === 'PTY')[0]
              .obsrValue === 0 && (
              <>
                <p
                  className="details"
                  style={{ color: 'rgba(22, 160, 133, 1)' }}
                >
                  둘다 안옴!
                </p>
                <div className="greenLight" />
              </>
            )}
          {weather &&
            weather.item.filter(item => item.category === 'PTY')[0]
              .obsrValue === 1 && (
              <>
                <p
                  className="details"
                  style={{ color: 'rgba(231, 76, 60, 1)' }}
                >
                  나이스! 비온다!
                </p>
                <div className="redLight" />
              </>
            )}
          {weather &&
            weather.item.filter(item => item.category === 'PTY')[0]
              .obsrValue === 2 && (
              <>
                <p
                  className="details"
                  style={{ color: 'rgba(231, 76, 60, 1)' }}
                >
                  우와~ 비랑 눈 둘다!
                </p>
                <div className="redLight" />
              </>
            )}
          {weather &&
            weather.item.filter(item => item.category === 'PTY')[0]
              .obsrValue === 3 && (
              <>
                <p
                  className="details"
                  style={{ color: 'rgba(241, 196, 15, 1)' }}
                >
                  나이스! 눈온다!
                </p>
                <div className="yellowLight" />
              </>
            )}
          {weather &&
            weather.item.filter(item => item.category === 'PTY')[0]
              .obsrValue === 4 && (
              <>
                <p
                  className="details"
                  style={{ color: 'rgba(231, 76, 60, 1)' }}
                >
                  오! 소나기다!
                </p>
                <div className="redLight" />
              </>
            )}
        </div>
        <div className="weatherCard">
          <p className="title">습도</p>
          {weather &&
            weather.item.filter(item => item.category === 'REH')[0].obsrValue <
              900 &&
            weather.item.filter(item => item.category === 'REH')[0].obsrValue >
              -900 &&
            (score[2] >= 50 ? (
              <>
                <p
                  className="details"
                  style={{ color: 'rgba(22, 160, 133, 1)' }}
                >
                  {
                    weather.item.filter(item => item.category === 'REH')[0]
                      .obsrValue
                  }
                  {' %'}
                </p>
                <div className="greenLight" />
              </>
            ) : (
              <>
                <p
                  className="details"
                  style={{ color: 'rgba(231, 76, 60, 1)' }}
                >
                  {
                    weather.item.filter(item => item.category === 'REH')[0]
                      .obsrValue
                  }
                  {' %'}
                </p>
                <div className="redLight" />
              </>
            ))}

          {weather ? '' : <span className="loading">로딩중</span>}
          {weather &&
            (weather.item.filter(item => item.category === 'REH')[0]
              .obsrValue >= 900 ||
              weather.item.filter(item => item.category === 'REH')[0]
                .obsrValue <= -900) && <p className="details">관측실패</p>}
        </div>
        <div className="weatherCard">
          <p className="title">풍속</p>
          {weather &&
            weather.item.filter(item => item.category === 'WSD')[0].obsrValue <
              900 &&
            weather.item.filter(item => item.category === 'WSD')[0].obsrValue >
              -900 && (
              <>
                <p
                  className="details"
                  style={{ color: 'rgba(241, 196, 15, 1)' }}
                >
                  {
                    weather.item.filter(item => item.category === 'WSD')[0]
                      .obsrValue
                  }
                  {' m/s'}
                </p>
                <div className="yellowLight" />
              </>
            )}

          {weather ? '' : <span className="loading">로딩중</span>}
          {weather &&
            (weather.item.filter(item => item.category === 'WSD')[0]
              .obsrValue >= 900 ||
              weather.item.filter(item => item.category === 'WSD')[0]
                .obsrValue <= -900) && <p className="details">관측실패</p>}
        </div>
        <div className="weatherCard">
          <p className="title">지역기준</p>
          <p className="details">
            {weather ? '' : <span className="loading">로딩중</span>}
            {weather && weather.dong}
            {position && position.ip === true && (
              <>
                <span className="small" style={{ color: '#c3c3d3' }}>
                  예상위치 입니다
                </span>
              </>
            )}
          </p>
        </div>
        <div className="weatherCard">
          <p className="title">날짜기준</p>
          <p className="details">
            {weather ? '' : <span className="loading">로딩중</span>}
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
  score: PropTypes.array,
  position: PropTypes.object,
};
