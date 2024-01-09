import React from "react";
import Navbar from "./Navbar";

const Owner = () => {
  return (
    <>
      <Navbar />
      <div className="owner-page">
        <h1>Nan Group-A-37</h1>
        <img
          src="./src/girl-in-black-color-on-white-background.jpg"
          alt="Girl"
        />
        <h2>Short Biography: </h2>
        <div className="owner-text">
          I graduated from the Junior Software Developer program at Generation
          Thailand, where I received training in both technical and soft skills.
          My diverse work experience has enabled me to adapt to changing
          situations and collaborate effectively in teams. With my passion for
          continuous self-improvement, I am dedicated to becoming a Software
          Developer with expertise in the future.
        </div>
      </div>
    </>
  );
};
export default Owner;