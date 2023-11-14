import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users";
import UpdateUser from "./UpdateUser";
import Create from "./Create";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/update/:id" element={<UpdateUser />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
