import React from "react";
import { IoMdSunny } from "react-icons/io";
import { IoIosMoon } from "react-icons/io";
import { changeTheme } from "../redux/slices/counterSlice";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = ({ is_dark_theme }) => {
  const dispatch = useDispatch();
  return (
    <div className="d-flex justify-content-between my-3 p-4">
      <h1>Redux Toolkit</h1>

      <nav className="d-flex fw-bold fs-3 gap-2 align-items-center">
        <NavLink to={'/'}>CRUD</NavLink>
        <NavLink to={'/sayaç'}>SAYAÇ</NavLink>
      </nav>
      <Button
        onClick={() => dispatch(changeTheme())}
        className="fw-bold fs-1 px-2 rounded-circle"
        variant="secondary"
      >
        {is_dark_theme ? <IoMdSunny className="text-warning" /> : <IoIosMoon />}
      </Button>
    </div>
  );
};

export default Header;
