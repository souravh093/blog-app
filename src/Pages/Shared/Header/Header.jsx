import React from "react";
import Container from "../../../components/Container/Container";
import Logo from "../../../components/Logo/Logo";
import Menu from "../../../components/Menu/Menu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileDropdown from "../../../components/ProfileDropdown/ProfileDropdown";

const Header = () => {
  const { isLoading, email } = useSelector((state) => state.userSlice);

  console.log(email);
  return (
    <div className="py-3 bg-purple-50">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div>
              <Logo />
            </div>
            <div>
              <Menu />
            </div>
          </div>
          <div className="flex items-center space-x-5 ">
            {email && !isLoading && (
              <Link to={"/writeBlog"} className="text-primary font-semibold">
                Post a Blog
              </Link>
            )}
            {email && !isLoading ? (
              <div>
                <ProfileDropdown />
              </div>
            ) : (
              <Link to={"/login"}>Sign in</Link>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
