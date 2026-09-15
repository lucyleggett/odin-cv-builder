import Block from "./Block";

export default function Document() {
  return (
    <div className="cv-mockup">
      <div className="header divider">
        <Block heading="general information"></Block>
      </div>
      <div className="education divider">
        <h2>Education</h2>
        <Block heading="education"></Block>
      </div>
      <div className="work-experience divider">
        <h2>Work Experience</h2>
        <Block heading="work experience"></Block>
      </div>
    </div>
  );
}
