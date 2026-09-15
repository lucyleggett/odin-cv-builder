import Fieldset from "./Fieldset";
import { contactObj, educationObj, workObj } from "../utils";

export default function Accordion({
  loadExampleData,
  clearData,
  contactSections,
  setContactSections,
  educationSections,
  setEducationSections,
  workSections,
  setWorkSections,
}) {
  return (
    <form action="get">
      <div className="buttons">
        <button className="example" onClick={loadExampleData}>Load example CV</button>
        <button className="clear" onClick={clearData}>
          Clear CV data
        </button>
      </div>
      <Fieldset
        heading="General information"
        inputEleObj={contactObj}
        canAddSections={false}
        sections={contactSections}
        setSections={setContactSections}
      />
      <Fieldset
        heading="Education"
        inputEleObj={educationObj}
        canAddSections={true}
        sections={educationSections}
        setSections={setEducationSections}
      />
      <Fieldset
        heading="Work experience"
        inputEleObj={workObj}
        canAddSections={true}
        sections={workSections}
        setSections={setWorkSections}
      />
    </form>
  );
}
