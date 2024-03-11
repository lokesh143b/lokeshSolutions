import "./index.css";
import { FaUserCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const data = [
  {
    id: 1,
    name: "Tom Black",
    date: "2023-11-13",
    description1: "Why Digital Marketing Is Essential To Brand Building?",
    description2:
      "For all businesses, no matter how big or small, digital marketing plays a key role. Before finalizing the communication...",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709978841/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/latest%20stories/20231113063559883_eidltt.jpg",
  },
  {
    id: 2,
    name: "Tom Black",
    date: "2023-11-13",
    description1: "The Importance Of Maintaining A Social Media Presence",
    description2:
      "Creating a social media presence online is one of the most effective strategies to market your business to customers. Social...",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709978841/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/latest%20stories/20231113063745239_iqffev.jpg",
  },
  {
    id: 3,
    name: "Tom Black",
    date: "2023-11-13",
    description1:
      "5 Reasons Why Websites Are Still Important in the Social Media Era",
    description2:
      "Today, businesses rely on social media platforms like Facebook, Twitter, and Instagram for brand visibility. But it becomes...",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709978841/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/latest%20stories/20231113063933250_k6nbeq.jpg",
  },
];

const LatestStories = () => (
  <div className="latest-stories-bg-container">
    <h1 className="latest-stories-heading">Latest Stories</h1>
    <div className="latest-stories-cards-container">
      {data.map((eachItem) => (
        <div className="latest-stories-each-card-container">
          <img
            className="latest-stories-each-card-img"
            src={eachItem.image}
            alt={eachItem.name}
          />
          <div className="latest-stories-each-card-date-name">
            <div className="latest-stories-each-card-user-name">
              <FaUserCircle color={"#337ab7"} size={25} />
              <h1 className="latest-stories-each-card-name">{eachItem.name}</h1>
            </div>

            <h1 className="latest-stories-each-card-date">{eachItem.date}</h1>
          </div>
          <p className="latest-stories-each-card-description1">
            {eachItem.description1}
          </p>
          <p className="latest-stories-each-card-description2">
            {eachItem.description2}
          </p>
          <button type="button" className="latest-stories-each-card-btn">
            Learn More &nbsp; <FaArrowRightLong />
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default LatestStories;
