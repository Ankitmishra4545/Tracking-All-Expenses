import React from "react";

const Welcome = () => {
  return <div className="border-bottom">Welcome to My Expense Tracker!!!</div>;
  return <div className="d-flex p-3 justify-content-between border-bottom">
    <p>Welcome to My Expense Tracker!!!</p>
    <span>Your profile is incomplete. <a href="/updateprofile">Complete Now</a></span>
  </div>
};

export default Welcome;