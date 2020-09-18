import React from 'react';
import './App.css';

import MyMapComponent from "./components/MyMapComponent/MyMapComponent.component.jsx";

function App() {
  return (
    <div className="App">
      <MyMapComponent
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        isMarkerShown={true}
      />
    </div>
  );
}

export default App;
