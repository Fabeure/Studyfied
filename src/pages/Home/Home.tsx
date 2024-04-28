import "./Home.css";
import Cards from "../../components/Cards/Cards";
import LandingPage from "../../components/LandingPage/LandingPage";

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
