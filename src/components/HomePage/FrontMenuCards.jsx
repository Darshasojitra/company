const Card = ({ img, heading, pera }) => {
  return (
    <div className=" w-full p-4 rounded-2xl bg-slate-00">
      <div className=" w-12 h-12 rounded-xl flex justify-center items-center text-gray-500 bg-indigo-500"></div>

      <h3 className=" mt-2 mb-1 text-lg font-semibold">{heading}</h3>
      <p className="text-zinc-600 text-am">{pera}</p>
    </div>
  );
};

const FrontMenuCards = () => {
  const cards = [
    {
      img: null,
      heading: "Heading 3",
      pera: "iwbef keriheriug huieug hiruh iuih iuehiu eugv u yewvue wu u gerge jgej hehr jeru e ehge hg eege jbdvj h hihih hkjh jghj hjh jhkjhjf gkjgjy gjhhgdfhj ghdf.",
    },
    {
      img: null,
      heading: "Heading 4",
      pera: "iwbef keriheriug huieug hiruh iuih iuehiu eugv u yewvue wu u gerge jgej hehr jeru e ehge hg eege jbdvj h hihih hkjh jghj hjh jhkjhjf gkjgjy gjhhgdfhj ghdf.",
    },
    {
      img: null,
      heading: "Heading 3",
      pera: "iwbef keriheriug huieug hiruh iuih iuehiu eugv u yewvue wu u gerge jgej hehr jeru e ehge hg eege jbdvj h hihih hkjh jghj hjh jhkjhjf gkjgjy gjhhgdfhj ghdf.",
    },
    {
      img: null,
      heading: "Heading 3",
      pera: "iwbef keriheriug huieug hiruh iuih iuehiu eugv u yewvue wu u gerge jgej hehr jeru e ehge hg eege jbdvj h hihih hkjh jghj hjh jhkjhjf gkjgjy gjhhgdfhj ghdf.",
    },
    {
      img: null,
      heading: "Heading 3",
      pera: "iwbef keriheriug huieug hiruh iuih iuehiu eugv u yewvue wu u gerge jgej hehr jeru e ehge hg eege jbdvj h hihih hkjh jghj hjh jhkjhjf gkjgjy gjhhgdfhj ghdf.",
    },
    {
      img: null,
      heading: "Heading 3",
      pera: "iwbef keriheriug huieug hiruh iuih iuehiu eugv u yewvue wu u gerge jgej hehr jeru e ehge hg eege jbdvj h hihih hkjh jghj hjh jhkjhjf gkjgjy gjhhgdfhj ghdf.",
    },
    {
      img: null,
      heading: "Heading 3",
      pera: "iwbef keriheriug huieug hiruh iuih iuehiu eugv u yewvue wu u gerge jgej hehr jeru e ehge hg eege jbdvj h hihih hkjh jghj hjh jhkjhjf gkjgjy gjhhgdfhj ghdf.",
    },
    {
      img: null,
      heading: "Heading 3",
      pera: "iwbef keriheriug huieug hiruh iuih iuehiu eugv u yewvue wu u gerge jgej hehr jeru e ehge hg eege jbdvj h hihih hkjh jghj hjh jhkjhjf gkjgjy gjhhgdfhj ghdf.",
    },
  ];
  return (
    <section className="mb-32">
      {/* Headings */}
      <h2 className="pl-16 text-5xl tracking-wide font-bold">
        We Build Brands
      </h2>
      <p className="pl-16 my-5 text-zinc-500 text-xl font-medium">
        Empowering visionary ideas and ambitious projects to succeed.
      </p>

      {/* Cards */}
      <div className=" grid grid-cols-4 gap-5">
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

export default FrontMenuCards;
