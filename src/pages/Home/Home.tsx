import "./Home.css";
import LandingPage from "../../components/LandingPage/LandingPage";
import Cards from "../../components/Cards/Cards";
import AnimatedBackGround from "../../components/AnimatedBackGround/AnimatedBackGround";
function Home() {
  return (
  <>
  <div className="mt-[80px] ml-[50px] z-10 ">
    <LandingPage />
    <Cards />
    </div>
  </>
  );
}
export default Home;
