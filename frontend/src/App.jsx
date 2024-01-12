/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import Table from "./components/Table";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/Table" element={<Table />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
