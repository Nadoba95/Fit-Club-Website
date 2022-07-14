import "./Reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

function Reasons() {
  return (
    <div className="reasons" id="reasons">
      <div className="reasons__left">
        <img src={image1} alt="image1" />
        <img src={image2} alt="image2" />
        <img src={image3} alt="image3" />
        <img src={image4} alt="image4" />
      </div>

      <div className="reasons__right">
        <span>Some reasons</span>

        <div>
          <span className="stroke-text">why</span>
          <span> choose uss?</span>
        </div>

        <div className="details">
          <div>
            <img src={tick} alt="tick" />

            <span>over 140+ expert coach's</span>
          </div>
          <div>
            <img src={tick} alt="tick" />

            <span>train smarter and faster and before </span>
          </div>
          <div>
            <img src={tick} alt="tick" />

            <span>1 free program for new member</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>reliable partners</span>
          </div>
        </div>

        <span>our partners</span>

        <div className="partners">
          <img src={nb} alt="nb" />
          <img src={adidas} alt="adidas" />
          <img src={nike} alt="nike" />
        </div>
      </div>
    </div>
  );
}

export default Reasons;
