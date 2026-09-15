import Fieldset from "./Fieldset";
import { contactObj, educationObj, workObj } from "../utils";

export default function Accordion() {
  return (
    <>
      <Fieldset
        heading="General information"
        inputEleObj={contactObj}
        canAddSections={false}
      />
      <Fieldset
        heading="Education"
        inputEleObj={educationObj}
        canAddSections={true}
      />
      <Fieldset
        heading="Work experience"
        inputEleObj={workObj}
        canAddSections={true}
      />
    </>
  );
}