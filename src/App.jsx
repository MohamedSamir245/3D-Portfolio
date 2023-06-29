import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  
} from "./components";


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-fifth">
        <div className="sm:bg-hero-pattern bg-phone-pattern bg-transparent bg-no-repeat sm:bg-cover">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
