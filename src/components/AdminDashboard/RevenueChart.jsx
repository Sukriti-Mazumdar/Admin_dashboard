import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "01", revenue: 50000 },
  { month: "02", revenue: 100000 },
  { month: "03", revenue: 60000 },
  { month: "04", revenue: 110000 },
  { month: "05", revenue: 120000 },
  { month: "06", revenue: 130000 },
  { month: "07", revenue: 150000 },
];

function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1c08f5ff" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#2b19eeff" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="month" />
        <YAxis tickFormatter={(value) => value.toLocaleString()} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip formatter={(value) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(value)} />
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="#2a4bff"
          fill="url(#colorRevenue)"
          strokeWidth={3}
          dot={{ r: 5, fill: "#2a4bff" }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default RevenueChart;
