import "./index.css";
import { IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    id: 1,
    name: "Transport",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709882094/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/experts%20page/transport_qhpvs8.svg",
  },
  {
    id: 2,
    name: "Real Estate",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709882092/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/experts%20page/real_astate_ldri3h.svg",
  },
  {
    id: 3,
    name: "Restuarent",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709882092/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/experts%20page/restuarent_lerjtk.svg",
  },
  {
    id: 4,
    name: "Health Care",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709882092/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/experts%20page/healthcare_gfx9gp.svg",
  },
  {
    id: 5,
    name: "Game",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709882091/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/experts%20page/game_xkhwfq.svg",
  },
  {
    id: 6,
    name: "Grocery",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709882091/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/experts%20page/grocery_m7pbuz.svg",
  },
  {
    id: 7,
    name: "Event",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709882091/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/experts%20page/event_yrax3d.svg",
  },
  {
    id: 8,
    name: "finance",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709882091/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/experts%20page/finance_ehkmxy.svg",
  },
  {
    id: 9,
    name: "Education",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709882091/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/experts%20page/education_zyt0g5.svg",
  },
  {
    id: 10,
    name: "E Commerce",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709882091/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/experts%20page/e_commerce_qngwsv.svg",
  },
];

const settings = {
  dots: false,
  autoplay: true,
  infinite: true,

  autoplaySpeed: 2000,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const About = () => (
  <div className="about-bg-container">
    <div className="about-inner-container">
      <div className="about-information-container">
        <h1 className="about-heading">About Us</h1>
        <p className="about-description">
          Lokesh Software Solutions is an Information-based Technology company
          that focuses on Web Development, Digital Marketing, App Development,
          Gaming and Augmented Reality (AR), and Virtual Reality (VR). Our head
          office is located at Mandapeta and we had a branch in Hyderabad. We
          are a bunch of passionate and talented youngsters who combine both
          skill and knowledge to deliver the best result.
        </p>
        <p className="about-description">
          We work on the motto “Client satisfaction is the utmost priority” and
          we stick to that motto whatsoever. We are dedicated, hardworking, and
          disciplined towards our projects which made clients work with us more
          often. We implement new methods, ideas, and strategies to meet the
          client's needs and to deliver the best possible result. We work on
          multiple projects globally which are related to App development, web
          development, and digital marketing
        </p>
        <button type="button" className="about-btn">
          Learn More <IoIosArrowForward />
        </button>
      </div>
      <img
        className="about-image"
        src="https://res.cloudinary.com/dssfuaou4/image/upload/v1709807065/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/About-us-makers-mind_large_yrnnry.webp"
        alt="about-icon"
      />
    </div>

    <div className="about-slick-heading">
      <h1>We Are Expert In</h1>
    </div>

    <ul className="about-slick-page">
      <Slider {...settings}>
        {data.map((eachItem) => (
          <li key={eachItem.id} className="about-slick-list-item">
            <div className="about-slick-img-container">
              <img
                className="about-slick-image"
                src={eachItem.image}
                alt={eachItem.name}
              />
              <p className="about-slick-name">{eachItem.name}</p>
            </div>
          </li>
        ))}
      </Slider>
    </ul>
  </div>
);

export default About;
