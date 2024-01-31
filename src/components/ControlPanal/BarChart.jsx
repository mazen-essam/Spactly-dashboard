import React from 'react'
import './barChart.css'
import { PieChart } from '@mui/x-charts/PieChart';

export default function BarChart() {
    return (
        <div className='bar-c  h-100'>
            <h3>الاستخدام</h3><p>الاشتراك: تجريبي</p>
        <div className='chart-con d-flex justify-content-center'>           
        <PieChart
                series={[
                    {
                        data: [{ id: 0, value: 10, label: 'series A' },
                        { id: 1, value: 15, label: 'series B' },
                        { id: 2, value: 20, label: 'series C' }],
                        innerRadius: 90,
                        outerRadius: 100,
                        paddingAngle: 5,
                        cornerRadius: 5,
                        startAngle: -90,
                        endAngle: 90,
                        cx: 190,
                        cy: 150,
                    }]}
                    height={200}
            />
            </div>

 
            <div className='d-flex justify-content-around'>

                <button className='btn'>الباقات</button>
                <button className='btn'>ترقية</button>
            </div>
        </div>
    )
}
// {import React from 'react';
// import { PieChart, Pie, Cell } from 'recharts';

// const MyPieChart = ({ cx }) => {
//   const data = [{ name: 'Category A', value: 30 }, { name: 'Category B', value: 70 }];
  
//   return (
//     <div className="chart-container">
//       <PieChart width={400} height={400} cx={cx} cy={200}>
//         <Pie data={data} dataKey="value" nameKey="name" outerRadius={80} fill="#8884d8">
//           <Cell fill="#82ca9d" />
//           <Cell fill="#8884d8" />
//         </Pie>
//       </PieChart>
//     </div>
//   );
// };

// export default MyPieChart;
// }