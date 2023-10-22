import "./Charts.css";
import { useState } from "react";
import jsonData from "../../data/charts.json";

const Charts = () => {
  const chart1 = JSON.parse(JSON.stringify(jsonData.chart1));
  const chart2 = JSON.parse(JSON.stringify(jsonData.chart2));
  const dealerRow = JSON.parse(JSON.stringify(jsonData.dealerRow));

  const [chart, setChart] = useState(chart1);

  const handleClick = () => {
    setChart(chart2);
  };

  return (
    <div className="table-container">
      <table>
        <tr>
          <th>{`Dealer's Card\nYour Hand`}</th>
          {dealerRow.map((data: number, i: number) => {
            return <th key={i}>{data}</th>;
          })}
        </tr>
        {chart.data.map(
          (data: { label: string; value: string[] }, i: number) => {
            return (
              <tr key={i}>
                <th>{data.label}</th>
                {data.value.map((value) => {
                  return (
                    <td
                      style={{
                        backgroundColor: value == "H" ? "green" : "red",
                      }}
                    >
                      {value}
                    </td>
                  );
                })}
              </tr>
            );
          }
        )}
      </table>
      <table>
        <tr>
          <th>Your Hand\Dealer's Card</th>
          {dealerRow.map((data: number, i: number) => {
            return <th key={i}>{data}</th>;
          })}
        </tr>
        {chart.data2.map(
          (data: { label: string; value: string[] }, i: number) => {
            return (
              <tr key={i}>
                <th>{data.label}</th>
                {data.value.map((value) => {
                  return (
                    <td
                      style={{
                        backgroundColor: value == "H" ? "green" : "red",
                      }}
                    >
                      {value}
                    </td>
                  );
                })}
              </tr>
            );
          }
        )}
      </table>
      <button onClick={handleClick}>Switch Charts</button>
    </div>
  );
};

export default Charts;
