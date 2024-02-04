import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

import Html5QrcodePlugin from './Html5QrcodePlugin.jsx';
import ResultContainerPlugin from './ResultContainerPlugin.jsx';

function App() {

    const [decodedResults, setDecodedResults] = useState([]);
    const onNewScanResult = (decodedText, decodedResult) => {
        console.log("App [result]", decodedResult);
        setDecodedResults(prev => [...prev, decodedResult]);
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
            <div className="App-section-title"> Sandro - Html5-qrcode React demo</div>
            <br />
            <br />
            <br />
            <Html5QrcodePlugin
                fps={10}
                qrbox={{width: 450, height: 100}}
                disableFlip={false}
                aspectRatio={1.777778}
                qrCodeSuccessCallback={onNewScanResult}
            />
            <ResultContainerPlugin results={decodedResults} />
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

