import React from 'react';
import { Slide } from 'react-slideshow-image';

const slideImages = [
  '../images/cropped_0002_13.png',
  '../images/cropped_0004_25.png',
  '../images/cropped_0001_12.png',
  '../images/cropped_0006_31.png',
  '../images/cropped_0003_15.png',
  '../images/cropped_0007_32.png'
  
];

const Slideshow = () => {

    return (
  
      
        <Slide easing="ease">

          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
              {/* <span>Slide 1</span> */}
            </div>
          </div>

          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              {/* <span>Slide 2</span> */}
            </div>
          </div>

          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              {/* <span>Slide 3</span> */}
            </div>
          </div>

          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              {/* <span>Slide 3</span> */}
            </div>
          </div>

          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
              {/* <span>Slide 1</span> */}
            </div>
          </div>

          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[5]})`}}>
              {/* <span>Slide 1</span> */}
            </div>
          </div>

        </Slide>
      
      
    )
};

export default Slideshow
