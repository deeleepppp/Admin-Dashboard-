import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';


const Register = () => {
  const [form, setForm] = useState({ username: '', password: '',email:'',accessToken:'',
    id:null });
  const { register,login, isLoading, error, user } = useAuth();
    const savedRegisterData = () => {
      const userData = localStorage.getItem("register");
      return userData ? JSON.parse(userData) : null;
    };
  
    const [registerUserData, setRegisterUserData] = useState(savedRegisterData);
    
    useEffect(() => {
      if (user) {
        localStorage.setItem("register", JSON.stringify(user));
        setRegisterUserData(user);
      }
    }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    register({...form,accessToken: Math.random().toString() });
    console.log(form);
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      {user?'': <Link to='/login'>
      <button className="w-30 absolute top-10 right-10 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
     login
      </button>
    </Link>}
      <div className="w-full max-w-sm bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        {registerUserData ? (
          <div className="text-center">
            <h3 className="text-lg">Welcome, {registerUserData.username}!</h3>
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
              type="email"
              placeholder="email"
              className="w-full border px-3 py-2 rounded"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
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
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
            >
              {isLoading ? "Registering..." : "Register"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
