import { FiChevronsRight } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";

const Duties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty) => {
        return (
          <div className="job-desc" key={uuidv4()}>
            <FiChevronsRight className="job-icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Duties;
