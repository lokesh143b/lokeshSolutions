import "./index.css";

const technologies = [
  {
    id: 1,
    name: "Andriod",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709803183/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/technologies%20icons/brand-icon-1_hylgdp.png",
  },
  {
    id: 2,
    name: "GitHub",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709803185/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/technologies%20icons/git_a1vjyn.png",
  },
  {
    id: 3,
    name: "HTML-5",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709803185/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/technologies%20icons/HTML5_kera85.png",
  },
  {
    id: 4,
    name: "Nodejs",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709803189/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/technologies%20icons/node_js_mxaxeh.png",
  },
  {
    id: 5,
    name: "Python",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709803190/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/technologies%20icons/python_eok9lz.png",
  },
  {
    id: 6,
    name: "React",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709803190/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/technologies%20icons/React_JS_rsf0rd.png",
  },
  {
    id: 7,
    name: "Ajax",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709803184/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/technologies%20icons/Ajax_z1es3w.png",
  },
  {
    id: 8,
    name: "Angular",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709803184/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/technologies%20icons/Angular_JS_qonmop.png",
  },
  {
    id: 9,
    name: "MY SQL",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709803189/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/technologies%20icons/My_SQL_uaaw36.png",
  },
  {
    id: 10,
    name: "Java",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709803185/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/technologies%20icons/java_vu4eez.png",
  },
  {
    id: 11,
    name: "jQuery",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709803188/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/technologies%20icons/jQuery_i61rvg.png",
  },
  {
    id: 12,
    name: "Sass",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709803193/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/technologies%20icons/SASS_raih2i.png",
  },
  {
    id: 13,
    name: "Bootstrap",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709803184/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/technologies%20icons/Bootstrap_k4wpek.png",
  },
  {
    id: 14,
    name: "C++",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709803184/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/technologies%20icons/Csharp_1_s24dni.png",
  },
  {
    id: 15,
    name: "Vue js",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709803193/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/technologies%20icons/Vue_js_tdhnzm.png",
  },
  {
    id: 16,
    name: "Linux",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709803188/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/technologies%20icons/linux_z4i88o.png",
  },
  {
    id: 17,
    name: "Swiftc",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709803193/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/technologies%20icons/swiftc_q5obz0.png",
  },
  {
    id: 18,
    name: "Kotlin",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709803188/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/technologies%20icons/kotlin_zlytmc.png",
  },
  {
    id: 19,
    name: "Shopify",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709803193/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/technologies%20icons/shopify_g4njpm.png",
  },
  {
    id: 20,
    name: "Azure",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709803184/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/technologies%20icons/azure_ic4src.png",
  },
  {
    id: 21,
    name: "AWS",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709803184/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/technologies%20icons/aws_npxsog.png",
  },
  {
    id: 22,
    name: "Rest API",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709803191/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/technologies%20icons/REST_API_lfp45v.png",
  },
  {
    id: 23,
    name: "Adobe XD",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709803184/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/technologies%20icons/adobe-xd_ms0cjo.png",
  },
  {
    id: 24,
    name: "Magento",
    image:
      "https://res.cloudinary.com/dssfuaou4/image/upload/v1709803188/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/technologies%20icons/Magento_vxuh6a.png",
  },
];

const UsingTechnologies = () => (
  <div className="technologies-bg-container">
    <h1 className="technologies-heading">Technologies We Use</h1>
    <div className="technologies-container">
      {technologies.map((eachTechnology) => (
        <div className="technologies-each-card">
          <img
            className="technologies-each-card-image"
            src={eachTechnology.image}
            alt={eachTechnology.name}
          />
          <p>{eachTechnology.name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default UsingTechnologies;
