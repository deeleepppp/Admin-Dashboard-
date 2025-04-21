import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="flex h-screen bg-white text-gray-800">
 
      <Sidebar />

      
      <div className="flex flex-col flex-1 min-w-0">
        
        <Navbar />

      
        <main className="flex-1 overflow-auto p-6">
          <div className="bg-white  p-6 h-full w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
