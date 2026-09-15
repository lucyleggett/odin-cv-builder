function toYearOnly(date) {
  return date.slice(0, 4);
}

function toMonthYear(date) {
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);

  return `${month}/${year}`
}

export default function Entry({ values, heading }) {
  if (heading === "general information") {
    return (
      <div className="entry general">
        <h1>{values["name"]}</h1>
        <div className="contact-info">
          <div className="email info">
            <i className="fa-solid fa-envelope"></i>
            <p>{values["email"]}</p>
          </div>
          <div className="phone info">
            <i className="fa-solid fa-phone"></i>
            <p>{values["phone number"]}</p>
          </div>
          <div className="location info">
            <i className="fa-solid fa-location-dot"></i>
            <p>{values["location"]}</p>
          </div>
        </div>
      </div>
    );
  }
  if (heading === "education") {
    return (
      <div className="entry education">
        <p className="date">
          {values["start date"] && values["end date"]
            ? `${toYearOnly(values["start date"])} - ${toYearOnly(values["end date"])}`
            : null}
        </p>{" "}
        <div className="details">
          <h3>{values["university"]}</h3>
          <p>{values["title of study"]}</p>
        </div>
      </div>
    );
  }
  if (heading === "work experience") {
    return (
      <div className="entry work">
        <p className="date">
          {values["start date"] && values["end date"]
            ? `${toMonthYear(values["start date"])} - ${toMonthYear(values["end date"])}`
            : null}
        </p>
        <div className="details">
          <h3>{values["job title"]}</h3>
          <h4>{values["company"]}</h4>
          <p className="description">{values["key responsibilities"]}</p>
        </div>
      </div>
    );
  }
}
