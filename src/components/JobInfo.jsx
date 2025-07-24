import Duties from "./Duties";

const JobInfo = ({ jobs, currentItem, error }) => {
  if (!jobs || !jobs[currentItem]) {
    return null;
  }
  const { company, dates, title, duties } = jobs[currentItem];

  return (
    <>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <article className="job-info">
          <h3>{title}</h3>
          <span className="job-company">{company}</span>
          <p className="job-date">{dates}</p>
          <Duties duties={duties} />
        </article>
      )}
    </>
  );
};

export default JobInfo;
