import React from 'react';

const statData = [
  { label: 'Revenue', value: 1000, color: 'from-purple-400 to-pink-400', icon: '💰' },
  { label: 'Customers', value: 1500, color: 'from-yellow-200 to-yellow-400', icon: '👥' },
  { label: 'Products', value: 103, color: 'from-pink-300 to-pink-500', icon: '👨‍🍳' },
  { label: 'Orders', value: 500, color: 'from-blue-300 to-blue-500', icon: '🚚' },
];

const Card = ({ children, className = '' }) => (
  <div className={`rounded-xl shadow-md bg-white ${className}`}>{children}</div>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const AdminHome = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Hi, Welcome Back!</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {statData.map((stat) => (
          <Card key={stat.label} className={`bg-gradient-to-r ${stat.color} text-white`}>
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <div className="text-3xl">{stat.icon}</div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent>
            <h2 className="text-lg font-semibold mb-2">Items Sold</h2>
            <div className="h-64 bg-gray-100 flex items-center justify-center rounded">
              Bar Chart Placeholder
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-lg font-semibold mb-2">Category Distribution</h2>
            <div className="h-64 bg-gray-100 flex items-center justify-center rounded">
              Pie Chart Placeholder
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminHome;
