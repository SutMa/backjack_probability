import './Charts.css';
import {useState} from 'react';
import {chart1, chart2, dealerRow} from '../../data/chartTables';

const Charts = () => {

    const [chart,setChart] = useState(chart1);

    const handleClick = () => {
        setChart(chart2);
    }

    return (
        <div className='table-container'>
            <table>
                <tr>
                    <th>{`Dealer's Card\nYour Hand`}</th>
                    {dealerRow.map((data, i) => {
                        return <th key={i}>{data}</th>
                    })}
                </tr>
                {chart.data.map((data, i) => {
                    return (
                        <tr key={i}>
                            <th>{data.label}</th>
                            {data.value.map((value) => {
                                return <td style={{
                                    backgroundColor: value == 'H' ? 'green' : 'red'
                                }}>{value}</td>
                            })}
                        </tr>
                    )
                })}
            </table>
            <table>
                <tr>
                    <th>Your Hand\Dealer's Card</th>
                    {dealerRow.map((data, i) => {
                        return <th key={i}>{data}</th>
                    })}
                </tr>
                {chart.data2.map((data, i) => {
                    return (
                        <tr key={i}>
                            <th>{data.label}</th>
                            {data.value.map((value) => {
                                return <td style={{
                                    backgroundColor: value == 'H' ? 'green' : 'red'
                                }}>{value}</td>
                            })}
                        </tr>
                    )
                })}
            </table>
            <button onClick={handleClick}>Switch Charts</button>
        </div>
    )
}

export default Charts;