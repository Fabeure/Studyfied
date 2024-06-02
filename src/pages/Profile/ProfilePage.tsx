import useAuth from "../../hooks/useAuth";
import { savedcardsData } from "../../constants/savedCardsData";
import { Tilt } from "react-tilt";
import flashcard from "../../assets/demo/flashcard.png";
import quiz from "../../assets/demo/quiz.png";
function ProfilePage() {
  const { user } = useAuth();
  return (
    <div className="flex justify-center">
      <div className="profile-container w-[80%] mt-[7%] ">
        <div className="upper-part">
          <div className="text w-[80%]">
            <div className="first-text font-[500] text-[25px] text-white text-left">
              👤 Hello {user.name}!
            </div>
            <div className="second-text mt-[20px] text-white text-left">
              This is your profile page. you can see the progress you’ve made
              with your work and the flashcards and quizzes you saved.
            </div>
          </div>
          <div className="edit-btn text-left mt-[20px]">
            <button className="">edit profile</button>
          </div>
        </div>

        <div className="container cards mt-[50px]">
          <div className="flex flex-wrap justify-center cards-container">
            {savedcardsData.map((card) => (
              <div className="fragment-like" key={card.id}>
                <Tilt
                  className="card-container cursor-pointer items-center m-[20px] flex justify-center flex-col"
                  options={{ max: 20, scale: 1.05, speed: 45 }}
                  style={{ transition: "transform 0.1s ease-in-out" }}
                >
                  <div className="card w-full h-full flex justify-center flex-col">
                    <div className="card-image h-[40%] flex justify-center">
                      <img
                        className="icon"
                        src={card.image === "flashcard" ? flashcard : quiz}
                      />
                    </div>
                    <div className="card-description font-light lg:text-[25px] md:text-[20px] mt-[20px] text-white flex flex-row justify-center items-center">
                      {card.description}
                    </div>
                  </div>
                </Tilt>
              </div>
            ))}
          </div>
        </div>
        {/* this section is about the edit profile */}
        {/* <section className="edit-profile text-left mt-[50px]">
        <hr className="border-t-0.5 border-white my-4" />

          <div className="edit-profile-container">
            <div className="edit-profile-heading">Edit Profile</div>
            <div className="edit-profile-form">
              <div className="form-group">
                <label>Name</label>
                <input type="text" id="name" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" id="email" placeholder="" />
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
}

export default ProfilePage;
