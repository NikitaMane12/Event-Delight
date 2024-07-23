import { useEffect, useState } from "react";
import "../Styles/banner.css";
import img1 from "../assets/img1.1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

const MagicBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [img1, img2, img3, img4];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 3500);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="carousel-container mt-12 lg:mt-10 ">
      <div className="carousel">
        <div
          className="slides"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((img, index) => (
            <div className="slide" key={index}>
              <img
                className="brightness-[0.60]"
                src={img}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="thumbnails">
          {slides.map((img, index) => (
            <div
              key={index}
              className={`thumbnail ${currentSlide === index ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            >
              <img src={img} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="arrows">
          <button onClick={prevSlide}>{"<"}</button>
          <button onClick={nextSlide}>{">"}</button>
        </div>
      </div>
    </div>
  );
};

export default MagicBanner;
