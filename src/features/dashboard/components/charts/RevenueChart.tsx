import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', revenue: 4000 },
  { name: 'Tue', revenue: 3000 },
  { name: 'Wed', revenue: 5000 },
  { name: 'Thu', revenue: 2780 },
  { name: 'Fri', revenue: 6890 },
  { name: 'Sat', revenue: 2390 },
];

export function RevenueChart() {
  return (
    <div className="shadow-md h-[400px] w-full bg-background-secondary pr-6 py-6 pl-4 rounded-xl border border-border-subtle flex flex-col">
      <h3 className="text-text-primary font-bold mb-4 shrink-0">Revenue Overview</h3>
      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart 
            data={data}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#E6B800" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#E6B800" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#D1D5DB', fontSize: 12 }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#D1D5DB', fontSize: 12 }} 
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1E293B', 
                border: '1px solid rgba(255,255,255,0.1)', 
                borderRadius: '8px',
                fontSize: '12px'
              }}
              itemStyle={{ color: '#E6B800' }}
            />
            <Area 
              type="monotone" 
              dataKey="revenue" 
              stroke="#E6B800" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorRevenue)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}