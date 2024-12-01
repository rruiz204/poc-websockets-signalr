import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./modules/home";
import Testing from "./modules/testing";
import Interval from "./modules/interval";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/testing" element={<Testing></Testing>}></Route>
        <Route path="/interval" element={<Interval></Interval>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;