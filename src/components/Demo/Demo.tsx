import "./demo.css";
import { demoData } from "../../constants/demoData";
import Feature from "./Feature";

function Demo() {
  return (
    <div className="demo-container flex flex-col">
      {demoData.map((item) => (
        <Feature key={item.id} id={item.id} />
      ))}
    </div>
  );
}

export default Demo;
