import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home.jsx";
import EmptyRoom from "./Components/EmptyRoom.jsx";
import BookedRoom from "./Components/BookedRoom.jsx";
import UpdateRoomDetails from "./Components/UpdateRoomDetails.jsx";
import RoomDetails from "./Components/roomDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/updateroom/:id",
        element: <UpdateRoomDetails></UpdateRoomDetails>,
      },
      {
        path: "/rooms/:id",
        element: <RoomDetails></RoomDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/rooms/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
