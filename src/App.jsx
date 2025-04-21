import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';

const App = () => {
 const [dark,setDark] = useState(false)
  return (
    <div className={`flex h-screen ${dark?'bg-black text-white':'bg-white text-gray-800'} `}>
      <button className='absolute top-1 left-2' onClick={()=>{
        setDark((prev)=>!prev)
      }}>hellow</button>
      <div className={`${dark?'bg-black text-white':'bg-white text-gray-800'} `}>
         <Sidebar dark={dark} />
      </div>
     

     <div className="flex flex-col flex-1 min-w-0">
   
       <Navbar dark={dark} />

        <main className="flex-1 overflow-auto ">
          <div className={`relative ${dark?'bg-gray-800 text-white':'bg-white text-gray-800'}  p-6 h-full w-full`} >
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
