import "./NavBar.css";
import useAuth from "../../hooks/useAuth";
import LoginPopup from "../../pages/Login/LoginPopUp";
import { useState } from "react";
import logoLeaf from "../../assets/leafLogo.png";

function NavBar() {


  const { user, setUser } = useAuth();
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const handleLoginClick = () => {
    setShowLoginPopup(true);
  };

  const handleCloseLoginPopup = () => {
    setShowLoginPopup(false);
  };







  return (
    <>
      <nav className="navbar flex flex-end w-full">
        <div className="left-container flex items-center w-full mr-[20px] md:ml-[40px]  xl:ml-[60px]  h-[4rem]">
          <div className="logo-name sm:px-[10px]  md:px-[30px] xl:px-[60px] h-[3rem] flex flex-row items-center   ">
            <div className="logo ml-[10px] ">
              <img className="logoImage" src={logoLeaf} alt="studyfluxLOGO" />
            </div>
            <div className="name font-semibold  ">STUDYFLUX</div>
          </div>
        </div>
        <div className="left-container flex items-center row-reverse mr-[20px] md:mr-[100px] xl:mr-[150px] ">
          <button className="button  flex  justify-center items-center h-[29px] w-[100px] md:w-[110px] lg:w-[120px]  xl:w-[130px] mr-[10px] text-[10px] md:text-[12px]  text-uppercase ">
            sign in
          </button>
          <button className="button  flex  justify-center items-center h-[29px] w-[100px] md:w-[110px] lg:w-[120px]  xl:w-[130px] mr-[10px] text-[10px] md:text-[12px]  text-uppercase ">
            get a demo
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
