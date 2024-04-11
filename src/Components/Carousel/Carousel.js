import React,{useState} from 'react'

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
      setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
    };
  
    const handleNext = () => {
      setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    };
  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
        <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"  alt="First slide" style={{width:'100%', height:'700px'}}/>
      </div>
      <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
        <img src="https://via.placeholder.com/800x400"  alt="Second slide" style={{width:'100%', height:'700px'}}/>
      </div>
      <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
        <img src="https://via.placeholder.com/800x400"  alt="Third slide" style={{width:'100%', height:'700px'}}/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" onClick={handlePrev}>
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" onClick={handleNext}>
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  
  )
}

export default Carousel