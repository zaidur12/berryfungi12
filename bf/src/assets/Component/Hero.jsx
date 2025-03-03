
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../image/image1.jpg'
import image2 from '../image/image2.jpg'
import image3 from '../image/image3.jpg'
import image4 from '../image/image4.jpg'






function Hero() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,          // Enable autoplay
    autoplaySpeed: 2000,     // Time in milliseconds between slide transitions (3 seconds)
  };
  
  return (
    <>
   
      <div className='min-h-screen pt-[69px]' id="hero">
     
        <Slider {...settings} className='w-[1193px] h-[510px] mx-2 my-2 overflow-hidden'>
   
          <div className='h-[520px]'>
            <img className="object-cover" src={image2}/>
          </div>
          <div className='h-[520px]'>
            <img className="object-contain" src={image3}/>
          </div>
          <div className='h-[520px]'>
            <img className="object-contain" src={image4}/>
          </div>
          <div className='h-[520px]'>
            <img className="object-contain" src={image1}/>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default Hero    
