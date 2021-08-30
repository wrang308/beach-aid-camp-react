import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react";
import { render } from "@testing-library/react";
import CarouselStyle from './StartCarousel.module.css'

function StartCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div>
        <Carousel>
        <Carousel.Item interval={15000}>
          <img
            className="d-block w-100"
src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
/*       <Carousel activeIndex={index} onSelect={handleSelect} className={CarouselStyle.CarouselHeight} style={{ width: "100vw", textAlign: "center"}}>
        <Carousel.Item className={CarouselStyle.CarouselHeight}>
          <img
            className="d-block w-100"
            src="../assets/beach.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={CarouselStyle.CarouselHeight}>
          <img
            className="d-block w-100"
            src="../assets/beach.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={CarouselStyle.CarouselHeight}>
          <img
            className="d-block w-100"
            src="../assets/beach.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */
      
    );
  }

  export default StartCarousel;
  
 // render(<StartCarousel />);