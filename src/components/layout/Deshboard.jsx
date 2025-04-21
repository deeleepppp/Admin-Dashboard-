import React from 'react';
import deshboardData from '../../data/deshboard'

const Deshboard = () => {

  const cardData = [
    { label: 'Total Rooms', value: deshboardData.summary.totalRooms, icon: '🏨', color: 'bg-blue-500' },
    { label: 'Occupied Rooms', value: deshboardData.summary.occupiedRooms, icon: '🛏️', color: 'bg-red-500' },
    { label: 'Available Rooms', value:  deshboardData.summary.availableRooms, icon: '✅', color: 'bg-green-500' },
    { label: 'Check-Ins Today', value:  deshboardData.summary.todayCheckIns, icon: '🟢', color: 'bg-yellow-500' },
    { label: 'Check-Outs Today', value:  deshboardData.summary.todayCheckOuts, icon: '🔴', color: 'bg-pink-500' },
    { label: 'Staff Members', value:  deshboardData.summary.totalStaff, icon: '👨‍💼', color: 'bg-purple-500' },
    { label: 'Current Guests', value:  deshboardData.summary.currentGuests, icon: '🧳', color: 'bg-indigo-500' },
    { label: 'Monthly Revenue ($)', value:  deshboardData.summary.monthlyRevenue, icon: '💰', color: 'bg-teal-500' }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {cardData.map((card, index) => (
        <div key={index} className={`rounded-xl shadow-md text-white p-5 ${card.color} flex items-center justify-between`}>
          <div>
            <p className="text-lg font-semibold">{card.label}</p>
            <p className="text-2xl font-bold mt-1">{card.value}</p>
          </div>
          <div className="text-4xl">{card.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default Deshboard;
