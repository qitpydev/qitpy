import React from 'react'
import { LineChart, Line } from 'recharts';
import "./ChartTodo.scss";

const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
function ChartTodo() {
  return (
    <div className="chart-todo">
        <LineChart width={400} height={400} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
    </div>
    
  )
}

export default ChartTodo