import React from "react";

const Cta = () => {
  return (
    <div>
      <div>
        <p>Try is free 7 days then $20/mo. thereafter</p>
      </div>
      <form>
        <input type="text" placeholder="First Name" />
        <button type="submit">Claim your free trial</button>
        <span>
          By clicking the button, you are agreeing to our terms and services
        </span>
      </form>
    </div>
  );
};

export default Cta;
