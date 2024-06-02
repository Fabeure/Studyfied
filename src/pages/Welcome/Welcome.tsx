import "./Welcome.css";
import WelcomeCard from "../../components/WelcomeCards/WelcomeCard";
import useAuth from "../../hooks/useAuth";

function Welcome() {

  const { user } = useAuth();

  return (
    <>
      <div className="">
        <div className="welcome-text font-light lg:text-[18px] text-[15px] text-left  mt-[30px] lg:ml-[10%] ml-[5%]   ">
          <span className="font-semibold"> Welcome back {user.name}! </span>
          <br />
          We're thrilled to have you here again. Let's make today another step
          towards your goals.
        </div>
        <div className=" lg:mr-[15%] lg:ml-[15%] mr-[10%] ml-[10%] mt-[20px] flex flex-wrap justify-cent
        er cards-container">
          <WelcomeCard />
        </div>
      </div>
    </>
  );
}
export default Welcome;
