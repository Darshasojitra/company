import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurClients = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
    cssEase: "linear",
  };

  const companies = [1,2,3,4,5,6,7,8,9,10]

  return (
    <section className="mb-32">
      <div className="w-3/4 mx-auto ">
        <h2 className="mb-8 text-5xl tracking-wide font-bold">
          Our Clients <span className="text-indigo-500">.</span>
        </h2>

        <div>
        <Slider {...settings}>
            {companies.map((company) => (<div><div className="w-52 h-20 bg-indigo-500 rounded-xl"></div></div>))}
        </Slider>
        <Slider {...settings}>
            {companies.map((company) => (<div><div className="w-52 h-20 bg-indigo-500 rounded-xl"></div></div>))}
        </Slider>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
