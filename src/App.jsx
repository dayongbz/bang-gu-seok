import React from 'react';
import './reset.css';
import './App.css';
import Test from './component/Test';

function App() {
  return (
    <>
      <div id="mainWrapper" />
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
      <Test />
    </>
  );
}

export default App;
