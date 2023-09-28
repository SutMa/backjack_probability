import './Charts.css';
import {useState} from 'react';

const Charts = () => {
    const chart1 = {
        data: [
            {
                label: '5',
                value: [
                    'H','S','H','H','H','H','H','H','H'
                ]
            },
            {
                label: '6',
                value: [
                    'H','S','H','H','H','H','H','H','H'
                ]
            },
            {
                label: '7',
                value: [
                    'H','H','H','S','H','H','H','H','H'
                ]
            },
            {
                label: '8',
                value: [
                    'H','H','H','H','H','S','H','H','H'
                ]
            },
            {
                label: '9',
                value: [
                    'H','H','S','S','H','H','H','H','H'
                ]
            },
            {
                label: '10',
                value: [
                    'H','H','S','H','H','H','H','H','H'
                ]
            },
            {
                label: '11',
                value: [
                    'H','H','H','H','H','H','H','S','H'
                ]
            },
            {
                label: '12',
                value: [
                    'H','H','H','H','H','S','S','H','H'
                ]
            },
            {
                label: '13',
                value: [
                    'H','S','H','H','H','H','H','H','H'
                ]
            },
            {
                label: '14',
                value: [
                    'S','H','H','H','H','H','H','H','H'
                ]
            },
            {
                label: '15',
                value: [
                    'H','H','H','H','H','H','S','S','S'
                ]
            },
            {
                label: '16',
                value: [
                    'H','H','S','S','S','H','H','H','H'
                ]
            },
            {
                label: '17',
                value: [
                    'H','S','H','S','H','H','H','H','H'
                ]
            }
            
        ],
        data2: [
            {
                label: 'A/2',
                value: [
                    'H','S','H','H','H','H','H','H','H'
                ]
            },
            {
                label: 'A/3',
                value: [
                    'H','S','H','H','H','H','H','H','H'
                ]
            },
            {
                label: 'A/4',
                value: [
                    'H','H','H','S','H','H','H','H','H'
                ]
            },
            {
                label: 'A/5',
                value: [
                    'H','H','H','H','H','S','H','H','H'
                ]
            },
            {
                label: 'A/6',
                value: [
                    'H','H','S','S','H','H','H','H','H'
                ]
            },
            {
                label: 'A/7',
                value: [
                    'H','H','S','H','H','H','H','H','H'
                ]
            },
            {
                label: 'A/8',
                value: [
                    'H','H','H','H','H','H','H','S','H'
                ]
            },
            {
                label: 'A/9',
                value: [
                    'H','H','H','H','H','S','S','H','H'
                ]
            }
            
        ]
    }

    const chart2 = {
        data: [
            {
                label: '5',
                value: [
                    'S','S','S','S','S','S','S','S','S'
                ]
            },
            {
                label: '6',
                value: [
                    'H','S','H','H','H','H','H','H','H'
                ]
            },
            {
                label: '7',
                value: [
                    'H','H','H','S','H','H','H','H','H'
                ]
            },
            {
                label: '8',
                value: [
                    'S','S','S','S','S','S','S','S','S'
                ]
            },
            {
                label: '9',
                value: [
                    'H','H','S','S','H','H','H','H','H'
                ]
            },
            {
                label: '10',
                value: [
                    'S','S','S','S','S','S','S','S','S'
                ]
            },
            {
                label: '11',
                value: [
                    'S','S','S','S','S','S','S','S','S'
                ]
            },
            {
                label: '12',
                value: [
                    'S','S','S','S','S','S','S','S','S'
                ]
            },
            {
                label: '13',
                value: [
                    'H','S','H','H','H','H','H','H','H'
                ]
            },
            {
                label: '14',
                value: [
                    'S','H','H','H','H','H','H','H','H'
                ]
            },
            {
                label: '15',
                value: [
                    'H','H','H','H','H','H','S','S','S'
                ]
            },
            {
                label: '16',
                value: [
                    'H','H','S','S','S','H','H','H','H'
                ]
            },
            {
                label: '17',
                value: [
                    'S','S','S','S','S','S','S','S','S'
                ]
            }
            
        ],
        data2: [
            {
                label: 'A/2',
                value: [
                    'H','S','H','H','H','H','H','H','H'
                ]
            },
            {
                label: 'A/3',
                value: [
                    'S','S','S','S','S','S','S','S','S'
                ]
            },
            {
                label: 'A/4',
                value: [
                    'S','S','S','S','S','S','S','S','S'
                ]
            },
            {
                label: 'A/5',
                value: [
                    'H','H','H','H','H','S','H','H','H'
                ]
            },
            {
                label: 'A/6',
                value: [
                    'H','H','S','S','H','H','H','H','H'
                ]
            },
            {
                label: 'A/7',
                value: [
                    'S','S','S','S','S','S','S','S','S'
                ]
            },
            {
                label: 'A/8',
                value: [
                    'S','S','S','S','S','S','S','S','S'
                ]
            },
            {
                label: 'A/9',
                value: [
                    'H','H','H','H','H','S','S','H','H'
                ]
            }
            
        ]
    }

    const [chart,setChart] = useState(chart1);

    const dealerRow = [2,3,4,5,6,7,8,9,10];

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
            <button onClick={handleClick}>Switch Charts</button>
        </div>
    )
}

export default Charts;