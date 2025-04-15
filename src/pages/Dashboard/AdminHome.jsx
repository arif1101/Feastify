import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import useAxiosSecure from '../../useComponents/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Sector, ResponsiveContainer} from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const Card = ({ children, className = '' }) => (
  <div className={`rounded-xl shadow-md bg-white ${className}`}>{children}</div>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);


const AdminHome = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin-stats');
      return res.data;
    }
  });

  const {data: chartData = {}} = useQuery({
    queryKey: ['order-stats'],
    queryFn: async () => {
      const res = await axiosSecure.get('/order-stats');
      return res.data;
    }
  })

  const formattedStats = [
    { label: 'Revenue', value: stats.revenue, color: 'from-purple-400 to-pink-400', icon: '💰' },
    { label: 'Customers', value: stats.users, color: 'from-yellow-200 to-yellow-400', icon: '👥' },
    { label: 'Products', value: stats.menuItems, color: 'from-pink-300 to-pink-500', icon: '👨‍🍳' },
    { label: 'Orders', value: stats.orders, color: 'from-blue-300 to-blue-500', icon: '🚚' },
  ];

  // custom bar chart 
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };


  // custom pichart 
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  const piChartData = chartData.map(data => {
    return {name: data.category, value: data.revenue}
  })

  return (
    <div className="p-6 space-y-6 mx-auto max-w-[1080px] w-full">
      <h1 className="text-3xl font-bold">Hi, Welcome Back!</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {formattedStats.map((stat) => (
          <Card key={stat.label} className={`bg-gradient-to-r ${stat.color} text-white`}>
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <div className="text-3xl">{stat.icon}</div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-4">

        <div className='flex flex-1 items-center justify-center'>
          <BarChart
            width={500}
            height={400}
            data={chartData}
            // margin={{
            //   top: 20,
            //   right: 30,
            //   left: 20,
            //   bottom: 5,
            // }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className='flex flex-1 items-center justify-center'>
          <PieChart width={500} height={500}>
            <Pie
              data={piChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {piChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
