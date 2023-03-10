import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "../Pages/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route />
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
