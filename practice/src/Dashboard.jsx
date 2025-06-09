import React from 'react'
import arrow from '../src/images/right2.svg'
import {BarChart,Bar,XAxis,YAxis,Tooltip, ResponsiveContainer } from 'recharts'

const menuItem = [
  'Dashboard', 'Setting', 'Notification', 'Tasks', 'Report', 'Charts', 'Profile', 'Logout'
]

const data = [
  {name:'Jan', users: 20},
  {name:'Feb', users: 10},
  {name:'Mar', users: 30},
  {name:'April', users: 40},
  {name:'May', users: 50},
]

const Cards = ({title,value}) => {
  return(
    <div className='bg-white h-32 rounded-xl text-center flex flex-col items-center justify-center text-xl font-bold ml-5 mr-5 cursor-pointer hover:bg-gray-500 hover:text-white transition-all duration-500'>
      <h2>{title}</h2>
      <p>{value}</p>
    </div>
  )
}


const SideBar = () =>{
  return(
    <div className='bg-gray-800 w-80 p-12 h-screen relative'>
      <h1 className='text-3xl text-white text-center font-bold'>Siderbar</h1>
      <img src={arrow} width={50} className='absolute -right-4'/>
      <div>
        <ul className='text-xl text-white space-y-10 mt-10 ml-10'>
          {menuItem.map((item) => (
            <li key={item} className='cursor-pointer hover:text-gray-400 hover:translate-x-2 transition-all duration-500'>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const Dashboard = () => {
  return (
    <div className='flex'>
      <SideBar/>
      <div className='flex-1 bg-gray-300' >
        <h1 className='text-3xl text-center p-5 font-bold'>Dashboard</h1>
        <div className='grid grid-cols-3 gap-4'>
        <Cards title="Users" value="$67"/>
        <Cards title="Users" value="$67"/>
        <Cards title="Users" value="$67"/>
        </div>
        <div className='bg-white p-5 mt-5 rounded-xl'>
          <h1 className='text-3xl text-center font-bold'>Monthly Users</h1>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis dataKey="name"/>
            <Tooltip/>
            <Bar dataKey="users" fill='#2b3d59' radius={[4,4,0,0]}/>
          </BarChart>
        </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Dashboard


// import React, { useState } from 'react';
// import arrow from '../src/images/right2.svg';
// import dashboard from '../src/images/dashboard.png';
// import user from '../src/images/user.png';
// import setting from '../src/images/setting.png';
// import notification from '../src/images/msg.png';
// import task from '../src/images/task.png';
// import report from '../src/images/report.png';
// import profile from '../src/images/profile.png';
// import logout from '../src/images/logout.png';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: 'Jan', users: 30 },
//   { name: 'Feb', users: 45 },
//   { name: 'Mar', users: 60 },
//   { name: 'Apr', users: 75 },
// ];

// const Dashboard = () => {
//   const [isOpen, setIsOpen] = useState(true);
  

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const SideBar = () => {
//     return (
//       <div className={`Sidebar bg-gray-800 p-4 text-white cursor-pointer transition-all duration-500 ease-in-out ${isOpen ? 'w-64' : 'w-20'}`}>
//         <div className="flex gap-20 relative">
//           <h1 className={`text-4xl text-center font-bold mt-8 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
//             SideBar
//           </h1>
//           <img
//             src={arrow}
//             onClick={toggleSidebar}
//             className={`color-white absolute -right-8 mt-20 w-[50px] shadow-2xl transition-transform duration-500 ease-in-out ${isOpen ? 'rotate-0' : 'rotate-180'}`}
//             alt="Toggle Sidebar"
//           />
//         </div>
//         <ul>
//           <div className="flex grid grid-cols-1">
//             <li className={`text-2xl mt-20 hover:text-gray-300 transform hover:translate-x-2 transition-all duration-300 flex ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
//               <img src={dashboard} width={35} className="mr-2 flex-shrink-0" /> Dashboard
//             </li>

//             <li className={`text-2xl mt-5 hover:text-gray-300 transform hover:translate-x-2 transition-all duration-300 flex ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
//               <img src={user} width={35} className="mr-2 flex-shrink-0" /> Users
//             </li>
//             <li className={`text-2xl mt-5 hover:text-gray-300 transform hover:translate-x-2 transition-all duration-300 flex ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
//               <img src={setting} width={35} className="mr-2 flex-shrink-0" alt="" /> Settings
//             </li>
//             <li className={`text-2xl mt-5 hover:text-gray-300 transform hover:translate-x-2 transition-all duration-300 flex ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
//               <img src={notification} width={35} className="mr-2 flex-shrink-0" alt="" /> Notifications
//             </li>
//             <li className={`text-2xl mt-5 hover:text-gray-300 transform hover:translate-x-2 transition-all duration-300 flex ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
//               <img src={task} width={35} className="mr-2 flex-shrink-0" alt="" /> Tasks
//             </li>
//             <li className={`text-2xl mt-5 hover:text-gray-300 transform hover:translate-x-2 transition-all duration-300 flex ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
//               <img src={report} width={35} className="mr-2 flex-shrink-0" alt="" /> Reports
//             </li>
//             <li className={`text-2xl mt-5 hover:text-gray-300 transform hover:translate-x-2 transition-all duration-300 flex ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
//               <img src={profile} width={35} className="mr-2 flex-shrink-0" alt="" /> Profile
//             </li>
//             <li className={`text-2xl mt-5 hover:text-gray-300 transform hover:translate-x-2 transition-all duration-300 flex ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
//               <img src={logout} width={35} className="mr-2 flex-shrink-0" alt="" /> Logout
//             </li>
//           </div>
//         </ul>
//       </div>
//     );
//   };

//   const Cards = ({ title, value }) => {
//     return (
//       <div className="bg-white shadow-md rounded-2xl p-4 w-full sm:w-64 hover:bg-gray-300">
//         <h3 className="text-lg font-semibold mb-2">{title}</h3>
//         <p className="text-2xl font-bold">{value}</p>
//       </div>
//     );
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-400">
//       <SideBar />

//       <div className="bg-gray-200 p-6 flex-1">
//         <h1 className="text-center text-4xl font-bold my-6">Dashboard</h1>
//         <div className="cards grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
//           <Cards title="Users" value="150" />
//           <Cards title="Revenue" value="$1,200" />
//           <Cards title="Sales" value="87" />
//         </div>

//         <div className="bg-white p-4 rounded-2xl shadow-md">
//           <h2 className="text-2xl font-bold text-center">Monthly Users</h2>
//           <ResponsiveContainer width="100%" height={350}>
//             <BarChart data={data}>
//               <XAxis dataKey="name" />
//               <Tooltip />
//               <Bar dataKey="users" fill="#2b3d59" radius={[4, 4, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


