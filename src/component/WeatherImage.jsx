import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function WeatherImage({ weather }) {
  useEffect(() => {
    if (weather) {
      console.log(
        weather.item.filter(item => item.category === 'SKY')[0].fcstValue ===
          1 && '맑음',
      );
    }
  }, [weather]);
  return <div id="weatherImage" />;
}

WeatherImage.propTypes = {
  weather: PropTypes.object,
};
