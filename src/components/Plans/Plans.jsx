import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

function Plans() {
  return (
    <div className="plans">
      <div className="blur plans-blur1"></div>
      <div className="blur plans-blur2"></div>
      <div className="plans__header">
        <span className="stroke-text">ready to start</span>
        <span>your journey</span>
        <span className="stroke-text">now with us</span>
      </div>

      <div className="plans__card">
        {plansData.map((plan, i) => {
          return (
            <div key={i} className="plan">
              {plan.icon}
              <span>{plan.name}</span>
              <span>$ {plan.price}</span>

              <div className="plan__features">
                {plan.features.map((feature, i) => {
                  return (
                    <div key={i} className="feature">
                      <img src={whiteTick} alt="white tick" />
                      <span>{feature}</span>
                    </div>
                  );
                })}
              </div>

              <div>
                <span>See more benefits -{">"} </span>
              </div>
              <button className="btn">Join Now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Plans;
