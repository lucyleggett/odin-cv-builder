export default function Entry({ values, heading }) {

  if (heading === "general information") {
    return (
      <div className="entry">
        <h1>{values["name"]}</h1>
        <div className="contact-info">
          <p>{values["email"]}</p>
          <p>{values["phone number"]}</p>
        </div>
      </div>
    );
  }
  if (heading === "education") {
    return (
      <div className="entry">
        <h3>{values["university"]}</h3>
        <p>{values["title of study"]}</p>
        <p>Graduated {values["graduated"]}</p>
      </div>
    );
  }
  if (heading === "work experience") {
    return (
      <div className="entry">
        <h3>{values["job title"]}</h3>
        <h4>{values["company"]}</h4>
        <p>{values["key responsibilities"]}</p>
        <p>{`${values["start date"]} - ${values["end date"]}`}</p>
      </div>
    );
  }
}
