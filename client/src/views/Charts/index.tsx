import "./Charts.css";
import jsonData from "../../data/charts.json";

const Charts = () => {
  const chart = JSON.parse(JSON.stringify(jsonData.chart1));
  const dealerRow = JSON.parse(JSON.stringify(jsonData.dealerRow));

  const determineColor = (value: string) => {
    switch (value) {
      case "H":
        return "green";
      case "S":
        return "yellow";
      case "D":
        return "lightblue";
      case "Ds":
        return "orange";
      case "N":
        return "red";
      case "Y":
        return "green";
    }
  };

  return (
    <div className="table-container">
      <table className="chart-table">
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
                        backgroundColor: determineColor(value),
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
      <table className="chart-table">
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
                        backgroundColor: determineColor(value),
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
      <table className="chart-table">
        <tr>
          <th>Your Hand\Dealer's Card</th>
          {dealerRow.map((data: number, i: number) => {
            return <th key={i}>{data}</th>;
          })}
        </tr>
        {chart.data3.map(
          (data: { label: string; value: string[] }, i: number) => {
            return (
              <tr key={i}>
                <th>{data.label}</th>
                {data.value.map((value) => {
                  return (
                    <td
                      style={{
                        backgroundColor: determineColor(value),
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
      <div className="floating-key">
        <table className="key-table">
          <tr>
            <th>Hit (H)</th>
            <th style={{backgroundColor: 'green'}}/>
          </tr>
          <tr>
            <th>Stand (S)</th>
            <th style={{backgroundColor: 'yellow'}}/>
          </tr>
          <tr>
            <th>Double Down (D)</th>
            <th style={{backgroundColor: 'lightblue'}}/>
          </tr>
          <tr>
            <th>Double Down if Stand is allowed after (Ds)</th>
            <th style={{backgroundColor: 'orange'}}/>
          </tr>
          <tr>
            <th>Split (Y)</th>
            <th style={{backgroundColor: 'green'}}/>
          </tr>
          <tr>
            <th>Don't Split (N)</th>
            <th style={{backgroundColor: 'red'}}/>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Charts;
