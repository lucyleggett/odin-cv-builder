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
  {
    label: "location",
    type: "text",
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
    label: "start date",
    type: "date",
  },
  {
    label: "end date",
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

export const exampleData = {
  "fieldset-Work experience":
    '{"sections":[{"id":"86e4176d-c5da-4780-aed0-88d45f9e8c49","isActive":true,"values":{}}]}',
  "fieldset-education":
    '{"sections":[{"id":"e57c8128-822c-44ff-a19a-1d0cc65b713f","isActive":true,"values":{"university":"Singapore Management University","title of study":"Business Management","start date":"2025-09-15","end date":"2028-06-15"}}]}',
  "fieldset-General information":
    '{"sections":[{"id":"6c3ffb31-934a-49f7-a6af-5c772bf3ebe7","isActive":true,"values":{}}]}',
  "fieldset-Education":
    '{"sections":[{"id":"94d39317-e36f-496e-b1b3-45ea63cc0f95","isActive":true,"values":{}}]}',
  "fieldset-general information":
    '{"sections":[{"id":"e57c8128-822c-44ff-a19a-1d0cc65b713f","isActive":true,"values":{"name":"Ola Canto","email":"ola.canto@gmail.com","phone number":"+65 8452 4391","location":"Singapore"}}]}',
  "fieldset-work experience":
    '{"sections":[{"id":"e57c8128-822c-44ff-a19a-1d0cc65b713f","isActive":false,"values":{"company":"Argyll Scott Consulting PTE. LTD.","job title":"Project Manager, Business Analyst","key responsibilities":"- Supported distribution transformation initiatives across different internal distribution channels.\\n- Undertook Project Management and/or Business Analysis activities depending on the scope of the initiative.\\n- Supported day-two improvement work as transformation initiatives progress.\\n- Assessed business needs within the distribution environment and translated them into appropriate change activities.\\n- Supported improvements to existing business and operational processes associated with distribution initiatives.\\n- Supported the implementation and ongoing delivery of change across relevant distribution areas.","start date":"2026-10-01","end date":"2027-10-01"}},{"id":"47b7333f-c51e-4653-b33f-f47df8aca760","isActive":false,"values":{"company":"ONE","job title":"Team Assistant - C-suite Office","key responsibilities":"- Completed a variety of administrative tasks for the C suites\' Office including; managing an extremely active calendar of appointments, composing and preparing correspondences, scheduling meetings and interviews, and compiling documents for meetings, as necessary\\n- Acted as the first point of contact for visitors, dealing with correspondence and phone calls\\n- Arranged travel, accommodation and transport pick-up\\n- Ensured smooth communication between the C suites\' Office and internal/external stakeholders\\n- Created meeting agendas, organize meeting materials, and collate reports\\n- Handled filing of business expenses","start date":"2025-03-15","end date":"2026-09-30"}}]}',
};

export function toSentenceCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
