import React from "react";
import deshboardData from "../../data/deshboard";

const NotificationMenu = () => {
  const { notifications } = deshboardData;

  return (
    <div className="absolute top-18 right-1 max-w-md w-full mx-auto p-4 bg-white rounded-xl shadow">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-semibold">Notifications</h2>
      </div>
      <ul className="space-y-3">
        {notifications.map((note, i) => (
          <li
            key={i}
            className={`p-3 rounded-lg text-sm ${note.color}`}
          >
            <p className="font-medium">{note.message}</p>
            <p className="text-xs mt-1 text-gray-500">
              {new Date(note.time).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationMenu;
