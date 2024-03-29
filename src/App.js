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

    const initialState = [
        {id: 1, name: 'Alice', salary: 100},
        {id: 2, name: 'Bobby Hadz', salary: 200},
      ];

    //   console.log("initialState: ", initialState);
    
      const [employees, setEmployees] = useState(initialState);

      const arr = [
        {id: 3, name: 'Carl', salary: 300},
        {id: 4, name: 'Demi', salary: 400},
      ];

    //   console.log("arr: ", arr);

      
  const [aisle, setAisle] = useState(88);
  const [side, setSide] = useState("");
  const [section, setSection] = useState(0);
  const [shelf, setShelf] = useState(0);
  let item = [];

//   setSide("A");
//   setSection(1);
//   setShelf(1);



  const [decodedResults, setDecodedResults] = useState([]);
  const [listOfItems, setListOfItems] = useState([]);

  const onNewScanResult = (decodedText, decodedResult) => {
    // console.log("App [decodedResult]", decodedResult);
    // console.log("App [decodedResult_S]", decodedResults);

    setDecodedResults((prev) => [...prev, decodedResult]);

        console.log("App [decodedResult_S]", decodedResults);


    // item = [{aisle:aisle, upc:decodedResult.decodedText}];
    // setListOfItems([...listOfItems, ...item]);
    // console.log("item: ", item);
    // console.log("listOfItems: ", listOfItems);
    // setlistOfItems((prev) => [...prev, item]);
    // playSound();

    setEmployees([...employees, ...arr]);

      console.log("employees: ", employees);

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

        <ResultContainerPlugin results={decodedResults} aisle={aisle} side={side} section={section}/>
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
