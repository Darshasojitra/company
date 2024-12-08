import { Link } from "react-router-dom";

const FrontContactUs = () => {
  return (
    <section className="pl-16">
      <p className="mb-4 text-indigo-500 text-lg font-medium">
        # It's time to change
      </p>
      <h2 className="mb-8 text-5xl tracking-wide font-bold">
        We can help you Transform !!
      </h2>

      <Link
        className=" py-3 px-6 font-medium text-white bg-indigo-500 rounded-full"
        to="/contactus"
      >
        Contact Us
      </Link>
    </section>
  );
};

export default FrontContactUs;
