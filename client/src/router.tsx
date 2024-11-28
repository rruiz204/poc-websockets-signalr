import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./modules/home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;