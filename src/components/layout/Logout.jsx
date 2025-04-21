import React from 'react';
import Swal from 'sweetalert2';

const Logout = () => {
  const createLogOutAlert = () => {
    Swal.fire({
      title: "Do you want to logOut??",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "YES",
      denyButtonText: `NO`
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("LogOut", "", "success");
      } else if (result.isDenied) {
      }
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <button
        onClick={createLogOutAlert}
        className="bg-blue-500 text-white px-6 py-2 rounded-md mb-6 
          sm:px-4 sm:py-1 sm:text-sm md:px-6 md:py-2 md:text-base 
          lg:px-8 lg:py-3 lg:text-lg xl:px-10 xl:py-4 xl:text-xl"
      >
        LOGOUT
      </button>
    </div>
  );
}

export default Logout;
