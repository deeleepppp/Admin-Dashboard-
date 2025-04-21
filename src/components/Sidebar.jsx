import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, BedDouble, Bed, Users, FileText, Settings, LogOut } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', to: '/', icon: <LayoutDashboard className="w-5 h-5" /> },
  { name: 'Room Types', to: '/roomtypes', icon: <BedDouble className="w-5 h-5" /> },
  { name: 'Room', to: '/room', icon: <Bed className="w-5 h-5" /> },
  { name: 'Employees', to: '/employees', icon: <Users className="w-5 h-5" /> },
  { name: 'Invoices', to: '/invoices', icon: <FileText className="w-5 h-5" /> },
  { name: 'Setting', to: '/setting', icon: <Settings className="w-5 h-5" /> },
  { name: 'Logout', to: '/logout', icon: <LogOut className="w-5 h-5" /> },
];

const Sidebar = () => {
  return (
    <div className={`sidebar-hidden-2 h-screen w-64 bg-gray-900 text-white flex flex-col px-6 py-10 space-y-8 shadow-md`}>
      <h2 className="sidebar-hidden text-2xl font-bold text-center mb-6">Admin Panel</h2>
      <nav className="flex flex-col space-y-4">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="flex items-center icons space-x-3 hover:bg-gray-800 p-2 rounded-md transition-colors duration-200"
          >
            {item.icon}
            <span className='sidebar-hidden'>{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
