import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = {
  "Critically Endangered": "#7f1d1d",
  "Endangered": "#ea580c",
  "Vulnerable": "#84cc16",
  "Near Threatened": "#65a30d",
  "Least Concern": "#166534",
};

const ConservationCharts = ({ data }) => {
  // 🔹 COUNT BY CONSERVATION STATUS
  const statusCount = data.reduce((acc, item) => {
    const status = item["Conservation Status"];
    if (!status) return acc;
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(statusCount).map((key) => ({
    status: key,
    count: statusCount[key],
  }));

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center mb-14">
          Conservation Status Overview
        </h2>

        {/* CHART GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* BAR CHART */}
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Species by Conservation Status
            </h3>

            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={chartData}>
                <XAxis dataKey="status" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="count">
                  {chartData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[entry.status] || "#22c55e"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* PIE CHART */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Distribution of Conservation Status
            </h3>

            <ResponsiveContainer width="100%" height={320}>
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="count"
                  nameKey="status"
                  cx="50%"
                  cy="50%"
                  outerRadius={110}
                  label
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[entry.status] || "#22c55e"}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConservationCharts;
