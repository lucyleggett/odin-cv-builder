import Fieldset from "./Fieldset";

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
    headLabel: true,
  },
  {
    label: "title of study",
    type: "text",
  },
  {
    label: "graduated",
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
    headLabel: true,
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
  return (
    <main>
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
    </main>
  );
}
