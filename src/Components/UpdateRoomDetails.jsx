import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateRoomDetails = () => {
  const { id } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);

  const handleUpdate = (event) => {
    event.preventDefault();
    const roomNumber = event.target.roomNumber.value;
    const pictureUrl = event.target.pictureUrl.value;
    const floor = event.target.floor.value;
    const status = event.target.status.value;
    const inCharge = event.target.incharge.value;
    const price = event.target.price.value;
    const category = event.target.category.value;
    const roomTelNo = event.target.roomTelNo.value;

    const updateInfo = {
      room_no: roomNumber,
      pictureUrl,
      floor,
      status,
      person_in_charge: inCharge,
      price,
      room_category: category,
      phone_number: roomTelNo,
    };

    console.log(updateInfo);

    fetch(`http://localhost:5000/updateroom/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Updated: ", data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch(`http://localhost:5000/rooms/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRoomDetails(data);
      })
      .catch((error) => console.log(error.message));
  }, [id]);

  if (!roomDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center w-[900px] h-full">
      <form onSubmit={handleUpdate} className="bg-white rounded space-y-12 w-full">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="roomNumber" className="block text-gray-700 text-sm font-bold mb-2">
              Room Number
            </label>
            <input
              type="number"
              required
              id="roomNumber"
              name="roomNumber"
              defaultValue={roomDetails.room_no}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label htmlFor="pictureUrl" className="block text-gray-700 text-sm font-bold mb-2">
              Picture URL
            </label>
            <input
              type="text"
              id="pictureUrl"
              name="pictureUrl"
              defaultValue={roomDetails.pictureUrl}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label htmlFor="floor" className="block text-gray-700 text-sm font-bold mb-2">
              Floor
            </label>
            <input
              required
              type="text"
              id="floor"
              name="floor"
              defaultValue={roomDetails.floor}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2">
              Current Status
            </label>
            <input
              required
              type="text"
              id="status"
              name="status"
              defaultValue={roomDetails.status}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label htmlFor="incharge" className="block text-gray-700 text-sm font-bold mb-2">
              In-Charge
            </label>
            <input
              defaultValue={roomDetails.person_in_charge}
              required
              type="text"
              id="incharge"
              name="incharge"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">
              Price
            </label>
            <input
              defaultValue={roomDetails.price}
              required
              type="text"
              id="price"
              name="price"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
              Room Category
            </label>
            <input
              required
              type="text"
              id="category"
              name="category"
              defaultValue={roomDetails.room_category}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label htmlFor="roomTelNo" className="block text-gray-700 text-sm font-bold mb-2">
              Room Tel No
            </label>
            <input
              defaultValue={roomDetails.phone_number}
              required
              type="text"
              id="roomTelNo"
              name="roomTelNo"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <button
          type="submit"
          className="hover:bg-cyan-600 mt-3 font-bold bg-cyan-500 text-xl text-white w-full py-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateRoomDetails;