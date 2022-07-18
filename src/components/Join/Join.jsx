import { useRef } from "react";
import "./Join.css";

function Join() {
  const emailRef = useRef();

  function checkEmail(e) {
    e.preventDefault();
    const email = emailRef.current.value.trim();

    if (!email.includes("@") && !email.includes(".com")) {
      return;
    }

    emailRef.current.value = "";
    alert("You successfully sent you email address!");
  }

  return (
    <div className="join-us" id="join-us">
      <div className="join-left">
        <hr />
        <div>
          <span className="stroke-text">ready to</span>
          <span>level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className="stroke-text">with us?</span>
        </div>
      </div>

      <div className="join-right">
        <form onSubmit={checkEmail} className="email-container">
          <input
            ref={emailRef}
            type="email"
            name="user_email"
            placeholder="Enter your email here"
          />
          <button type="submit" className="btn btn-join">
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Join;
