import { FormEvent, useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/IsPlayingContext";
import axios from 'axios';

const TextToSpeech = () => {
  const [userText, setUserText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { isPlaying, setIsPlaying } = useContext(AppContext);
  const [audioUrl, setAudioUrl] = useState("");

  const generateSpeech = async (textToSpeak: string) => {
    try {
      const response = await axios.post('http://localhost:3000/api/generate-speech', {
        text: textToSpeak,
        voice: "s3://voice-cloning-zero-shot/801a663f-efd0-4254-98d0-5c175514c3e8/jennifer/manifest.json"
      }, { responseType: 'arraybuffer' });

      const blob = new Blob([response.data], { type: 'audio/mpeg' });
      return URL.createObjectURL(blob);
    } catch (error) {
      console.error('Error generating speech:', error);
      throw new Error('Failed to generate speech');
    }
  };

  const handleUserText = async (event: FormEvent) => {
    event.preventDefault();
    if (userText === "") return alert("Please enter text");
    setIsLoading(true);
    try {
      const userText = "Hello, I am a virtual assistant. How can I help you? GOOD job your a good developer.";
      const audioUrl = await generateSpeech(userText);
      setAudioUrl(audioUrl);
      setIsPlaying(true);
    } catch (error) {
      let message = "";
      if (error instanceof Error) message = error.message;
      console.log(message);
    } finally {
      setIsLoading(false);
      setUserText("");
    }
  };

  useEffect(() => {
    if (audioUrl && isPlaying) {
      const audio = new Audio(audioUrl);
      audio.play();
      audio.onended = () => {
        setIsPlaying(false);
      };
    }
  }, [audioUrl, isPlaying]);

  return (
    <div className="relative top-0 z-50 ">
      <form
        onSubmit={handleUserText}
        className="absolute top-[800px] left-[30%] space-x-2 pt-2"
      >
        <input
          type="text"
          value={userText}
          className="bg-transparent w-[510px] border border-[#b00c3f]/80 outline-none rounded-lg placeholder:text-[#b00c3f] p-2 text-[#b00c3f]"
          onChange={(e) => setUserText(e.target.value)}
          placeholder="What do you want to know human...."
        />
        <button
          disabled={isLoading}
          className="text-[#b00c3f] p-2 border border-[#b00c3f] rounded-lg disabled:text-blue-100 disabled:cursor-not-allowed disabled:bg-gray-500 hover:scale-110 hover:bg-[#b00c3f] hover:text-black duration-300 transition-all"
        >
          {isLoading ? "thinking..." : "Ask"}
        </button>
      </form>
      <div className="absolute top-3 right-3">
        <a target="_blank" rel="noopener noreferrer">
          <img alt="yt" height={50} width={50} />
        </a>
        <div className="absolute top-0 bg-black/60" />
      </div>
    </div>
  );
};

export default TextToSpeech;
