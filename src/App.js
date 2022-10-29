import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { PieChart, Pie } from "recharts";

import "./App.css";
const data = [
  {
    month: "Apr",
    amt: 50,
  },
  {
    month: "May",
    amt: 200,
  },
  {
    month: "June",
    amt: 220,
  },
  {
    month: "July",
    amt: 300,
  },
  {
    month: "Aug",
    amt: 230,
  },
  {
    month: "Sept",
    amt: 300,
  },
  {
    month: "Oct",
    amt: 250,
  },
  {
    month: "Nov",
    amt: 290,
  },
  {
    month: "Dec",
    amt: 300,
  },
];

const data2 = [
  { name: "Geeksforgeeks", students: 400 },
  { name: "Technical scripter", students: 700 },
  { name: "Geek-i-knack", students: 200 },
  { name: "Geek-o-mania", students: 1000 },
];

export default function App() {
  return (
    <div className="App">
      <AreaChart
        width={800}
        height={200}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="3%" stopColor="#5e72e4" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#5e72e4" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid
          strokeDasharray="3 3"
          horizontal=""
          vertical="True"
          stroke="#243240"
        />
        <XAxis dataKey="month" axisLine={false} />
        <YAxis axisLine={false} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="amt"
          stroke="#4c00b0"
          strokeWidth="4"
          dot={true}
          activeDot={{
            fill: "#2e4355",
            stroke: "#2e4355",
          }}
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>

      <PieChart width={700} height={700}>
        <Pie
          data={data2}
          dataKey="students"
          outerRadius={250}
          innerRadius={230}
          fill="green"
        />
      </PieChart>
    </div>
  );
}
