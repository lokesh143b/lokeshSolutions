import "./index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoStarSharp } from "react-icons/io5";
import MyRecords from "../MyRecords";

const data = [
  {
    id: 1,
    institution: "San marine",
    name: "logistics and exports",
    logo:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709900504/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/20231113074747618_bbfbcr.png",
    description:
      "I'm thoroughly impressed by the team's quality of work on our project. They delivered the perfect website, exceeding our expectations.",
    rating: 5,
  },
  {
    id: 2,
    institution: "Niftideals",
    name: "Kiran Nayudu",
    logo:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709900503/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/2023111307501094_p9npaf.png",
    description:
      "Lokesh Software Solutions delivers services on time with no compromise in quality. Analytical skills and responsiveness are the quality that I like the most.",
    rating: 5,
  },
  {
    id: 3,
    institution: "Signature dental center",
    name: "Dr. Kiran Nayudu",
    logo:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709900503/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/2023111307501094_p9npaf.png",
    description:
      "I feel honored to be part of Lokesh Software Solutions. You have  propelled my business to new heights and consistently provided innovative ideas to boost my revenue.",
    rating: 5,
  },
  {
    id: 4,
    institution: "The dentists on golf",
    name: "Dr. Shaival Patel",
    logo:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709900503/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/2023111307501094_p9npaf.png",
    description:
      "Your digital marketing services were excellent. By increasing online visibility,You have driven more conversions.Your expertise has been crucial for my success.",
    rating: 5,
  },
];

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 500,
  slidesToShow: 2,
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

const ClientTestimonials = () => (
  <div className="client-testimonials-bg-container">
    <h1 className="client-testimonials-heading">Client Testimonials</h1>

    <ul className="client-slick-page">
      <Slider {...settings}>
        {data.map((eachItem) => (
          <li key={eachItem.id}>
            <div className="client-slick-card-container">
              <div className="client-slick-logo-container">
                <img
                  className="client-slick-img"
                  src={eachItem.logo}
                  alt={eachItem.name}
                />
                <div>
                  <h1 className="client-slick-heading">
                    {eachItem.institution}
                  </h1>
                  <p className="client-slick-name">{eachItem.name}</p>
                </div>
              </div>

              <p>{eachItem.description}</p>
              <div className="client-slick-rating-icon-container">
                <img
                  className="client-slick-google-icon"
                  src="https://res.cloudinary.com/dssfuaou4/image/upload/v1709900503/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/google_icon_az0ogl.webp"
                  alt="google"
                />
                <p>
                  {eachItem.rating} <IoStarSharp size={18} />
                </p>
              </div>
            </div>
          </li>
        ))}
      </Slider>
    </ul>

    <MyRecords />
  </div>
);

export default ClientTestimonials;
