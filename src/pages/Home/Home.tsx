import "./Home.css";
import Demo from "../../components/Demo/Demo";
import Landingpage from "../../components/landing-page/landingpage";
function Home() {
  return (
    <>
      <div className="home-page ">
        <div className="cont ">
          <div id="landing-page" className="mt-[80px] ml-[50px]  ">
            <Landingpage />
          </div>
          <div id="demo" className="mt-[120px]   ">
            <Demo />
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
