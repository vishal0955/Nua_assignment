import React from "react";
import LoginForm from "../Components/Login";

const Home = () => {
    console.log("inside home");
  return (
    <div className="text-cyan-500 text-xl flex item-center justify-center">
      <div className="mt-32">
        <LoginForm />
      </div>
    </div>
  );
}; 

export default Home;
 