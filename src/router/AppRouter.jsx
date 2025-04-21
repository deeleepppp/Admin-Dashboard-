
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import App from '../App'; 
import Deshboard from '../components/layout/Deshboard';
import Employees from '../components/layout/Employees';
import Invoices from '../components/layout/Invoices';
import Logout from '../components/layout/Logout';
import Room from '../components/layout/Room';
import RoomTypes from '../components/layout/RoomTypes';
import Setting from '../components/layout/Setting';

const AppRouter = () => {
  return (

      <Routes>
       
        <Route path="/" element={<App />}>
          <Route index element={<Deshboard />} />
          <Route path="employees" element={<Employees />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="logout" element={<Logout />} />
          <Route path="room" element={<Room />} />
          <Route path="roomtypes" element={<RoomTypes />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>


  );
};

export default AppRouter;
