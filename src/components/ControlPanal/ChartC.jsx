import  React ,{useState}from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 3490, 3490, 3490, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300, 1398, 1398, 1398, 1398];
const xData = [3490, 3490, 3490, 3490, 2400, 1398, 9800, 3908, 4800, 3800, 1398]
const yData = [1398, 9800, 3908, 4800, 3800, 4300, 3490, 4000, 3000, 2000, 2780]
const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G', 
    'Page t', 
    'Page y', 
    'Page u', 
    'Page i',
];

export default function SimpleLineChart() {
    const [length ,setLength] = useState(800)
    // if (xLabels.length >= 5){
    //     setLength(500)
    // }
    // if (xLabels.length >= 7){
    //     setLength(700)
    // } if (xLabels.length >= 9){
    //     setLength(800)
    // } if (xLabels.length >= 11){
    //     setLength(900)
    // }
    return (
        <LineChart
            // width={length}
            height={300}
            className='w-100'
            series={[
                { data: pData, label: 'pv' },
                { data: uData, label: 'uv' },
                { data: xData, label: 'xv' },
                { data: yData, label: 'yd' }

            ]}
            xAxis={[{ scaleType: 'point', data: xLabels }]}
        />
    );
}
