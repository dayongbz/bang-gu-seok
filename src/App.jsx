import React from 'react';
import './reset.css';
import './App.css';
import Weather from './component/Weather';

function App() {
  return (
    <>
      <div id="background" />
      <div id="unsplashPhoto">
        <p>
          Photo by
          <br />
          <a target="_blank" href="https://unsplash.com/@enrapture">
            Enrapture Captivating Media
          </a>
          <br />
        </p>
      </div>
      <Weather />
    </>
  );
}

export default App;
