import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Home = () => {
  const [totalRooms, setTotalRooms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/rooms")
      .then((res) => res.json())
      .then((data) => {
        setTotalRooms(data);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/rooms/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount > 0) {
          const newData = totalRooms.filter((room) => room._id !== id);
          setTotalRooms(newData);

          console.log("deleted:", result);
        }
      });
  };

  console.log(totalRooms);

  const freeRoom = totalRooms.filter((room) => room.status == "free");

  return (
    <div className="">
      <div className="flex justify-between items-center mb-4 text-xl font-semibold">
        <h1>Total Room: {totalRooms.length}</h1>
        <h1>Empty Room: {freeRoom.length}</h1>
        <h1>Booked Room: {totalRooms.length - freeRoom.length}</h1>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Room No</th>
                <th>Floor</th>
                <th>Category</th>
                <th>Price</th>
                <th>Status</th>
                <th>In-Charge</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {totalRooms.map((room) => (
                <tr key={room._id} className="space-y-4">
                  <th>{room.room_no}</th>
                  <td>{room.floor}</td>
                  <td>{room.room_category}</td>
                  <td>${room.price}</td>
                  <td>{room.status}</td>
                  <td>{room.person_in_charge}</td>
                  <td>
                    <Link to={`/rooms/${room._id}`} className="btn btn-sm">
                      Details
                    </Link>
                    <Link
                      to={`/updateroom/${room._id}`}
                      className="mx-1 btn btn-sm"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(room._id)}
                      className="btn btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
