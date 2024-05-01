import "./feature.css";
import { HomepageData } from "../../constants/homepageData";
import { HomepageDataModel } from "../../models/homepageDataModel";
function Feature(props: { id: number }) {
  const { id } = props; // Destructure the id prop from props object

  return (
    <>
      <div className="landing-page flex">
        <div className="right-container tracking-[0.1rem] flew flex-col  ">
          <div className="sparkles w-[60px] md:w-[80px] "></div>
          <div className="text   ml-[40px] ">
            <div className="slogan   mb-[20px] ">
              <div className="slogan1  text-white text-left font-bold md:text-[40px] text-[30px] ">
                HELOOOOOOOOOOOOOOOO
              </div>
              <div className="slogan2 mt-[-15px] text-white font-light italic md:text-[40px] text-[30px] text-left">
                StudyFlux - Learn smarter not harder
              </div>
            </div>
            <div className="text-white problematic font-light text-left mt-[50px] mb-[20px] "></div>

            <div className=" text-white overview font-light text-left">
              StudyFlux cuts through the foliage, summarizing key points,
              generating quizzes that blossom with knowledge, and offering an AI
              companion to guide you to academic enlightenment!
            </div>
            <div className="flex flex-start"></div>
            <button className=" tryBtn italic  rounded-sm flex justify-center  font-bold ml-[60px]  mt-[50px] w-[150px] md:w-[200px]  ">
              Try it now !
            </button>
          </div>
        </div>
        <div className="left-container  flex  justify-center  ">
          <div className="blob"> fghjk</div>
        </div>
      </div>
    </>
  );
}
export default Feature;
