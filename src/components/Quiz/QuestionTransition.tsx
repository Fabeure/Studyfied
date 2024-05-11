interface QuestionTransitionProps {
  onTransit: () => void;
}

export default function QuestionTransition({
  onTransit,
}: QuestionTransitionProps) {
  return (
    <div>
      QuestionTransition
      <button onClick={onTransit}>transition</button>
    </div>
  );
}
