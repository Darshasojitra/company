const FrontPortfolio = () => {
  return (
    <section className="mb-32">
          {/* <img
          src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
          className="fixed top-0 w-full -z-10"
        /> */}
          {/* <div className="fixed w-screen h-screen top-0 -z-10 bg-indigo-300" /> */}

          <div className=" w-full flex flex-col">
            <p className="mb-4 pl-16 text-indigo-500 text-lg font-medium">
              # Out letest work
            </p>
            <h2 className="pl-16 text-5xl tracking-wide font-bold">
              Portfolio
            </h2>
            <p className=" mt-5 pl-16 text-gray-700 text-base font-medium">
              Transform Your Business with Uminber Designs
            </p>

            <div className=" p-5 grid grid-cols-3 gap-7">
              <div className="w-full h-64 rounded-xl bg-indigo-500" />
              <div className="w-full h-64 rounded-xl bg-indigo-500" />
              <div className="w-full h-64 rounded-xl bg-indigo-500" />
              <div className="w-full h-64 rounded-xl bg-indigo-500" />
              <div className="w-full h-64 rounded-xl bg-indigo-500" />
              <div className="w-full h-64 rounded-xl bg-indigo-500" />
            </div>
          </div>
        </section>
  )
}

export default FrontPortfolio;