import React, { useEffect } from "react";
import "./background.scss";

function BackgroundAnimation() {
  // const updatePosition = (element) => {
  //   const velocity = { x: Math.random() * 4 - 2, y: Math.random() * 4 - 2 }; // Random velocity
  //   const bounds = document.body.getBoundingClientRect();
  
  //   const move = () => {
  //     requestAnimationFrame(move);
  //     let currentX = parseFloat(element.style.left);
  //     let currentY = parseFloat(element.style.top);
  
  //     // Check for collisions with the window edges
  //     if (currentX <= 0 || currentX >= bounds.width) velocity.x *= -1;
  //     if (currentY <= 0 || currentY >= bounds.height) velocity.y *= -1;
  
  //     // Update position
  //     element.style.left = `${currentX + velocity.x}px`;
  //     element.style.top = `${currentY + velocity.y}px`;
  //   };
  
  //   move(); // Start the animation
  // };
  useEffect(() => {
    const shapes = document.querySelectorAll('.floating');
    const bounds = document.querySelector('.back-shapes').getBoundingClientRect();

    // Set the max boundaries for movement
    const maxX = window.innerWidth - 20;
    const maxY = window.innerHeight - 20;

    // Update position function
    const updatePosition = (element, x, y) => {
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
    };

    // Initialize each shape with a random direction and velocity
    shapes.forEach(element => {
      element.velocity = { x: Math.random() * 1, y: Math.random() * 1 }; // Random velocity
      // Set the initial position within the boundary
      const initialX = Math.random() * maxX;
      const initialY = Math.random() * maxY;
      updatePosition(element, initialX, initialY);
    });

    const moveShapes = () => {
      shapes.forEach(element => {
        let currentX = parseFloat(element.style.left);
        let currentY = parseFloat(element.style.top);

        // Check for collisions with the set boundaries
        if (currentX <= 0 || currentX >= maxX - element.offsetWidth) element.velocity.x *= -1;
        if (currentY <= 0 || currentY >= maxY - element.offsetHeight) element.velocity.y *= -1;

        // Update position within the boundary
        updatePosition(element, currentX + element.velocity.x, currentY + element.velocity.y);
      });

      requestAnimationFrame(moveShapes);
    };

    // Start moving the shapes within boundaries
    moveShapes();

    // Reset all shapes to click position within boundaries
    const resetShapes = (e) => {
      const x = Math.min(e.clientX - bounds.left, maxX);
      const y = Math.min(e.clientY - bounds.top, maxY);
      shapes.forEach(element => updatePosition(element, x, y));
    };

    // Add click event listener to the container
    const container = document.querySelector('.backwrap');
    container.addEventListener('click', resetShapes);

    // Clean up event listener when component unmounts
    return () => container.removeEventListener('click', resetShapes);
  }, []);
  

  return (
    <div className="backwrap gradient">
      <div className="back-shapes">
        {/* Repeat this pattern for each span, adjusting the style object as necessary */}
        <span className="floating circle black-shape" style={{ top: 0, left: 0}}></span>
        <span className="floating triangle black-shape" style={{ top: '31.46067415730337%', left: '33.59375%'}}></span>
        <span className="floating cross black-shape" style={{ top: '76.50663942798774%', left: '38.020833333333336%'}}></span>
        <span className="floating square black-shape" style={{ top: '0', left: '0'}}></span>
        <span className="floating square black-shape" style={{ top: '58.12053115423902%', left: '56.770833333333336%'}}></span>
        <span className="floating square black-shape" style={{ top: '8.682328907048008%', left: '72.70833333333333%'}}></span>
        <span className="floating cross black-shape" style={{ top: '31.3585291113381%', left: '58.541666666666664%'}}></span>
        <span className="floating cross black-shape" style={{ top: '69.96935648621042%', left: '81.45833333333333%' }}></span>
        <span className="floating circle black-shape" style={{ top: '15.117466802860061%', left: '32.34375%'}}></span>
        <span className="floating circle black-shape" style={{ top: '13.074565883554648%', left: '45.989583333333336%'}}></span>
        <span className="floating cross black-shape" style={{ top: '55.87334014300306%', left: '27.135416666666668%' }}></span>
        <span className="floating cross black-shape" style={{ top: '49.54034729315628%', left: '53.75%',}}></span>
        <span className="floating cross black-shape" style={{ top: '34.62717058222676%', left: '49.635416666666664%'}}></span>
        <span className="floating cross black-shape" style={{ top: '33.19713993871297%', left: '86.14583333333333%'}}></span>
        <span className="floating square black-shape" style={{ top: '28.19203268641471%', left: '25.208333333333332%'}}></span>
        <span className="floating circle black-shape" style={{ top: '39.7344228804903%', left: '10.833333333333334%'}}></span>
        <span className="floating triangle black-shape" style={{ top: '77.83452502553627%', left: '24.427083333333332%' }}></span>
        <span className="floating triangle black-shape" style={{ top: '2.860061287027579%', left: '47.864583333333336%'}}></span>
        <span className="floating triangle black-shape" style={{ top: '71.3993871297242%', left: '66.45833333333333%' }}></span>
        <span className="floating triangle black-shape" style={{ top: '31.256384065372828%', left: '76.92708333333333%' }}></span>
        <span className="floating triangle black-shape" style={{ top: '46.47599591419816%', left: '38.90625%' }}></span>
        <span className="floating cross black-shape" style={{ top: '3.4729315628192032%', left: '19.635416666666668%' }}></span>
        <span className="floating cross black-shape" style={{ top: '3.575076608784474%', left: '6.25%' }}></span>
        <span className="floating cross black-shape" style={{ top: '77.3237997957099%', left: '4.583333333333333%' }}></span>
        <span className="floating cross black-shape" style={{ top: '0.9193054136874361%', left: '71.14583333333333%' }}></span>
        <span className="floating square black-shape" style={{ top: '23.6976506639428%', left: '63.28125%' }}></span>
        <span className="floating square black-shape" style={{ top: '81.30745658835546%', left: '45.15625%' }}></span>
        <span className="floating square black-shape" style={{ top: '60.9805924412666%', left: '42.239583333333336%' }}></span>
        <span className="floating square black-shape" style={{ top: '29.009193054136876%', left: '93.90625%' }}></span>
        <span className="floating square black-shape" style={{ top: '52.093973442288046%', left: '68.90625%' }}></span>
        <span className="floating square black-shape" style={{ top: '81.51174668028601%', left: '83.59375%' }}></span>
        <span className="floating square black-shape" style={{ top: '11.542390194075587%', left: '91.51041666666667%' }}></span>
      </div>
    </div>
  );
}

export default BackgroundAnimation;