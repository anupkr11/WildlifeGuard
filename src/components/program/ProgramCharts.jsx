import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#166534", "#22c55e", "#4ade80", "#86efac"];

const ProgramCharts = ({ program }) => {
  /* ---------------- TARGET SPECIES ---------------- */
  const species = program["Target Species/Ecosystems"]
    ?.split(",")
    .map((s) => s.trim());

  const speciesData = species.map((s) => ({
    name: s,
    value: 1,
  }));

  /* ---------------- PROGRAM AGE ---------------- */
  const currentYear = new Date().getFullYear();
  const age = currentYear - Number(program["Year Launched"]);

  const ageData = [
    {
      name: "Years Active",
      value: age,
    },
  ];

  /* ---------------- FUNDING ---------------- */
  const fundingValue = Number(
    program["Funding (USD)"]?.replace(/[^0-9]/g, "")
  );

  const fundingData = [
    {
      name: "Funding (Million USD)",
      value: fundingValue,
    },
  ];

  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold mb-10">
        Program Insights
      </h2>

      {/* 🔹 3 CHARTS IN SINGLE ROW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* TARGET SPECIES */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4">
            Target Species / Ecosystems
          </h3>

          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={speciesData}
                dataKey="value"
                nameKey="name"
                label
              >
                {speciesData.map((_, i) => (
                  <Cell
                    key={i}
                    fill={COLORS[i % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* PROGRAM DURATION */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4">
            Program Duration
          </h3>

          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={ageData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#166534" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* FUNDING */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4">
            Funding Allocation
          </h3>

          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={fundingData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#22c55e" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </section>
  );
};

export default ProgramCharts;
