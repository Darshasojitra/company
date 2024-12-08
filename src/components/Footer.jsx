import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-black bg-opacity-85">
      <div className="w-3/4 py-12 mx-auto text-zinc-300 flex">
        <div className="w-1/4 p-5 border-r-2 border-zinc-500">
          <h5 className=" mb-7 text-3xl font-semibold">MindStormSoft.</h5>
          <p className=" font-medium text-justify text-base">
            MindstormSoft is the best IT solution company which meets the
            present and future necessity working dynamically for the success in
            the operating scenery.
          </p>
        </div>

        <div className="w-1/4 p-5 border-r-2 border-zinc-500">
          <h5 className="mb-7 text-2xl font-semibold">Contacts</h5>
          <p className="mb-3">
            14/2 Patel Park Society, Nikol, Ahmedabad, Gujarat 382350
          </p>
          <p className="mb-3">Mon-Sat 10:00 - 7:00</p>
          <p className="mb-3">+91 99131 50901</p>
          <p className="mb-3">info@mindstormsoft.com</p>
        </div>

        <div className="w-1/4 p-5 border-r-2 border-zinc-500 flex flex-col">
          <h5 className="mb-7 text-2xl font-semibold">Quick Links</h5>

          <div className=" grid grid-cols-2 gap-2">
            <Link to="/" className="mb-1">
              Home
            </Link>
            <Link to="/about" className="mb-1">
              About
            </Link>
            <Link to="/services" className="mb-1">
              Services
            </Link>
            <Link to="/portfolio" className="mb-1">
              Portfolio
            </Link>
            <Link to="/blogs" className="mb-1">
              Blogs
            </Link>
            <Link to="/contactus" className="mb-1">
              Contact Us
            </Link>
            <Link to="/career" className="mb-1">
              Career
            </Link>
          </div>
        </div>

        <div className="w-1/4 p-5">
          <h5 className="mb-7 text-2xl font-semibold">Subscribe</h5>

          <p className="mb-2 pl-2 text-sm">
            Email<span className="text-red-500">*</span>
          </p>
          <input type="text" className=" p-2 text-black rounded-md bg-zinc-300" />

          <button className="mt-3 py-1.5 px-4 bg-zinc-300 font-semibold text-black rounded-md">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
