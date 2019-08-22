import React from 'react';
import './reset.css';
import './App.css';
import Weather from './component/Weather';

function App() {
  return (
    <>
      <header>
        <div id="headerWrap">방구석</div>
      </header>
      <Weather />
    </>
  );
}

export default App;
