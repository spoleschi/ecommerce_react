import Carousel from 'react-bootstrap/Carousel';

function ProductSlider( {img} ) {


  return (
    <Carousel variant="dark">
      
      {img.map(imagen => 
      <Carousel.Item>
        <img style={{height:'400px'}}
          className="d-block w-100"
          src={imagen}
          alt={imagen}
        />
      </Carousel.Item>)}
    </Carousel>
  );
}

export default ProductSlider;