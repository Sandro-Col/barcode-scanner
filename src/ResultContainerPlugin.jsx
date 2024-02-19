import React from "react";

function filterResults(results) {
  let filteredResults = [];
  for (var i = 0; i < results.length; ++i) {
    if (i === 0) {
      filteredResults.push(results[i]);
      continue;
    }

    if (results[i].decodedText !== results[i - 1].decodedText) {
      filteredResults.push(results[i]);
    }
  }
  return filteredResults;
}

const ResultContainerTable = ({ data }) => {
  const results = filterResults(data);
  return (
    <table className={"Qrcode-result-table"}>
      <thead>
        <tr>
          <td>Barcode</td>
        </tr>
      </thead>
      <tbody>
        {results.map((result, i) => {
          const link = "https://go-upc.com/search?q=" + result.decodedText;
        //   console.log(result);
          return (
            <tr key={i + 1}>
              <td>
                <a href={link} target="_blank" rel="noreferrer" className="link"> {result.decodedText} </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const ResultContainerPlugin = (props) => {
  const results = filterResults(props.results);
  return (
    <div className="Result-container">
      <div className="Result-header">Scanned results ({results.length})</div>
      <div className="Result-section">
        <ResultContainerTable data={props} />
      </div>
    </div>
  );
};

export default ResultContainerPlugin;
