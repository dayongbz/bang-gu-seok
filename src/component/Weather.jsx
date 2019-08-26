import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment-timezone';
import WeatherCard from './WeatherCard';
import WeatherMain from './WeatherMain';
import WeatherTime from './WeatherTime';
import xyConv from './xyConv';

export default function Weather() {
  const [position, setPosition] = useState();
  const [time, setTime] = useState();
  const [weather, setWeather] = useState();
  const [weatherAxios, setWeatherAxios] = useState(true);
  const [score, setScore] = useState([]);

  // 위치 가져오기
  useEffect(() => {
    function getPostion(lat, long, ip) {
      const API_KEY = '';
      const API_ID = '';
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?request=coordsToaddr&coords=${long.toFixed(
            4,
          )},${+lat.toFixed(4)}&orders=admcode&output=json`,
          {
            headers: {
              'X-NCP-APIGW-API-KEY-ID': API_ID,
              'X-NCP-APIGW-API-KEY': API_KEY,
            },
          },
        )
        .then(data => {
          setPosition({
            latitude: +lat.toFixed(4),
            longitude: +long.toFixed(4),
            dong: data.data.results[0].region.area3.name,
            ip,
          });
          window.localStorage.setItem(
            'position',
            JSON.stringify({
              latitude: +lat.toFixed(4),
              longitude: +long.toFixed(4),
              dong: data.data.results[0].region.area3.name,
              ip,
            }),
          );
        });
    }

    navigator.geolocation.getCurrentPosition(
      p => {
        if (!window.localStorage.getItem('position')) {
          getPostion(p.coords.latitude, p.coords.longitude);
        } else if (
          !!JSON.parse(window.localStorage.getItem('position')).latitude &&
          !!JSON.parse(window.localStorage.getItem('position')).longitude
        ) {
          if (
            JSON.parse(window.localStorage.getItem('position')).latitude !==
              +p.coords.latitude.toFixed(4) ||
            JSON.parse(window.localStorage.getItem('position')).longitude !==
              +p.coords.longitude.toFixed(4)
          ) {
            getPostion(p.coords.latitude, p.coords.longitude);
          } else {
            setPosition(JSON.parse(window.localStorage.getItem('position')));
          }
        }
      },
      error => {
        const API_KEY = '';
        axios
          .get(`https://geo.ipify.org/api/v1?apiKey=${API_KEY}`)
          .then(data => {
            if (!window.localStorage.getItem('position')) {
              getPostion(data.data.location.lat, data.data.location.lng, true);
            } else if (
              !!JSON.parse(window.localStorage.getItem('position')).latitude &&
              !!JSON.parse(window.localStorage.getItem('position')).longitude
            ) {
              if (
                JSON.parse(window.localStorage.getItem('position')).latitude !==
                  +data.data.location.lat ||
                JSON.parse(window.localStorage.getItem('position'))
                  .longitude !== +data.data.location.lng
              ) {
                getPostion(
                  data.data.location.lat,
                  data.data.location.lng,
                  true,
                );
              } else {
                setPosition(
                  JSON.parse(window.localStorage.getItem('position')),
                );
              }
            }
          });
      },
    );
    setInterval(() => {
      setTime({
        date: moment.tz('Asia/Seoul').format('YYYY.MM.DD'),
        hour: moment.tz('Asia/Seoul').format('hh'),
        minute: moment.tz('Asia/Seoul').format('mm'),
        seconds: moment.tz('Asia/Seoul').format('ss'),
        ampm: moment.tz('Asia/Seoul').format('A'),
      });
    }, 300);
  }, []);

  // 날씨 가져오기

  useEffect(() => {
    function getWeather() {
      const API_KEY = '';
      const { x, y } = xyConv(position.latitude, position.longitude);
      let timeBase;

      setWeatherAxios(false);

      if (
        moment.tz('Asia/Seoul').format('HH') === '00' &&
        +moment.tz('Asia/Seoul').format('mm') < 40
      ) {
        setWeatherAxios(true);
        return;
      }

      if (+moment.tz('Asia/Seoul').format('mm') >= 40) {
        timeBase = moment.tz('Asia/Seoul').format('HH00');
      } else if (+moment.tz('Asia/Seoul').format('HH') < 11) {
        timeBase = `0${+moment.tz('Asia/Seoul').format('HH00') - 100}`;
      } else {
        timeBase = `${+moment.tz('Asia/Seoul').format('HH00') - 100}`;
      }

      axios
        .get(
          `https://cors-anywhere.herokuapp.com/http://newsky2.kma.go.kr/service/SecndSrtpdFrcstInfoService2/ForecastGrib?ServiceKey=${API_KEY}&base_date=${moment
            .tz('Asia/Seoul')
            .format(
              'YYYYMMDD',
            )}&base_time=${timeBase}&nx=${x}&ny=${y}&_type=json`,
        )
        .then(data => {
          setWeather({
            time: moment.tz('Asia/Seoul').format('HHmm'),
            date: moment.tz('Asia/Seoul').format('YYYYMMDD'),
            item: data.data.response.body.items.item,
            dong: position.dong,
          });
          window.localStorage.setItem(
            'weather',
            JSON.stringify({
              time: moment.tz('Asia/Seoul').format('HHmm'),
              date: moment.tz('Asia/Seoul').format('YYYYMMDD'),
              item: data.data.response.body.items.item,
              dong: position.dong,
            }),
          );
          setWeatherAxios(true);
        })
        .catch(error => {
          setWeatherAxios(true);
        });
    }
    if (position && weatherAxios) {
      if (!window.localStorage.getItem('weather')) {
        getWeather();
      } else if (!weather) {
        if (
          position.dong !==
          JSON.parse(window.localStorage.getItem('weather')).dong
        ) {
          getWeather();
        } else {
          setWeather(JSON.parse(window.localStorage.getItem('weather')));
        }
      }
      if (weather) {
        if (
          Math.abs(
            +moment.tz('Asia/Seoul').format('YYYYMMDDHHmm') -
              +`${weather.item[0].baseDate}${weather.item[0].baseTime}`,
          ) >= 140
        ) {
          getWeather();
        }
      }
    }
  }, [position, weather, time, weatherAxios]);

  // 점수

  useEffect(() => {
    const scoreAll = [];
    if (weather) {
      if (
        weather.item.filter(item => item.category === 'T1H')[0].obsrValue <=
          900 &&
        weather.item.filter(item => item.category === 'T1H')[0].obsrValue >=
          -900
      ) {
        if (
          weather.item.filter(item => item.category === 'T1H')[0].obsrValue >=
            16 &&
          weather.item.filter(item => item.category === 'T1H')[0].obsrValue <=
            20
        ) {
          scoreAll[0] = 100;
        } else if (
          weather.item.filter(item => item.category === 'T1H')[0].obsrValue <=
            40 &&
          weather.item.filter(item => item.category === 'T1H')[0].obsrValue > 20
        ) {
          scoreAll[0] =
            ((100 -
              Math.abs(
                weather.item.filter(item => item.category === 'T1H')[0]
                  .obsrValue - 20,
              ) *
                5) /
              10) *
            9;
          // 최고온도 40도 기준
        } else if (
          weather.item.filter(item => item.category === 'T1H')[0].obsrValue <
            16 &&
          weather.item.filter(item => item.category === 'T1H')[0].obsrValue >=
            -34
        ) {
          scoreAll[0] =
            100 -
            (16 -
              weather.item.filter(item => item.category === 'T1H')[0]
                .obsrValue) *
              2;

          // 최저온도 -34도 기준
        } else {
          scoreAll[0] = 0;
        }
      } else {
        scoreAll[0] = 50;
      }
      switch (
        weather.item.filter(item => item.category === 'PTY')[0].obsrValue
      ) {
        case 0:
          scoreAll[1] = 100;
          break;
        case 1:
          scoreAll[1] = 30;
          break;
        case 2:
          scoreAll[1] = 50;
          break;
        case 3:
          scoreAll[1] = 70;
          break;
        case 4:
          scoreAll[1] = 0;
          break;
        default:
          scoreAll[1] = 50;
          break;
      }
      if (
        weather.item.filter(item => item.category === 'REH')[0].obsrValue >=
          40 &&
        weather.item.filter(item => item.category === 'REH')[0].obsrValue <= 70
      ) {
        scoreAll[2] = 100;
      } else if (
        weather.item.filter(item => item.category === 'REH')[0].obsrValue >=
          0 &&
        weather.item.filter(item => item.category === 'REH')[0].obsrValue <= 100
      ) {
        scoreAll[2] = 30;
      } else {
        scoreAll[2] = 30;
      }
    }
    setScore(scoreAll);
  }, [weather]);
  return (
    <>
      <div id="weatherWrapper">
        <WeatherMain weather={weather} score={score} />
        <WeatherCard weather={weather} score={score} position={position} />
        <WeatherTime time={time} />
      </div>
    </>
  );
}
