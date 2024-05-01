import "./Home.css";
import LandingPage from "../../components/LandingPage/LandingPage";
import Demo from "../../components/Demo/Demo";

function Home() {
  return (
    <>
      <div className="mt-[80px] ml-[50px] z-10 ">
        <LandingPage />
      </div>
      <div className="mt-[200px]  z-10 ">
        <Demo />
      </div>
    </>
  );
}
export default Home;
