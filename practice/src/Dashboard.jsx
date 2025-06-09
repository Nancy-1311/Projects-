import React, { useState } from 'react';
import arrow from '../src/images/right2.svg';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', users: 20 },
  { name: 'Feb', users: 10 },
  { name: 'Mar', users: 30 },
  { name: 'Apr', users: 40 },
  { name: 'May', users: 50 },
];

const menuItem = [
  'Dashboard', 'Setting', 'Notification', 'Tasks', 'Report', 'Charts', 'Profile', 'Logout',
];

const Cards = ({ title, value }) => (
  <div className="bg-white rounded-xl p-4 shadow-md text-center hover:bg-gray-200 transition w-full">
    <h2 className="text-lg font-semibold">{title}</h2>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

const SideBar = ({ isOpen, toggle }) => (
  <div className={`bg-gray-800 p-4 text-white transition-all duration-500 ease-in-out ${isOpen ? 'w-64' : 'w-16'} h-screen fixed sm:relative z-50`}>
    <div className="relative">
      <img
        src={arrow}
        onClick={toggle}
        className={`absolute -right-6 top-10 w-6 cursor-pointer transition-transform ${isOpen ? 'rotate-0' : 'rotate-180'}`}
        alt="toggle"
      />
    </div>
    <ul className="mt-16 space-y-6 text-lg">
      {menuItem.map((item, i) => (
        <li key={i} className={`transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 hidden sm:block'}`}>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col sm:flex-row min-h-screen">
      <SideBar isOpen={isOpen} toggle={toggleSidebar} />
      
      <div className={`flex-1 bg-gray-200 p-4 sm:ml-${isOpen ? '64' : '16'} transition-all duration-300`}>
        <h1 className="text-2xl sm:text-4xl font-bold text-center mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <Cards title="Users" value="150" />
          <Cards title="Revenue" value="$1200" />
          <Cards title="Sales" value="87" />
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">Monthly Users</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <Tooltip />
              <Bar dataKey="users" fill="#2b3d59" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
