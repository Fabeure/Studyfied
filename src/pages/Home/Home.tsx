import "./Home.css";
import LandingPage from "../../components/LandingPage/landingPage";
import Demo from "../../components/Demo/Demo";
import Welcome from "../Welcome/Welcome";
function Home() {
  return (
    <>
      <div className="home-page ">
        <div className="cont ">
          <div id="landing-page" className="mt-[80px] ml-[50px]  ">
          <Welcome/>
            {/* <LandingPage /> */}
          </div>
          <div id="demo" className="mt-[200px]   ">
            <Demo />
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
