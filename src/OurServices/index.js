import { Component } from "react";
import "./index.css";
import React from "react";
import Wave from "react-wavify";

const cardData = [
  {
    id: 1,
    heading: "Web Devolopement",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709550865/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/Service-01_xaluqw.webp",
    name: "Web Design & Development",
    descrption:
      "Anyone can create a website, but in our web development company, we can design and develop a website that reaches their target audience.",
    color1: "#ff9f43",
    color2: "#d961e7",
  },
  {
    id: 2,
    heading: "Graphic Designing",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709616822/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/Service-04_ly91xz.webp",
    name: "Graphic Designing",
    descrption:
      "A great designer can communicate with a customer without expressing any words. Our team of graphic designers can do what it takes to deliver amazing results.",
    color1: "#628dca",
    color2: "#2ee3ee",
  },
  {
    id: 3,
    heading: "Digital Marketing",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709616932/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/Service-02_alccac.webp",
    name: "Digital Marketing",
    descrption:
      "Drives more quality traffic by increasing conversion rates and reaping greater ROI with our best digital marketing agency.",
    color1: "#ff9f43",
    color2: "#d961e7",
  },
  {
    id: 4,
    heading: "Hosting Services",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709550758/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/Service-03_1_h3gvro.webp",
    name: "Hosting Services",
    descrption:
      "High-quality shared hosting services with the most appealing features, making us the best choice for small and medium-sized businesses.",
    color1: "#628dca",
    color2: "#2ee3ee",
  },
  {
    id: 5,
    heading: "Gaming Development",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709550757/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/gaming_jh3cw8.webp",
    name: "Gaming Development",
    descrption:
      "Our game development team uses customer specifications to create the best game applications possible while using the most recent technologies.",
    color1: "#ff9f43",
    color2: "#d961e7",
  },
  {
    id: 6,
    heading: "IOT Solutions",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709550757/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/IOT-solutions_ppiyco.webp",
    name: "IOT Solutions",
    descrption:
      "It helps to achieve your goals with minimal effort. Our powerful IoT app solutions can help your business grow and reach your target customers quickly.",
    color1: "#628dca",
    color2: "#2ee3ee",
  },
  {
    id: 7,
    heading: "Machine Learning",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709550757/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/machine-learning_omvv8m.webp",
    name: "Machine Learning Services",
    descrption:
      "Our devoted specialist teams walk you through every step of the procedure so you can get the most out of using technology and machine learning.",
    color1: "#ff9f43",
    color2: "#d961e7",
  },
  {
    id: 8,
    heading: "Recruitment Services",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709550757/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/recruitment1114_v1wfue.webp",
    name: "Recruitment Services",
    descrption:
      "We have the necessary experience to source qualified candidates from both passive candidates and active job seekers.",
    color1: "#628dca",
    color2: "#2ee3ee",
  },
  {
    id: 9,
    heading: "Cloud Consulting",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709550756/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/cloud-con_qzxyd3.webp",
    name: "Cloud Consulting Services",
    descrption:
      "Our experts can help you optimize your operations by determining where workloads should live, handling governance and compliance.",
    color1: "#ff9f43",
    color2: "#d961e7",
  },
  {
    id: 10,
    heading: "Application Development",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709550757/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/application_ivzujk.webp",
    name: "Application Development",
    descrption:
      "These scalable, flexible, and interoperable applications can aid in the efficient operation of your medical/healthcare business.",
    color1: "#628dca",
    color2: "#2ee3ee",
  },
  {
    id: 11,
    heading: "Software Development",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709550758/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/software_viun5q.webp",
    name: "Software Development Services",
    descrption:
      "We provide full-cycle development services that enable businesses to be agile, forward-thinking, and high-performing.",
    color1: "#ff9f43",
    color2: "#d961e7",
  },
  {
    id: 12,
    heading: "VR & AR",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709550759/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/VR-AR_odxadi.webp",
    name: "VR & AR",
    descrption:
      "We go through creating 3D BIM models to help our customers create better workflows and designs while improving collaboration and lowering costs.",
    color1: "#628dca",
    color2: "#2ee3ee",
  },
];

class OurServices extends Component {
  state = { description: "", btnText: "Learn More", searchedId: "" };

  onMouseOverCard = (event) => console.log(event._targetInst.key);

  onMouseOutCard = (event) => console.log(event._targetInst.key);

  render() {
    return (
      <>
        <Wave
          fill="url(#gradient)"
          paused={false}
          style={{ display: "flex" }}
          options={{
            height: 15,
            amplitude: 60,
            speed: 0.25,
            points: 4,
          }}
        >
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(80)">
              <stop offset="50%" stopColor="#0059ff" />
              <stop offset="90%" stopColor="#00827f" />
            </linearGradient>
          </defs>
        </Wave>

        <div className="services-bg-container">
          {/* details block */}

          <div className="services-bottom-container">
            <div className="services-bottom-hed-desc-container">
              <h1 className="services-bottom-heading">Our Services</h1>
              <p className="services-bottom-description">
                Being a leading software development company, our main goal is
                to make you lead your field of business through our services. we
                offer full-cycle development services that enable businesses to
                be agile, futuristic, and high performing.
              </p>
            </div>
          </div>

          {/* our services cards section  */}
          <ul className="services-cards-container">
            {cardData.map((eachCard) => (
              <li
                onMouseEnter={this.onMouseOverCard}
                onMouseLeave={this.onMouseOutCard}
                key={eachCard.id}
                style={{
                  background: `linear-gradient(to right, ${eachCard.color1} , ${eachCard.color2})`,
                }}
                className="services-each-card-container"
              >
                <h1 className="each-card-heading">{eachCard.heading}</h1>
                <img
                  className="each-card-image"
                  src={eachCard.image}
                  alt="logo"
                />
                <button className="each-card-button" type="button">
                  Learn More
                </button>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default OurServices;
