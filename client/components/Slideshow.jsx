import React from 'react';
import { Slide } from 'react-slideshow-image';

const slideImages = [
  '../images/Pair_programming_1.jpg',
  '../images/Pair_programming_2.jpg',
  '../images/Pair_programming_3.jpg'
];

const Slideshow = () => {

    return (
  
      
        <Slide easing="ease">

          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
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

        </Slide>
      
      
    )
};

export default Slideshow
