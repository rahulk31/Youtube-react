import "./header.css";
import { IoMenu, IoSearch } from "react-icons/io5";
import { BiSolidMicrophone } from "react-icons/bi";
import { FaRegBell, FaUserCircle } from "react-icons/fa";
import logo from "../../../public/yt-logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="left-container_header">
        <div className="side-menu">
          <IoMenu className="react-icon" />
        </div>
        <div className="logo-container">
          <img src={logo} alt="youtube-logo" className="yt-logo" />
        </div>
      </div>

      <div className="middle-container_header">
        <div className="search-container">
          <input type="text" name="search" id="search" placeholder="Search" />
          <button>
            <IoSearch className="react-icon" />
          </button>
        </div>
        <div className="audio-search">
          <BiSolidMicrophone className="react-icon" />
        </div>
      </div>

      <div className="right-container_header">
        <div className="notification">
          <FaRegBell className="react-icon" />
        </div>

        <div className="user-account">
          <FaUserCircle className="react-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
