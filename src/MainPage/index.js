import "./index.css";
import Header from "../Header";
import Home from "../Home";
import OurServices from "../OurServices";
import UsingTechnologies from "../UsingTechnologies";
import About from "../About";
import ClientTestimonials from "../ClientTestimonials";
import LatestStories from "../LatestStories";
import Footer from "../Footer";

const MainPage = () => (
  <div className="main-page-container">
    <Header />
    <Home />
    <OurServices />
    <UsingTechnologies />
    <About />
    <ClientTestimonials />
    {/* my records in client testimonials page */}
    <LatestStories />
    <Footer />
  </div>
);

export default MainPage;
