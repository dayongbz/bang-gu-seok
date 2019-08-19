import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment-timezone';
import WeatherTimePosition from './WeatherTimePosition';
import WeatherImage from './WeatherImage';
import xyConv from './xyConv';

export default function Weather() {
  const [position, setPosition] = useState();
  const [time, setTime] = useState();
  const [weather, setWeather] = useState();

  useEffect(() => {
    function getPostion(p) {
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?request=coordsToaddr&coords=${+p.coords.longitude.toFixed(
            4,
          )},${+p.coords.latitude.toFixed(4)}&orders=admcode&output=json`,
          {
            headers: {
              'X-NCP-APIGW-API-KEY-ID': 'y6syzp2el8',
              'X-NCP-APIGW-API-KEY': 'oGUQ22oSWOEDf44apBf9QSZVKanLLauMgr5CnBDy',
            },
          },
        )
        .then(data => {
          setPosition({
            latitude: +p.coords.latitude.toFixed(4),
            longitude: +p.coords.longitude.toFixed(4),
            dong: data.data.results[0].region.area3.name,
          });
          window.localStorage.setItem(
            'position',
            JSON.stringify({
              latitude: +p.coords.latitude.toFixed(4),
              longitude: +p.coords.longitude.toFixed(4),
              dong: data.data.results[0].region.area3.name,
            }),
          );
        });
    }
    navigator.geolocation.getCurrentPosition(p => {
      if (!window.localStorage.getItem('position')) {
        getPostion(p);
      } else {
        setPosition(JSON.parse(window.localStorage.getItem('position')));
      }
    });
    setInterval(() => {
      setTime({
        date: moment.tz('Asia/Seoul').format('YYYY.MM.DD'),
        hour: moment.tz('Asia/Seoul').format('hh'),
        minute: moment.tz('Asia/Seoul').format('mm'),
        seconds: moment.tz('Asia/Seoul').format('ss'),
        ampm: moment.tz('Asia/Seoul').format('A'),
      });
    }, 100);
  }, []);
  useEffect(() => {
    function getWeather() {
      const { x, y } = xyConv(position.latitude, position.longitude);
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/http://newsky2.kma.go.kr/service/SecndSrtpdFrcstInfoService2/ForecastSpaceData?ServiceKey=j%2BeCKcismlZK%2BpaFNLrSPqSvTKVFFiiUqzXfxIXmNPl%2F4dWUGjlDL9wjnnAVFfGUGfJMK62lqnYwqLQe4r88fA%3D%3D&base_date=${moment
            .tz('Asia/Seoul')
            .format('YYYYMMDD')}&base_time=0500&nx=${x}&ny=${y}&_type=json`,
        )
        .then(data => {
          setWeather(data.data.response.body.items.item);
          window.localStorage.setItem(
            'weather',
            JSON.stringify({
              time: moment.tz('Asia/Seoul').format('HH:mm'),
              date: moment.tz('Asia/Seoul').format('YYYY.MM.DD'),
              item: data.data.response.body.items.item,
            }),
          );
        });
    }
    if (position) {
      if (!window.localStorage.getItem('weather')) {
        getWeather();
      } else if (!weather) {
        setWeather(JSON.parse(window.localStorage.getItem('weather')));
      }
    }
  }, [position, time, weather]);
  return (
    <>
      <div id="weatherWrapper">
        <WeatherImage weather={weather} />
        <WeatherTimePosition position={position} time={time} />
      </div>
    </>
  );
}
