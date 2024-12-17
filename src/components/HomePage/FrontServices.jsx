const FrontServices = () => {
  return (
    <section className="mb-32 px-16 flex justify-between items-center">
          <div className="w-5/12 pr-8">
            <p className="mb-4 text-indigo-500 text-lg font-medium">
              # Services
            </p>
            <h2 className="text-5xl tracking-wide font-bold">
              Exceptionally tailored to you
            </h2>
            <p className=" my-5 text-zinc-500 text-base font-medium">
              Our customized services drive exceptional results in branding,
              mobile apps, web design, marketing & other services.
            </p>
            <button className="mt-2 py-2 px-6 font-medium bg-indigo-500 text-white rounded-full">
              Our services
            </button>
          </div>

          {/* Cards */}
          <div className="w-6/12 p-5 columns-2 gap-5 rounded-xl">
            <div className="h-16" />
            <div className=" px-6 pt-8 pb-10 mb-5 rounded-xl shadow-lg bg-gray-200">
              <div className=" w-24 h-24 rounded-lg bg-indigo-500" />
              <h3 className=" mt-3 text-lg font-semibold">Branding</h3>
              <p className=" mt-1 text-sm font-medium text-zinc-500">
                Create a strong, cohesive brand identity with our expert logo
                design and strategic branding services.
              </p>
            </div>
            <div className=" px-6 pt-8 pb-10 mb-5 rounded-xl shadow-lg bg-gray-200">
              <div className=" w-24 h-24 rounded-lg bg-indigo-500" />
              <h3 className=" mt-3 text-lg font-semibold">Web Design</h3>
              <p className=" mt-1 text-sm font-medium text-zinc-500">
                Design visually appealing, responsive websites that engage
                visitors and drive conversions.
              </p>
            </div>
            <div className=" px-6 pt-8 pb-10 mb-5 rounded-xl shadow-lg bg-gray-200">
              <div className=" w-24 h-24 rounded-lg bg-indigo-500" />
              <h3 className=" mt-3 text-lg font-semibold">Mobile App</h3>
              <p className=" mt-1 text-sm font-medium text-zinc-500">
                Develop user-friendly, feature-rich mobile apps for iOS and
                Android to reach your audience effectively.
              </p>
            </div>
            <div className=" px-6 pt-8 pb-10 mb-5 rounded-xl shadow-lg bg-gray-200">
              <div className=" w-24 h-24 rounded-lg bg-indigo-500" />
              <h3 className=" mt-3 text-lg font-semibold">Marketing</h3>
              <p className=" mt-1 text-sm font-medium text-zinc-500">
                Boost business growth with our comprehensive marketing services,
                from social media to SEO strategies.
              </p>
            </div>
          </div>
        </section>
  )
}

export default FrontServices