import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const BookRoomForm = () => {
  const savedRooms = () => {
    const bookedRooms = localStorage.getItem("bookedRooms");
    return bookedRooms
      ? JSON.parse(bookedRooms)
      : [
          {
            firstName: "Dilip",
            lastName: "Singh",
            totalGuest: 10,
            date: "2/2/2003",
            time: "6:55",
            color: "bg-green-500",
          },
        ];
  };
  const [totalBooking, setTotalBooking] = useState(savedRooms);
  const [showBooking, setShowBooking] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    setTotalBooking([...totalBooking, data]);
    console.log(totalBooking);
    reset();
  };
  useEffect(() => {
    localStorage.setItem("bookedRooms", JSON.stringify(totalBooking));
  }, [totalBooking]);
  return (
    <>
      <button
        onClick={() => setShowBooking((prev) => !prev)}
        className="bg-blue-500 text-white px-6 py-2 rounded-md mb-6"
      >
        {showBooking ? "Hide Bookings" : "View Bookings"}
      </button>

      {showBooking ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {totalBooking.map((card, index) => (
            <div
              key={index}
              className={`${card.color} p-4 rounded-lg shadow-md`}
            >
              <div className={`text-white`}>
                <p className="font-semibold text-lg">
                  {card.firstName} {card.lastName}
                </p>
                <p className="text-xl mt-2">
                  {parseInt(card.totalGuest)} Guests
                </p>
                <p className="text-sm  mt-1">
                  {card.date} at {card.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-bold text-center mb-6">
          Add A Room
          </h1>

          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="fName" className="block text-gray-700">
                      First Name
                    </label>
                    <input
                      {...register("firstName", {
                        required: "First name is required.",
                        maxLength: {
                          value: 8,
                          message: "First name must be less than 8 characters.",
                        },
                        minLength: {
                          value: 2,
                          message: "First name is too short.",
                        },
                      })}
                      id="fName"
                      placeholder="First Name"
                      className="w-full p-3 border border-gray-300 rounded-md"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm">
                        {errors.firstName.message}
                      </p>
                    )}
                   
                  </div>

                  <div>
                    <label htmlFor="lName" className="block text-gray-700">
                      Last Name
                    </label>
                    <input
                      {...register("lastName", {
                        required: "Last name is required.",
                        maxLength: {
                          value: 8,
                          message: "Last name must be less than 8 characters.",
                        },
                        minLength: {
                          value: 2,
                          message: "Last name is too short.",
                        },
                      })}
                      id="lName"
                      placeholder="Last Name"
                      className="w-full p-3 border border-gray-300 rounded-md"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="totalGuest" className="block text-gray-700">
                      Number of Guests
                    </label>
                    <input
                      type="number"
                      {...register("totalGuest", {
                        required: "Number of guests is required.",
                        min: {
                          value: 10,
                          message: "At least 10 guests required.",
                        },
                        max: {
                          value: 80,
                          message: "Maximum 80 guests allowed.",
                        },
                      })}
                      id="totalGuest"
                      placeholder="10"
                      className="w-full p-3 border border-gray-300 rounded-md"
                    />
                    {errors.totalGuest && (
                      <p className="text-red-500 text-sm">
                        {errors.totalGuest.message}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="block text-gray-700">
                        Date
                      </label>
                      <input
                        type="date"
                        {...register("date", {
                          required: "Date is required.",
                          validate: (value) => {
                            const selectedDate = new Date(value);
                            const today = new Date();
                            today.setHours(0, 0, 0, 0);
                            return selectedDate >= today ||   "date must be in the future."
                          },
                        })}
                        id="date"
                        className="w-full p-3 border border-gray-300 rounded-md"
                      />
                      {errors.date && (
                        <p className="text-red-500 text-sm">
                          {errors.date.message}
                        </p>
                      )}
                    </div>
                    <div className="mb-4">
                      <label className="block font-medium">Color</label>
                      <select
                        {...register("color", {
                          required: "Color is required.",
                        })}
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
                        <p className="text-red-500 text-sm">
                          {errors.color.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="time" className="block text-gray-700">
                        Time
                      </label>
                      <input
                        type="time"
                        {...register("time", {
                          required: "Time is required.",
                          validate: (value) => {
                            const selectedDate = watch("date");
                            const now = new Date();
                            const bookingDateTime = new Date(
                              `${selectedDate}T${value}`
                            );

                            if (!selectedDate) return true;
                            return (
                              bookingDateTime > now ||
                              "Time must be in the future."
                            );
                          },
                        })}
                        id="time"
                        className="w-full p-3 border border-gray-300 rounded-md"
                      />
                      {errors.time && (
                        <p className="text-red-500 text-sm">
                          {errors.time.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-blue-500 text-white py-3 rounded-md mt-4"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BookRoomForm;
