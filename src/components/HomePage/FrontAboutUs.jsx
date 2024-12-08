const FrontAboutUs = () => {
  return (
    <section className="mb-32 p-16 border-2 rounded-3xl flex justify-between">
          {/* Image */}
          <div className="w-6/12 flex justify-center items-center bg-indigo-500 rounded-xl">
            Image will show here,
          </div>

          {/* Headings */}
          <div className="w-5/12 pr-8">
            <p className="mb-4 text-indigo-500 text-lg font-medium">
              # About us
            </p>
            <h2 className="text-5xl tracking-wide font-bold">
              Turn ideas into creation
            </h2>
            <p className=" my-5 text-zinc-500 text-base font-medium">
              We are the collective force behind five cutting-edge companies –
              Srujan, Designix, Protonix, SwapEV, and Pragati. Our mission is to
              provide holistic solutions tailored to meet the diverse needs of
              businesses across various industries.
            </p>
            <button className="mt-2 py-2 px-6 font-medium text-white bg-indigo-500 rounded-full">
              Know Us
            </button>
          </div>
        </section>
  )
}

export default FrontAboutUs;