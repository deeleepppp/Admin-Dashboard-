import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useLocation } from "react-router-dom";
import Register from "./Register";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const { login, user, isLoading, error,register } = useAuth();

  const savedLoginData = () => {
    const userData = localStorage.getItem("login");
    return userData ? JSON.parse(userData) : null;
  };
  const locationl = useLocation()
  const [loginUserData, setLoginUserData] = useState(savedLoginData);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(form);
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem("login", JSON.stringify(user));
      setLoginUserData(user);
    }
  }, [user]);
  if(locationl.pathname==='/login'){
    return    <>
    {user?'': <Link to='/register'>
      <button className="w-30 absolute top-10 right-10 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Register
      </button>
    </Link>}
   
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
    <div className="w-full max-w-sm bg-white p-6 rounded shadow-md">
  
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

      {loginUserData ? (
        <div className="text-center">
          <h3 className="text-lg">Welcome, {loginUserData.username}!</h3>
          <p>This is your dashboard 🚀</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full border px-3 py-2 rounded"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border px-3 py-2 rounded"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      )}
    </div>
  </div>
  </>
  
  }
  else if(locationl.pathname==='/register'){

   return <Register/>
  
  }

}

export default Login;
