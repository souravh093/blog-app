import { signOut } from "firebase/auth";
import React, { useEffect, useRef, useState } from "react";
import { logout } from "../../redux/features/user/userSlice";
import { auth } from "../../firebase/firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const ProfileDropdown = () => {
  const { name } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogout = () => {
    signOut(auth);
    dispatch(logout());
    navigate('/')
  };

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div onClick={toggleDropdown}>
        <img
          src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
          alt="user demo image"
          className="w-10 h-10 hover:ring-2 hover:ring-primary rounded-full"
        />
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700">
              {name}
            </a>
            <Link
              to={"/dashboard"}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Dashboard
            </Link>
            <div
              onClick={handleLogout}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              Sign out
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
