import "./index.css";
import CountUp from "react-countup";

const data = [
  {
    id: 1,
    count: 5,
    symbol: "+",
    achivement: "Years Experience",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709920996/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/Records/startup_w9woyi.svg",
  },
  {
    id: 2,
    count: 161,
    symbol: "+",
    achivement: "Talented Squad",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709920996/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/Records/team_rgbpdw.svg",
  },
  {
    id: 3,
    count: 113,
    symbol: "+",
    achivement: "Apps Developed",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709920996/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/Records/mobile_fgrm79.svg",
  },
  {
    id: 4,
    count: 100,
    symbol: "%",
    achivement: "Projects Delivered",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709920996/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/Records/computers_qyqr4z.svg",
  },
  {
    id: 5,
    count: 65,
    symbol: "+",
    achivement: "Countries Served",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709920996/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/Records/world_bl30f4.svg",
  },
  {
    id: 6,
    count: 100,
    symbol: "%",
    achivement: "Client Satisfaction",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709920996/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/Records/deal_k5sy1e.svg",
  },
];

const MyRecords = () => (
  <div className="records-page-bg-container">
    {data.map((eachItem) => (
      <div key={eachItem.id} className="records-card-container">
        <img
          className="records-card-img"
          src={eachItem.image}
          alt={eachItem.achivement}
        />
        <h1 className="records-card-count">
          <CountUp end={eachItem.count} />
          <span>{eachItem.symbol}</span>
        </h1>
        <p className="records-card-name">{eachItem.achivement}</p>
      </div>
    ))}
  </div>
);

export default MyRecords;
