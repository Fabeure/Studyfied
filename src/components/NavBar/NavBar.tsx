import "./NavBar.css";
import { useEffect } from "react";
import profile from "../../assets/navbar/profile.png";
import logout from "../../assets/navbar/logout.png";
import logoLeaf from "../../assets/leafLogo.png";
import LoginPopup from "../LoginPopup/LoginPopUp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const handleLoginClick = () => {
    setShowLoginPopup(true);
  };

  const handleCloseLoginPopup = () => {
    setShowLoginPopup(false);
  };

  const navigate = useNavigate();

  const scrollDemo = () => {
    const targetElement = document.getElementById("demo");

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <nav className="navbar flex flex-end w-full">
        <div className="left-container flex items-center w-full mr-[20px] md:ml-[40px]  xl:ml-[60px]  h-[4rem]">
          <div className="logo-name cursor-pointer sm:px-[10px]  md:px-[30px] xl:px-[60px] h-[3rem] flex flex-row items-center   ">
            <div className="logo  ml-[10px] ">
              <img
                className="logoImage"
                src={logoLeaf}
                alt="studyfluxLOGO"
                onClick={() => navigate("/Studyfied")}
              />
            </div>
            <div className="name " onClick={() => navigate("/Studyfied")}>
              STUDYFLUX
            </div>
          </div>
        </div>
        {0 ? ( //unauthorized user
          <div className="left-container flex items-center row-reverse mr-[20px] md:mr-[100px] xl:mr-[150px] ">
            <button
              className="button  flex  justify-center items-center h-[29px] w-[100px] md:w-[110px] lg:w-[120px]  xl:w-[130px] mr-[10px] text-[10px] md:text-[12px]  text-uppercase"
              onClick={handleLoginClick}
            >
              sign in
            </button>
            <button
              onClick={scrollDemo}
              className="button  flex  justify-center items-center h-[29px] w-[100px] md:w-[110px] lg:w-[120px]  xl:w-[130px] mr-[10px] text-[10px] md:text-[12px]  text-uppercase"
            >
              get a demo
            </button>
          </div>
        ) : (
          //authorized user
          <div className="left-container flex items-center row-reverse mr-[20px] md:mr-[50px] xl:mr-[60px] ">
            <button
              className="button-auth  flex  justify-center items-center h-[29px] w-[110px] md:w-[120px] lg:w-[140px]  xl:w-[150px] mr-[10px] text-[10px] md:text-[12px] lg:text-[17px] "
              onClick={handleLoginClick}
            >
              username
              <span className="w-[50%]">
                <img className="profile-icon" src={profile} alt="logout" />
              </span>{" "}
            </button>
            <button
              onClick={scrollDemo}
              className="button-auth  flex  justify-center items-center h-[29px] w-[110px] md:w-[120px] lg:w-[140px]  xl:w-[150px] mr-[10px] text-[10px] md:text-[12px] lg:text-[17px]"
            >
              logout
              <span>
                <img className="logout-icon" src={logout} alt="logout" />
              </span>
            </button>
          </div>
        )}
      </nav>
      {showLoginPopup && <LoginPopup onClose={handleCloseLoginPopup} />}
      {showLoginPopup && <div className="blur-background"></div>}
    </>
  );
}

export default NavBar;
