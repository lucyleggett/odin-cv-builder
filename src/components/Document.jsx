import Block from "./Block";

export default function Document({
  contactSections,
  educationSections,
  workSections,
}) {
  return (
    <div className="cv-mockup">
      <div className="banner">
        <div className="header divider">
          <Block heading="general information" sections={contactSections}></Block>
        </div>
      </div>
      <div className="education divider">
        <h2>Education</h2>
        <Block heading="education" sections={educationSections}></Block>
      </div>
      <div className="work-experience divider">
        <h2>Work Experience</h2>
        <Block heading="work experience" sections={workSections}></Block>
      </div>
    </div>
  );
}
