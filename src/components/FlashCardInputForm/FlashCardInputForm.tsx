import { useState } from "react";
import "./FlashCardInputForm.css"; // Import your CSS file
import axios from "axios";
//import flashcard from "../../pages/FlashCards/Flashcard";
interface FlashCardDto {
  topic: String;
}

const getFlashCardsEndpoint = `${process.env.VITE_BACKEND_API}/api/FlashCards/getFlashCard`;

function FlashCardInputForm() {
  const [topic, setTopic] = useState("");
  const [title, setTitle] = useState("");

 const  flashcardDto: FlashCardDto={
    topic: topic
  }
  const getFlashCards = async () => {
    axios
      .post(getFlashCardsEndpoint, {topic})
      .then((res) => {
        console.log("inside the axios flashcard post request");
        console.log(res);
        console.log(res.data);
        // const accessToken = res.data?.accessToken;
        // const email = res.data?.email;
        // const userId = res.data?.userId;
      })
      .catch((err) => {
        console.log(err);
        alert(" | check console");
      });
  };
  const handleTopicInputChange = (event: any) => {
    setTopic(event.target.value);
  };

  const handleTitleChange = (event: any) => {
    setTitle(event.target.value);
  };

  const handleTopicSubmit = (event: any) => {
    event.preventDefault();

    try {
      // Additional logic for handling successful submission (optional)
      console.log("Title:", title);
      console.log("Topic:", topic);
      getFlashCards();
    } catch (error) {
      console.error("Error handling form submission:", error);
      // Handle error gracefully, e.g., display an error message to the user
    }
  };

  return (
    <div className="flashcard-input-form">
      <div className="header">
        Please enter a title for your new flash cards set, and a topic for the
        flash cards.
      </div>
      <form onSubmit={handleTopicSubmit} className="form-container">
        <input
          type="text"
          id="title-input"
          name="title-input"
          value={title}
          onChange={handleTitleChange}
          required
          placeholder="Set Title"
          className="form__field"
          autoComplete="off"
        />
        <br /> {/* Add a line break */}
        <textarea
          id="topic-input"
          name="topic-input"
          value={topic}
          onChange={handleTopicInputChange}
          required
          placeholder="Topic, or study notes"
          className="form__field"
          autoComplete="off"
        />
        <br /> {/* Add a line break */}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FlashCardInputForm;
