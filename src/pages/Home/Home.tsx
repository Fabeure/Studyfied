import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cards from "../../components/Cards/Cards";
import MainBanner from "../../components/MainBanner/MainBanner";
import InitialScreen from "../../components/InitialScreen/InitialScreen";

function Home() {


  return (  
    <div className="page-content ">
      <InitialScreen />
      <ToastContainer />
      <MainBanner />
      <Cards/>
    </div>
  );
}
export default Home;
