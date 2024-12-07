import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" fixed top-0 w-full px-32 py-5 flex items-center justify-between z-50 bg-indigo-500">
      <div className="text-3xl font-bold text-blue-950">MindStormSoft.</div>
      <div className=" w-5/12 flex justify-between text-sm font-semibold">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contactus">Contact Us</Link>
        <Link to="/career">Career</Link>
      </div>
    </div>
  );
};

export default Navbar;
