import { useState } from "react";
import Section from "./Section";

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

const educationObj = [
  {
    label: "university",
    type: "text",
  },
  {
    label: "title of study",
    type: "text",
  },
  {
    label: "date of study",
    type: "date",
  },
];

const workObj = [
  {
    label: "company",
    type: "text",
  },
  {
    label: "job title",
    type: "text",
  },
  {
    label: "key responsibilities",
    type: "textarea",
  },
  {
    label: "start date",
    type: "date",
  },
  {
    label: "end date",
    type: "date",
  },
];

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Section
        heading="General information"
        inputEleObj={contactObj}
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(activeIndex === 0 ? null: 0)}
      />
      <Section
        heading="Education"
        inputEleObj={educationObj}
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(activeIndex === 1 ? null: 1)}
      />
      <Section
        heading="Work experience"
        inputEleObj={workObj}
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(activeIndex === 2 ? null: 2)}
      />
    </>
  );
}
