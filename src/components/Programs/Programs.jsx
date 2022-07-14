import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

function Programs() {
  return (
    <div className="programs" id="programs">
      <div className="programs__header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>

      <div className="programs__categories">
        {programsData.map((program) => {
          return (
            <div key={Math.random() * 100} className="category">
              {program.image}
              <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className="join-now">
                <span>Join Now</span>
                <img src={RightArrow} alt="right arrow" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Programs;
