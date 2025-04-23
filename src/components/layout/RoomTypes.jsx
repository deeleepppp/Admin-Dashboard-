import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const RoomTypes = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const savedUsers = () => {
    const users = localStorage.getItem("rooms");
    return users
      ? JSON.parse(users)
      : [
          {
            type: "Single Room",
            total: 40,
            available: 10,
            color: "bg-green-500",
          },
          {
            type: "Double Room",
            total: 50,
            available: 20,
            color: "bg-red-500",
          },
          { type: "Suite", total: 30, available: 5, color: "bg-blue-500" },
        ];
  };

  const [roomTypesData, setRoomTypesData] = useState(savedUsers);
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const onSubmit = (data) => {
    if (editIndex !== null) {
      const updatedRooms = [...roomTypesData];
      updatedRooms[editIndex] = data;
      setRoomTypesData(updatedRooms);
    } else {
      setRoomTypesData((prev) => [...prev, data]);
    }

    setEditIndex(null);
    setShowForm(false);
    reset();
  };
  const deleteAlert = (id)=>{
      Swal.fire({
           title: "Do you want to delete??",
           showDenyButton: true,
           showCancelButton: true,
           confirmButtonText: "YES",
           denyButtonText: `NO`
         }).then((result) => {
           if (result.isConfirmed) {
            setRoomTypesData(roomTypesData.filter((_, index) => index !== id));
           } else if (result.isDenied) {
           }
         });
   }
  useEffect(() => {
    localStorage.setItem("rooms", JSON.stringify(roomTypesData));
  }, [roomTypesData]);

  const handleDelete = (id) => {
    deleteAlert(id)
    
  };

  const handleEdit = (index) => {
    const roomToEdit = roomTypesData[index];
    reset(roomToEdit);
    setEditIndex(index);
    setShowForm(true);
  };

  return (
    <>
      <div className="flex justify-end mb-4">
        <button
          onClick={() => {
            if (showForm) {
              reset();
              setEditIndex(null);
            }
            setShowForm(!showForm);
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          {showForm ? "Close" : "Add Room Type"}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-gray-300 p-6 rounded-lg shadow-md mb-8"
        >
          <div className="mb-4">
            <label className="block font-medium">Room Type</label>
            <input
              {...register("type", {
                required: "This is required.",
                maxLength: {
                  value: 8,
                  message: "This input exceed maxLength.",
                },
                minLength: {
                  value: 3,
                  message: "type more",
                },
              })}
              className="w-full border px-3 py-2 rounded"
            />
            {errors.type && (
              <p className="text-red-500 text-sm">{errors.type.message}</p>
            )}
          </div>
          <div className="mb-4 flex gap-4">
            <div className="flex-1">
              <label className="block font-medium">Total</label>
              <input
                type="number"
                {...register("total", {
                  required: "This is required.",
                  min: {
                    value: 10,
                    message: "minimum enter 10",
                  },
                  max: {
                    value: 80,
                    message: "maximum Value 80",
                  },
                })}
                className="w-full border px-3 py-2 rounded"
              />
              {errors.total && (
                <p className="text-red-500 text-sm">{errors.total.message}</p>
              )}
            </div>
            <div className="flex-1">
              <label className="block font-medium">Available</label>
              <input
                type="number"
                {...register("available", {
                  required: "This is required.",
                  min: {
                    value: 10,
                    message: "minimum enter 5",
                  },
                  max: {
                    value: 80,
                    message: "maximum Value 60",
                  },
                })}
                className="w-full border px-3 py-2 rounded"
              />
              {errors.available && (
                <p className="text-red-500 text-sm">
                  {errors.available.message}
                </p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label className="block font-medium">Color</label>
            <select
              {...register("color", { required: "Color is required." })}
              className="w-full border px-3 py-2 rounded"
              defaultValue=""
            >
              <option value="" disabled>
                Select a color
              </option>
              <option value="bg-blue-500">Blue</option>
              <option value="bg-green-500">Green</option>
              <option value="bg-red-500">Red</option>
              <option value="bg-yellow-500">Yellow</option>
              <option value="bg-purple-500">Purple</option>
              <option value="bg-pink-500">Pink</option>
            </select>
            {errors.color && (
              <p className="text-red-500 text-sm">{errors.color.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            {editIndex !== null ? "Update Room" : "Add Room"}
          </button>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roomTypesData.map((card, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-md text-white relative px-4 py-5 ${card.color}`}
          >
            <button
              className="absolute right-3"
              onClick={() => handleDelete(index)}
            >
              <MdDelete />
            </button>
            <button
              className="absolute right-10"
              onClick={() => handleEdit(index)}
            >
              <FaEdit />
            </button>
            <p className="text-lg font-semibold">{card.type}</p>
            <p className="mt-1">Total: {card.total}</p>
            <p>Available: {card.available}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default RoomTypes;
