import Carousel from 'react-bootstrap/Carousel';
import FashionImage from "../../../resources/113079.jpg";
import ElectronicsImage from "../../../resources/electronics.jpg"
import groceryImage from "../../../resources/grocery.jpg"
function CarouselHome() {
  return (
    <div className=''>
    <Carousel className='z-0'>
      <Carousel.Item>
        <img
          className="d-block z-0 w-100 h-[90vh]"
          src={FashionImage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block z-0 w-100 h-[90vh]"
          src={ElectronicsImage}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block z-0 w-100 h-[90vh]"
          src={groceryImage}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselHome;