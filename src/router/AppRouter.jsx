
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
import NotFound from '../components/layout/PageNotFound';
import Login from '../components/layout/Login';
import Register from '../components/layout/Register';
import User from '../components/layout/User';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
  return (

      <Routes>
        <Route path="/" element={<App />}>

          <Route index element={
           <PrivateRoute> <Deshboard /></PrivateRoute>
            } />
          <Route path="employees" element={ <PrivateRoute> <Employees /></PrivateRoute>} />
          <Route path="invoices" element={ <PrivateRoute> <Invoices /></PrivateRoute>} />
          <Route path="logout" element={ <PrivateRoute> <Logout /> </PrivateRoute> } />
          <Route path="room" element={ <PrivateRoute> <Room /> </PrivateRoute> } />
          <Route path="roomtypes" element={ <PrivateRoute> <RoomTypes /> </PrivateRoute> } />
          <Route path="setting" element={ <PrivateRoute> <Setting /> </PrivateRoute> } />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={ <PrivateRoute> <User /> </PrivateRoute> } />
        </Route>
      </Routes>


  );
};

export default AppRouter;
