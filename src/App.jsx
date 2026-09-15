import "./App.css";
import { useState, useEffect } from "react";
import Document from "./components/Document";
import Accordion from "./components/Accordion";
import { exampleData } from "./utils";

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

  const loadExampleData = () => {
    setContactSections(
      JSON.parse(exampleData["fieldset-general information"]).sections,
    );
    setEducationSections(
      JSON.parse(exampleData["fieldset-education"]).sections,
    );
    setWorkSections(
      JSON.parse(exampleData["fieldset-work experience"]).sections,
    );
  };

  return (
    <>
      <Accordion
        loadExampleData={loadExampleData}
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
