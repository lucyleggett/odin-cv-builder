import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Section from "./components/Section";

const contactObj = [
  {
    label: "name",
    type: "text",
  },
  {
    label: "email",
    type: "email",
  },
  {
    label: "phone number",
    type: "tel",
  },
];

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Section heading="Contact Details" inputEleObj={contactObj} />
    </>
  );
}

export default App;
