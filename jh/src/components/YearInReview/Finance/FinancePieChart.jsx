import React from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

const data = [
  { value: 13591, name: 'Rent' },
  { value: 8696, name: 'Shopping' },
  { value: 3239, name: 'Dining' },
  { value: 3076, name: 'Groceries' },
  { value: 2254, name: 'Transport' },
  { value: 1874, name: 'Misc' }
];

const COLORS = [
  "rgb(101, 36, 36)",
  "rgb(116, 41, 41)",
  "rgb(136, 48, 48)",
  "rgb(156, 55, 55)",
  "rgb(176, 63, 63)",
  "rgb(191, 75, 75)",
  "rgb(198, 95, 95)",
  "rgb(205, 115, 115)",
  "rgb(212, 135, 135)",
  "rgb(219, 155, 155)",
  "rgb(227, 175, 175)",
  "rgb(234, 195, 195)"
];

const renderLabel = function(entry) {
  return `${entry.name} ($${entry.value.toLocaleString()})`;
}

const FinancePieChart = () => {
  return (
    <ResponsiveContainer height={550} width="100%">
      <PieChart>
        <Pie
          isAnimationActive={true}
          data={data}
          cx={500}
          cy={250}
          outerRadius={200}
          fill="#8884d8"
          label={renderLabel}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default FinancePieChart;
