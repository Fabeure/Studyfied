import "./NavBar.css";
import logoLeaf from "../../assets/leafLogo.png";
import LoginPopup from "../LoginPopup/LoginPopUp";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function NavBar() {
  // const [showLoginPopup, setShowLoginPopup] = useState(false);
  const { promptLogin, setPromptLogin } = useAuth();

  const handleLoginClick = () => {
    // setShowLoginPopup(true);
    setPromptLogin(true);
  };

  const handleCloseLoginPopup = () => {
    // setShowLoginPopup(false);
    setPromptLogin(false);
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
          <div className="logo-name sm:px-[10px]  md:px-[30px] xl:px-[60px] h-[3rem] flex flex-row items-center   ">
            <div className="logo ml-[10px] ">
              <img
                className="logoImage"
                src={logoLeaf}
                alt="studyfluxLOGO"
                onClick={() => navigate("/")}
              />
            </div>
            <div
              className="name font-semibold"
              onClick={() => navigate("/")}
            >
              STUDYFLUX
            </div>
          </div>
        </div>
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
      </nav>
      {promptLogin && <LoginPopup onClose={handleCloseLoginPopup} />}
      {promptLogin && <div className="blur-background"></div>}
    </>
  );
}

export default NavBar;
