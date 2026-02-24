import { memo } from 'react';
import { PieChart, Pie, ResponsiveContainer, Legend } from 'recharts';

const serviceData = [
  { name: 'Brakes', value: 400, fill: '#E6B800'},
  { name: 'Engine', value: 300, fill: '#3B82F6'},
  { name: 'Tires', value: 300, fill: '#22C55E' },
  { name: 'Detailing', value: 200, fill: '#A855F7' },
];


export default memo(function ServiceDistribution() {
  return (
    <div className="shadow-md h-[400px] w-full bg-background-secondary p-6 rounded-xl border border-border-subtle flex flex-col">
      <h3 className="text-text-primary font-bold mb-4 shrink-0">Service Mix</h3>
      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={serviceData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
            </Pie>
            <Legend verticalAlign="bottom" height={36} iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
})