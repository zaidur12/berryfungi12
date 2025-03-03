// Removed unused react import as it is not required with new JSX transform
import img1 from "../image/img1.jpg";
import img2 from "../image/img2.jpg";
import img3 from "../image/img3.jpg";


function Product() {
  return (
    <>
      <div className="min-h-screen" id="product">
        <h1 className="text-center font-normal text-black text-5xl mb-6 mt-12">
          Our Product 
        </h1>
        <div className="carousel w-[1030px] h-[420px] rounded-lg">
          <div
            id="slide1"
            className="carousel-item relative w-full flex bg-black"
          >
            <div className="w-1/2">
              <img className="w-[300px] h-[330px] mt-10 ml-24 rounded-xl " src={img1} />
            </div>
            <div className="w-1/2 mt-20 px-20">
              <h1 className="mb-8 text-center font-normal text-3xl">Product 1</h1>
              <p className="text-start font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet auctor ligula, vitae commodo lectus. Donec iaculis, enim
                sed tempus consectetur, justo massa consequat ex, vel fringilla
                metus sapien nec neque. Nullam nec nunc nec nunc ultricies
                ultricies. Nullam ultricies, nunc nec ultricies ultricies, nunc
                nec ultricies ultricies, nunc nec ultricies
              </p>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide2"
            className="carousel-item relative w-full flex bg-black"
          >
            <div className="w-1/2">
              <img className="w-[300px] h-[330px] mt-10 ml-24 rounded-xl" src={img2} />
            </div>
            <div className="w-1/2 mt-20 px-20">
              <h1 className="mb-8 text-center font-normal text-3xl">Product 2</h1>
              <p className="text-start font-light text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet auctor ligula, vitae commodo lectus. Donec iaculis, enim
                sed tempus consectetur, justo massa consequat ex, vel fringilla
                metus sapien nec neque. Nullam nec nunc nec nunc ultricies
                ultricies. Nullam ultricies, nunc nec ultricies ultricies, nunc
                nec ultricies ultricies, nunc nec ultricies
              </p>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide3"
            className="carousel-item relative w-full flex bg-black"
          >
            <div className="w-1/2">
              <img className="w-[300px] h-[330px] mt-10 ml-24 rounded-xl" src={img3} />
            </div>
            <div className="w-1/2 mt-20 px-20">
              <h1 className="mb-8 text-center font-normal text-3xl">Product 3</h1>
              <p className="text-start font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet auctor ligula, vitae commodo lectus. Donec iaculis, enim
                sed tempus consectetur, justo massa consequat ex, vel fringilla
                metus sapien nec neque. Nullam nec nunc nec nunc ultricies
                ultricies. Nullam ultricies, nunc nec ultricies ultricies, nunc
                nec ultricies ultricies, nunc nec ultricies
              </p>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Product;
