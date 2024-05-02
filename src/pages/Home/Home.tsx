import "./Home.css";
import LandingPage from "../../components/LandingPage/LandingPage";
import Demo from "../../components/Demo/Demo";
function Home() {
  return (
    <>
      <div className="home-page ">
        <div className="cont ">
          <div  id="landing-page" className="mt-[80px] ml-[50px]  ">
            <LandingPage />
          </div>
          <div  id="demo" className="mt-[200px]   ">
            <Demo />
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
