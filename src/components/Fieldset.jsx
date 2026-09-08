import { useState } from "react";
import Section from "./Section";

export default function Fieldset({ heading, inputEleObj, canAddSections }) {
  const [sections, setSections] = useState([
    { id: crypto.randomUUID(), isActive: true },
  ]);

  const handleAddSection = () => {
    const newSection = {
      id: crypto.randomUUID(),
      isActive: true,
    };
    setSections(
      [...sections, newSection].map((sec) =>
        sec.id === newSection.id
          ? { ...sec, isActive: true }
          : { ...sec, isActive: false },
      ),
    );
  };

  const handleToggleSection = (id) => {
    setSections(
      sections.map((sec) =>
        sec.id === id
          ? { ...sec, isActive: !sec.isActive }
          : { ...sec, isActive: false },
      ),
    );
  };

  return (
    <fieldset>
      <legend>{heading}</legend>
      {sections.map((section) => (
        <Section
          key={section.id}
          inputEleObj={inputEleObj}
          isActive={section.isActive}
          canAddSections={canAddSections}
          onShow={() => handleToggleSection(section.id)}
        />
      ))}
      {canAddSections && (
        <button type="button" onClick={handleAddSection}>
          Add
        </button>
      )}
    </fieldset>
  );
}
