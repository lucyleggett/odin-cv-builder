import Fieldset from "./Fieldset";
import { contactObj, educationObj, workObj } from "../utils";

export default function Accordion({
  contactSections,
  setContactSections,
  educationSections,
  setEducationSections,
  workSections,
  setWorkSections,
}) {
  return (
    <>
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
    </>
  );
}
