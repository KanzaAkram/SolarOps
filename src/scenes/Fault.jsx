import React, { useEffect, useState } from 'react';
import './Fault.css';
import image1 from "../assets/fault/image-1.jpeg";
import image2 from "../assets/fault/image-2.png";
import image3 from "../assets/fault/image-3.png";
import image4 from "../assets/fault/image-4.png";

const Fault = () => {
  return (
    <div className="square-window">
      <div className="inner-squares">
        <div className="square">
          <img src={image1} alt="Image 1" />
          <div className="arrow">&#8594;</div> {/* Right arrow */}
        </div>
        <div className="square">
          <img src={image2} alt="Image 2" />
          <div className="arrow">&#8595;</div> {/* Down arrow */}
        </div>
        <div className="square">
          <img src={image3} alt="Image 3" />
          <div className="arrow">&#8592;</div> {/* Left arrow */}
        </div>
        <div className="square">
          <img src={image4} alt="Image 4" />
          <div className="arrow">&#8593;</div> {/* Up arrow */}
        </div>
      </div>
    </div>
  );
};

export default Fault;





