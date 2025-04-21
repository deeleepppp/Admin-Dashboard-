import React, { useState } from "react";
import Swal from "sweetalert2";

const SimpleSettings = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const createAlert = ()=>{
    Swal.fire({
      title: "Setting Saved",
      icon: "success",
      draggable: true
    });
  }
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  return (
    <div className="p-6 mt-10 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Settings</h2>


      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleDarkMode}
          id="darkMode"
          className="mr-2"
        />
        <label htmlFor="darkMode" className="text-lg">
          Dark Mode
        </label>
      </div>

     
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          checked={notificationsEnabled}
          onChange={toggleNotifications}
          id="notifications"
          className="mr-2"
        />
        <label htmlFor="notifications" className="text-lg">
          Enable Notifications
        </label>
      </div>

   
      <div className="flex justify-end">
        <button
          onClick={createAlert}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default SimpleSettings;
