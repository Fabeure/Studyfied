import "./landingpage.css";
import sparkles from "../../assets/sparkles.png";

// const landingpage:() => {
   function Landingpage() {
  return (
    
      <div className="landing-page flex">
        <div className="right-container tracking-[0.1rem] flew flex-col  ">
          <div className="sparkles w-[60px] md:w-[80px] ">
            <img src={sparkles} alt="sparkles" />
          </div>
          <div className="text ml-[40px] ">
            <div className="slogan mb-[20px] ">
              <div className="slogan1 text-white text-left font-bold md:text-[40px] text-[30px] ">
                UNLOCK YOUR POTENTIAL .
              </div>
              <div className="slogan2 mt-[-15px] text-white font-light italic md:text-[40px] text-[30px] text-left">
                StudyFlux - Learn smarter not harder
              </div>
            </div>
            <div className="text-white problematic font-light text-left mt-[50px] mb-[20px] ">
              Textbooks got you feeling like you're lost in a jungle?
            </div>

            <div className=" text-white overview font-light text-left">
              StudyFlux cuts through the foliage, summarizing key points,
              generating quizzes that blossom with knowledge, and offering an AI
              companion to guide you to academic enlightenment!
            </div>
            <div className="flex flex-start"></div>
            <button className=" tryBtn italic rounded-sm flex justify-center font-bold ml-[60px] mt-[90px] w-[150px] md:w-[200px]">
              Get started today!
            </button>
          </div>
        </div>
        <div className="left-container flex justify-center">
          <div className="blob"></div>
        </div>
      </div>
    
  );
};
export default Landingpage;
