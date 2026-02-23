import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const mechanicData = [
  { name: "Alex", completed: 18, overdue: 2 },
  { name: "Jordan", completed: 12, overdue: 8 },
  { name: "Taylor", completed: 22, overdue: 1 },
  { name: "Casey", completed: 9, overdue: 12 },
  { name: "Riley", completed: 15, overdue: 4 },
];

export function MechanicPerformance() {
  return (
    <div
      className="shadow-md h-100 w-full bg-background-secondary p-6 rounded-xl border border-border-subtle 
                    overflow-y-auto overflow-x-hidden
                    scrollbar-thin scrollbar-thumb-gold-500 scrollbar-track-transparent 
                    hover:scrollbar-thumb-gold-600"
    >
      <div className="flex flex-col mb-6">
        <h3 className="text-text-primary font-bold">Mechanic Workload</h3>
        <p className="text-text-secondary text-xs">
          Real-time task distribution per technician
        </p>
      </div>
      <div className="h-70 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={mechanicData}
            layout="vertical"
            margin={{ left: 10, right: 20 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.05)"
              horizontal={true}
              vertical={false}
            />

            <XAxis type="number" hide />

            <YAxis
              dataKey="name"
              type="category"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#D1D5DB", fontSize: 13, fontWeight: 500 }}
              width={70}
            />

            <Tooltip
              cursor={{ fill: "rgba(255,255,255,0.3)" }}
              contentStyle={{
                backgroundColor: "#1E293B",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
                color: '#F9FAFB'
              }}
            />

            <Legend
              verticalAlign="top"
              align="right"
              iconType="circle"
              wrapperStyle={{ paddingBottom: "20px" }}
            />

            <Bar
              dataKey="completed"
              name="Completed"
              stackId="a"
              fill="#10B981"
              barSize={20}
            />

            <Bar
              dataKey="overdue"
              name="Overdue"
              stackId="a"
              fill="#EF4444"
              radius={[0, 4, 4, 0]}
              barSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
