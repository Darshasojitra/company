import React from "react";

const Stats = () => {
  return (
    <section className="mb-28">
      <p className="mb-4 pl-16 text-indigo-500 text-lg font-medium">
        # Our track record
      </p>
      <h2 className="mb-7 pl-16 text-5xl tracking-wide font-bold">
        Trusted by creators worldwide
      </h2>

      <div className=" py-16 flex justify-around border-2 rounded-2xl">
        <div className=" text-center">
          <p className=" font-bold text-4xl">100 %</p>
          <p className=" font-medium text-base text-zinc-500">
            Client Satisfaction
          </p>
        </div>
        <div className=" text-center">
          <p className=" font-bold text-4xl">2 +</p>
          <p className=" font-medium text-base text-zinc-500">
            Years Experience
          </p>
        </div>
        <div className=" text-center">
          <p className=" font-bold text-4xl">10 +</p>
          <p className=" font-medium text-base text-zinc-500">Happy Clients</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
