import { FormEvent, useContext, useState, useEffect} from "react";
import { AppContext } from "../../context/IsPlayingContext";
import axios from "axios";
import { Button, CircularProgress, SxProps, Theme } from "@mui/material";
import ChatMessage from "./ChatMessage";
interface Message {
  sender: "user" | "bot";
  text: string;
}

const chatBotApiEndpoint = `${process.env.VITE_BACKEND_API}/api/ChatBot/generateResponse`;


const generatePromptFromtMessages = (messages: Message[]) => {
  let prompt = '';
  messages.map((message) => {
    prompt += message.sender + ': ' + message.text.trim() + '\n';
  });
  return prompt.trim();
};
const TextToSpeech = ()=> {
  const [userText, setUserText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { isPlaying, setIsPlaying } = useContext(AppContext);
  const [audioUrl, setAudioUrl] = useState("");
  const [conversation, setConversation] = useState<Message[]>([]);
  const generateSpeech = async (textToSpeak: string) => {
    try {
      const response = await axios.post(
        "https://texttospeech-api.onrender.com/api/generate-speech",
        {
          text: textToSpeak,
          voice:
            "s3://voice-cloning-zero-shot/44f32760-8f41-4dfb-b192-ca077fc501ea/original/manifest.json",
        },
        { responseType: "arraybuffer" }
      );

      const blob = new Blob([response.data], { type: "audio/mpeg" });
      return URL.createObjectURL(blob);
    } catch (error) {
      console.error("Error generating speech:", error);
      throw new Error("Failed to generate speech");
    }
  };

  const getReply = (): void => {
    const newConversation = [...conversation, { sender: "user", text: userText } as Message ]
    setConversation(newConversation);
    const conversationToSend = generatePromptFromtMessages(newConversation);
    const params = {
      conversation: encodeURIComponent(conversationToSend),
    };

    axios
      .get(chatBotApiEndpoint, { params })
      .then(async (res) => {
        const audioUrl = await generateSpeech(res.data.resultItem);
        setAudioUrl(audioUrl);
        setIsPlaying(true);
        setConversation((prev) => [
          ...prev,
          {
            sender: "bot",
            text: res.data.resultItem,
          },
        ]);
        console.log("reply has been set", res.data.resultItem)
      })
      .catch((err) => {
        console.log(err);
        alert(" error getting bot reply | check console");
      })
  };

  const handleUserText = async (event: FormEvent) => {
    event.preventDefault();
    if (userText === "") return alert("Please enter text");
    setIsLoading(true);
      getReply();
      setIsLoading(false);
      setUserText("");
  };

  useEffect(() => {
    if (audioUrl && isPlaying) {
      const audio = new Audio(audioUrl);
      audio.play();
      audio.onended = () => {
        setIsPlaying(false);
      };
    }
  }, [audioUrl, isPlaying, setIsPlaying]);

  return (
    <div className="flex flex-col items-center h-full">
      <div
        className="overflow-y-auto p-4 w-full"
        style={{ height: "calc(100vh - 4rem)", paddingBottom: "8rem" }}
      >
        <div className="w-2/3 mx-auto">
          {conversation.map((message, index) => (
            <ChatMessage
              text={message.text}
              sender={message.sender}
              key={index}
            />
          ))}
        </div>
      </div>

      <form
        onSubmit={handleUserText}
        className="flex justify-center h-8rem w-full backdrop-blur-2xl  py-3"
        style={{
          position: "fixed",
          bottom: 0,
          background:
            "linear-gradient(to right,rgba(250, 6, 173, 0),rgba(250, 6, 173, 0.2),rgba(158, 90, 249, 0.2),rgba(36, 5, 130, 0.2),rgba(36, 5, 130, 0))",
        }}
      >
        <div className="flex gap-3 items-center p-2 w-3/4">
          <div
            style={{
              background:
                "linear-gradient(to right, rgb(187, 87, 254), rgb(112, 216, 222))",
              padding: "4px",
              borderRadius: "1em",
              flex: "1",
            }}
          >
            <input
              type="text"
              style={inputStyle}
              value={userText}
              onChange={(e) => setUserText(e.target.value)}
              placeholder="What do you want to know human...."
            />
          </div>
          <div>
            <Button
              fullWidth
              variant="contained"
              onClick={handleUserText}
              sx={genButtonSx}
              disabled={isLoading}
            >
              {!isLoading && "Ask"}
              {isLoading && (
                <CircularProgress sx={{ color: "rgba(255,255,255,0.7)" }} />
              )}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TextToSpeech;

const inputStyle: React.CSSProperties = {
  flexGrow: 1,
  borderRadius: "0.8em",
  color: "white",
  paddingLeft: "1.2em",
  backgroundColor: "#1B1A29",
  width: "100%",
  height: "60px",
  fontSize: "1.3rem",
};

const genButtonSx: SxProps<Theme> = {
  fontSize: "1.3rem",
  paddingY: "0.7rem",
  borderRadius: "1em",
  boxShadow: 0,
  textTransform: "none",
  backgroundImage: "linear-gradient(to right,#280594 0%,#9306AB 100%)",
  fontStyle: "italic",
  fontWeight: "bold",
  color: "white",
};
