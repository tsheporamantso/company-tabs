import { useState, useEffect } from "react";
import axios from "axios";

const url = "https://www.course-api.com/react-tabs-project";

function App() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchJobs = async () => {
    setIsLoading(true);
    try {
      const res = await axios(url);
      setJobs(res.data);
    } catch (error) {
      throw new Error(`Something went wrong ${error}`);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="job-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <>
      <h2>hello comapines</h2>
    </>
  );
}

export default App;
