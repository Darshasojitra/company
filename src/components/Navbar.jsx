import { Link } from "react-router-dom";

const Navigators = ({ path, name }) => {
  return (
    <Link to={path} className="text-gray-300">
      {name}
    </Link>
  );
};

const Navbar = () => {
  const navButtons = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/services", name: "Services" },
    { path: "/portfolio", name: "Portfolio" },
    { path: "/blog", name: "Blog" },
    { path: "/contactus", name: "Contact Us" },
    { path: "/career", name: "Career" },
    // {path:"/company/comp.html", name :"Other"}
  ];

  return (
    <div className=" fixed top-0 w-full px-32 py-5 flex items-center justify-between z-50 bg-primary">
      <div className="text-3xl font-bold text-white"> <a  href="/company/comp.html" target="_blank">MindStormSoft.</a></div>
      <div className=" w-5/12 flex justify-between text-sm font-semibold">
        {navButtons.map((button, index) => (
          <Navigators
            key={button.index}
            path={button.path}
            name={button.name}
          />
        ))}
            <div> <a  href="/company/comp.html" target="_blank">Other</a></div>
      </div>
    </div>
  );
};

export default Navbar;
