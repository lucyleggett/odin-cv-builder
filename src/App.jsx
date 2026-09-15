import "./App.css";
import { useState, useEffect } from "react";
import Document from "./components/Document";
import Accordion from "./components/Accordion";

function useSections(heading) {
  const storageKey = `fieldset-${heading}`;

  const [sections, setSections] = useState(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) return JSON.parse(saved).sections;
    return [{ id: crypto.randomUUID(), isActive: true, values: {} }];
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify({ sections }));
  }, [sections, storageKey]);

  return [sections, setSections];
}

export default function App() {
  const [contactSections, setContactSections] = useSections(
    "general information",
  );
  const [educationSections, setEducationSections] = useSections("education");
  const [workSections, setWorkSections] = useSections("work experience");
  
  const clearData = () => {
    const empty = [{ id: crypto.randomUUID(), isActive: true, values: {} }];
    setContactSections(empty);
    setEducationSections(empty);
    setWorkSections(empty);
  };

  return (
    <>
      <Accordion
        clearData={clearData}
        contactSections={contactSections}
        setContactSections={setContactSections}
        educationSections={educationSections}
        setEducationSections={setEducationSections}
        workSections={workSections}
        setWorkSections={setWorkSections}
      />
      <Document
        contactSections={contactSections}
        educationSections={educationSections}
        workSections={workSections}
      />
    </>
  );
}
