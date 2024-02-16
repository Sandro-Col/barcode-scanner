import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";
//import { useState, useEffect } from 'react';

import Html5QrcodePlugin from "./Html5QrcodePlugin.jsx";
import ResultContainerPlugin from "./ResultContainerPlugin.jsx";

import beepSound from "./assets/sounds/store-scanner-beep-90395.mp3";

function playSound() {
    new Audio(beepSound).play();
}

function App() {
  const [aisle, setAisle] = useState(0);
  const [side, setSide] = useState("");
  const [section, setSection] = useState(0);
  const [shelf, setShelf] = useState(0);

  const [decodedResults, setDecodedResults] = useState([]);
  const onNewScanResult = (decodedText, decodedResult) => {
    console.log("App [result]", decodedResult);
    setDecodedResults((prev) => [...prev, decodedResult]);
    playSound();
  };

  /* return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Oi.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  ); */

  return (
    <div className="App">
      <section className="App-section">
        <div className="App-section-title"> Barcode Scanner</div>
        <br />
        <Html5QrcodePlugin
          fps={10}
          qrbox={{ width: 350, height: 350 }}
          disableFlip={false}
          qrCodeSuccessCallback={onNewScanResult}
        />

        <input type="number" placeholder='Aisle...' onChange={(event) => {setAisle(event.target.value);}}></input>
        <input type="text" placeholder='Side...' onChange={(event) => {setSide(event.target.value.trim().toUpperCase());}}></input>
        <input type="number" placeholder='Section...' onChange={(event) => {setSection(event.target.value);}}></input>
        <input type="number" placeholder='Shelf...' onChange={(event) => {setShelf(event.target.value);}}></input>

        <ResultContainerPlugin results={decodedResults}/>
      </section>
      <section className="App-section-footer">
      </section>
    </div>
  );
}

export default App;

// // @ts-check

// import React, { useState } from 'react';
// import './App.css';
// // import HowToUse from './HowToUse.jsx';
// import Html5QrcodePlugin from './Html5QrcodePlugin.jsx';
// import ResultContainerPlugin from './ResultContainerPlugin.jsx';

// const App = (props) => {
//     const [decodedResults, setDecodedResults] = useState([]);
//     const onNewScanResult = (decodedText, decodedResult) => {
//         console.log("App [result]", decodedResult);
//         setDecodedResults(prev => [...prev, decodedResult]);
//     };

//     return (
//         <div className="App">
//             <section className="App-section">
//                 <div className="App-section-title"> Html5-qrcode React demo</div>
//                 <br />
//                 <br />
//                 <br />
//                 <Html5QrcodePlugin
//                     fps={10}
//                     qrbox={250}
//                     disableFlip={false}
//                     qrCodeSuccessCallback={onNewScanResult}
//                 />
//                 <ResultContainerPlugin results={decodedResults} />

//             </section>
//         </div>
//     );
// };

// export default App;
