import React from "react";

const Card = ({ img, heading, pera }) => {
  return (
    <div className="p-8 flex flex-col gap-2 rounded-2xl shadow-xl bg-gray-100">
      <div className=" mb-4 w-24 h-24 bg-indigo-500 rounded-2xl"></div>
      <h3 className="text-lg font-semibold">{heading}</h3>
      <p className="text-zinc-500 text-base font-medium">{pera}</p>
    </div>
  );
};

const AboutOurCards = () => {
  const cards = [
    {
      img: null,
      heading: "Our Mission",
      pera: "To revolutionize industries with innovative technology and solutions, empowering businesses to achieve goals and drive sustainable growth.",
    },
    {
      img: null,
      heading: "Our Vision",
      pera: "We envision leading with innovation, sustainability, and excellence, driving progress and creating a lasting positive impact.",
    },
    {
      img: null,
      heading: "Our Value",
      pera: "Versatility, Innovation, Customization, Comprehensiveness – our core values drive tailored, innovative, and comprehensive solutions for success.",
    },
  ];
  return (
    <section>
      <div className="mb-32 w-3/4 mx-auto grid grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <Card
            key={index}
            img={card.img}
            heading={card.heading}
            pera={card.pera}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutOurCards;
