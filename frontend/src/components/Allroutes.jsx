import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/home/Home"
import { Pagenot } from "../pages/pagenotfound/Pagenot";
import { Login } from "../pages/Login/Login";
import { Users } from "../pages/users/Users";




export const Allroutes=()=>{
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<Pagenot />} />
      </Routes>
    );
}