import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { IoLogOut } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import NotificationMenu from "./layout/Notification";

const Navbar = ({dark}) => {
  const [isMenuOn, setIsMenuOn] = useState(false);
  const [isNotificationsMenuOn,setIsNotificationMenuOn] = useState(false)
  
  return (
    <nav className={`bg-gray-900 text-white shadow px-6 py-4 relative z-10`}>
     {isNotificationsMenuOn&& <NotificationMenu/>}
      <div className="max-w-7xl mx-auto flex items-center justify-between">
     <div></div>
        <div className={`flex text-white items-center space-x-6  text-2xl`}>
          <IoIosNotifications onClick={()=>{
                 setIsNotificationMenuOn((prev)=>!prev)
               
          }} className="cursor-pointer hover:text-yellow-400 transition duration-200" />
          
       
          <div className="relative">
            <button
              onClick={() => {
                setIsMenuOn((prev) => !prev)
              }}
              className="focus:outline-none hover:text-yellow-400 transition duration-200"
            >
              <CgProfile />
            </button>

       
            {isMenuOn && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 text-gray-700">
                <Link
                  onClick={()=>{
                    setIsMenuOn(false)
                  }}
                  to="/logout"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition"
                >
                  <IoLogOut /> Logout
                </Link>
                <Link

                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition"
                >
                  <CiUser /> User Profile
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
