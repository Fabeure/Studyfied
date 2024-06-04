interface ChatMessageProps {
  text: string;
  sender: "user" | "bot";
  key: React.Key;
}

export default function ChatMessage({ text, sender, key }: ChatMessageProps) {
  return (
    <div
      key={key}
      className={`flex ${
        sender === "user" ? "justify-end" : "justify-start"
      } mb-2`}
    >
      <div
        className={`${
          sender === "user"
            ? "bg-[#4322a9] bg-opacity-50 text-white"
            : "bg-gray-300 text-black"
        } rounded-xl p-3 max-w-lg text-left`}
        style={
          sender === "bot"
            ? {
                background:
                  "linear-gradient(to right, rgba(179,237,228,0.9) 0%, rgba(183,240,255,0.75) 100%)",
              }
            : {}
        }
      >
        {text}
      </div>
    </div>
  );
}
