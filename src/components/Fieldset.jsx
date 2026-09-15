import Section from "./Section";

export default function Fieldset({ heading, inputEleObj, canAddSections, sections, setSections }) {

  const handleAddSection = () => {
    const newSection = {
      id: crypto.randomUUID(),
      isActive: true,
      values: {},
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

  const handleChange = (id, fieldName, value) => {
    setSections(
      sections.map((sec) =>
        sec.id === id
          ? { ...sec, values: { ...sec.values, [fieldName]: value } }
          : sec,
      ),
    );
  };

  const handleDeleteSection = (id) => {
    setSections((prev) => {
      const updated = prev.filter((sec) => sec.id !== id);
      return updated.length > 0
        ? updated
        : [{ id: crypto.randomUUID(), isActive: true, values: {} }];
    });
  };

  return (
    <fieldset>
      <legend>{heading}</legend>
      {sections.map((section) => (
        <Section
          key={section.id}
          data-id={section.id}
          inputEleObj={inputEleObj}
          isActive={section.isActive}
          canAddSections={canAddSections}
          values={section.values}
          onShow={() => handleToggleSection(section.id)}
          onChange={(fieldName, value) =>
            handleChange(section.id, fieldName, value)
          }
          onDelete={() => handleDeleteSection(section.id)}
        />
      ))}
      {canAddSections && (
        <button className="add" type="button" onClick={handleAddSection}>
          <div className="plus-icon"></div>
          <p>Add more</p>
        </button>
      )}
    </fieldset>
  );
}
