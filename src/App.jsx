import { useState, useEffect } from "react";
import JobInfo from "./components/JobInfo";
import Loading from "./components/Loading";
import BtnContainer from "./components/BtnContainer";
import axios from "axios";

const url = "https://www.course-api.com/react-tabs-project";

function App() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);
  const [error, setError] = useState(null);

  const fetchJobs = async () => {
    setIsLoading(true);
    try {
      const res = await axios(url);
      setJobs(res.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setIsLoading(false);
      setError("Failed to fetch job data. Please try again later.");
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <Loading />
      </section>
    );
  }

  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />

      <JobInfo jobs={jobs} currentItem={currentItem} error={error} />
    </section>
  );
}

export default App;
