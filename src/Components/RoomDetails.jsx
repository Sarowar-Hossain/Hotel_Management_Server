import React from "react";
import { useLoaderData } from "react-router-dom";

const RoomDetails = () => {
  const data = useLoaderData();
  console.log(data);

  const {
    floor,
    person_in_charge,
    phone_number,
    price,
    room_category,
    room_no,
    status,
    _id,
  } = data;

  return (
    <div className="text-2xl font-semibold text-start">
      <h1>Room No: {room_no}</h1>
      <h1>Floor: {floor}</h1>
      <h1>Room Category: {room_category}</h1>
      <h1>Price: {price}</h1>
      <h1>Room Status: {status}</h1>
      <h1>Room Tel No: {phone_number}</h1>
      <h1>Room In-Charge: {person_in_charge}</h1>
    </div>
  );
};

export default RoomDetails;
