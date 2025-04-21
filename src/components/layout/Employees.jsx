
import deshboardData from "../../data/deshboard";  
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { useForm } from "react-hook-form";
const Employees = () => { 
  const { topStaff } = deshboardData;
  const savedUsers = () => { 
    const employees = localStorage.getItem("employees");
    return employees
      ? JSON.parse(employees)
      : topStaff
  };
  const [showForm, setShowForm] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [currentPage,setCurrentPage] = useState(1)
  const [employeeData,setEmployeeData] = useState(savedUsers)
  const itemPerPage = 3
  const totalPage = Math.ceil(employeeData.length/itemPerPage)
  const startIndex = (currentPage-1)*itemPerPage
  const currentData = employeeData.slice(startIndex,startIndex+itemPerPage)
  const onSubmit = (data) => {
    setEmployeeData([...employeeData,data])
    reset();
    setShowForm(false);
  };
useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employeeData));
  }, [employeeData]);
const handleDelete = (id)=>{
 setEmployeeData(employeeData.filter((_,index)=>{
    return index != id
  }))
}
const handlePageChange = (newPage) => {
  setCurrentPage(newPage);
};
  return (
    <div className="container mx-auto p-6">
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-blue-500 text-white px-6 py-2 rounded-md mb-6"
      >
        {showForm ? "Close Form" : "Add Employees"}
      </button>

      {showForm ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-gray-300 p-6 rounded-lg shadow-md mb-8"
        >
          <div className="mb-4">
            <label className="block font-medium">Employee Name</label>
            <input
              {...register("name", {
                required: "This is required.",
                maxLength: {
                  value: 15,
                  message: "This input exceeds maxLength.",
                },
                minLength: {
                  value: 2,
                  message: "Type more",
                },
              })}
              className="w-full border px-3 py-2 rounded"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block font-medium">Employee Email</label>
            <input
            type="email"
              {...register("email", {
                required: "This is required.",
                maxLength: {
                  value: 50,
                  message: "This input exceeds maxLength.",
                },
                minLength: {
                  value: 2,
                  message: "Type more",
                },
              })}
              className="w-full border px-3 py-2 rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4 flex gap-4">
            <div className="flex-1">
              <label className="block font-medium">Rating</label>
              <input
                type="number"
                {...register("rating", {
                  required: "This is required.",
                  min: {
                    value: 0,
                    message: "Minimum value is 0",
                  },
                  max: {
                    value: 5,
                    message: "Maximum value is 5",
                  },
                })}
                className="w-full border px-3 py-2 rounded"
              />
              {errors.rating && (
                <p className="text-red-500 text-sm">{errors.rating.message}</p>
              )}
            </div>
            <div className="flex-1">
              <label className="block font-medium">Experience</label>
              <input
                type="number"
                {...register("experience", {
                  required: "This is required.",
                  min: {
                    value: 0,
                    message: "Minimum value is 0",
                  },
                  max: {
                    value: 10,
                    message: "Maximum value is 10",
                  },
                })}
                className="w-full border px-3 py-2 rounded"
              />
              {errors.experience && (
                <p className="text-red-500 text-sm">{errors.experience.message}</p>
              )}
            </div>
            <div className="flex-1">
              <label className="block font-medium">shiftsThisWeek</label>
              <input
                type="number"
                {...register("shiftsThisWeek", {
                  required: "This is required.",
                  min: {
                    value: 5,
                    message: "Minimum value is 5",
                  },
                  max: {
                    value: 60,
                    message: "Maximum value is 60",
                  },
                })}
                className="w-full border px-3 py-2 rounded"
              />
              {errors.shiftsThisWeek && (
                <p className="text-red-500 text-sm">
                  {errors.shiftsThisWeek.message}
                </p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label className="block font-medium">role</label>
            <input
              {...register("role", { required: "role is required." })}
              className="w-full border px-3 py-2 rounded"
              placeholder="role"
            />
            {errors.role && (
              <p className="text-red-500 text-sm">{errors.role.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Add Room
          </button>
        </form>
      ) : (
        <>
          <h1 className="text-3xl font-semibold text-center mb-8">Top Staff</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentData.map((staff, index) => (
              <div key={index} className="relative bg-white p-5 rounded-lg shadow-md">
                <button className="absolute right-5 top-0" onClick={()=>{
                  handleDelete(index)
                }}><MdDelete/></button>
                <div className="flex flex-col items-center">
                  <h2 className="text-xl font-bold">{staff.name}</h2>
                  <p className="text-lg text-gray-700">{staff.role}</p>
                  <p className="text-sm text-gray-500">{staff.email}</p>
                  <p className="mt-2 text-sm text-gray-700">
                    Shifts This Week: {staff.shiftsThisWeek}
                  </p>
                  <p className="mt-2 text-sm text-gray-700">
                   total experience: {staff.experience}
                  </p>
                  <p className="mt-2 text-sm text-gray-700">
                    Rating: {staff.rating}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8 gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
            >
              Prev
            </button>
            {Array.from({ length: totalPage }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-4 py-2 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
              >
                {i + 1}
              </button>
            ))}
            <button
              disabled={currentPage === totalPage}
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Employees;


