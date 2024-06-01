import { FormEvent, useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/IsPlayingContext";

const TextToSpeech = () => {
  const [userText, setUserText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { isPlaying, setIsPlaying } = useContext(AppContext);
const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

useEffect(() => {
    if (typeof window !== "undefined") {
        const synth = window.speechSynthesis;
        setVoices(synth.getVoices());
    }
}, []);

console.log(voices);

  const streamingOptions = {
    voiceEngine: "PlayHT2.0-turbo",
    voiceId: "s3://voice-cloning-zero-shot/d9ff78ba-d016-47f6-b0ef-dd630f59414e/female-cs/manifest.json",
    sampleRate: 44100,
    outputFormat: 'mp3',
    speed: 1,
  };

  const selectedVoice = voices.find((voice) => voice.name === "Tessa");

const speak = async (textToSpeak: string | undefined) => {
    // Here you can add your TTS logic using PlayHT or the Web Speech API
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = 0.8;
    utterance.voice = selectedVoice || null;

    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
    utterance.onend = () => {
        setIsPlaying(false);
    };
};

  async function handleUserText(event: { preventDefault: () => void; }) {
    event.preventDefault();
    if (userText === "") return alert("Please enter text");
    setIsLoading(true);
    try {
      const message = "hello there human" 
      speak(message);
    } catch (error) {
      let message = "";
      if (error instanceof Error) message = error.message;
      console.log(message);
    } finally {
      setIsLoading(false);
      setUserText("");
    }
  }

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
        <a target="_blank"  rel="noopener noreferrer">
          <img  alt="yt" height={50} width={50} />
        </a>
        <div className="absolute top-0 bg-black/60" />
      </div>
    </div>
  );
};

export default TextToSpeech;
