import {  HashRouter, BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Body";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Blogs from "./Blogs";
import ContactUs from "./ContactUs";
import Career from "./Career";

const App = () => {
  return (
    <>
      {/* <BrowserRouter basename="/"> */}
       <HashRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            {/* <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/services" element={<Services />}/>
            <Route path="/portfolio" element={<Portfolio />}/>
            <Route path="/blogs" element={<Blogs />}/>
            <Route path="/contactus" element={<ContactUs />}/>
            <Route path="/career" element={<Career />}/> */}
              <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="career" element={<Career />} />
          
          </Route>
        {/* </Routes>
        
        <Routes> */}
          <Route path="/dashboard" element={<div>dashboard</div>}/>
        </Routes>
        </HashRouter>
      {/* </BrowserRouter> */}
    </>
  );
};

export default App;
