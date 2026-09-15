export const contactObj = [
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

export const educationObj = [
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

export const workObj = [
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

export function toSentenceCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}