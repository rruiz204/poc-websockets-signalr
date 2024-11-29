import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./modules/home";
import Testing from "./modules/testing";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/testing" element={<Testing></Testing>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;