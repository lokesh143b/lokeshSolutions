import "./index.css";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagramSquare,
  FaYoutube,
} from "react-icons/fa";

import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

const Footer = () => (
  <div className="footer-container">
    <div className="footer-shape-top"></div>
    <div className="footer-middle-block">
      <div className="footer-address-container">
        <img
          className="footer-logo"
          src="https://res.cloudinary.com/dssfuaou4/image/upload/v1709550759/Lokesh%20Software%20Solutions/Lokesh%20Solutions/Lokesh%20Solutions/Lokesh_Solutions_small_Logo_lfukhp.png"
          alt="logo"
        />
        <p>
          Do.No 13-6-7, Near Durgamma Temple
          <br /> Kondapalli Vari Street ,
          <br /> Mandapeta, Andhra Pradesh ,
          <br />
          533308
        </p>
        <hr className="line" />
        <div className="follow-us-container">
          <h1 className="follow-us-heading">Follow Us</h1>
          <ul className="follow-us-list-container">
            <li>
              <FaFacebook size={30} />
            </li>
            <li>
              <FaTwitter size={30} />
            </li>
            <li>
              <FaLinkedin size={30} />
            </li>
            <li>
              <FaInstagramSquare size={30} />
            </li>
            <li>
              <FaYoutube size={30} />
            </li>
          </ul>
        </div>
      </div>

      {/* services block */}
      <div className="footer-services-container">
        <h1 className="footer-services-heading">OUR SERVICES</h1>
        <ul className="footer-services-list-container">
          <li>Web Development</li>
          <li>Web Development</li>
          <li>Graphic Designing</li>
          <li>Digital Marketing</li>
          <li> Hosting Services</li>
          <li>Gaming Development</li>
          <li> Iot Solutions</li>
          <li> Recruitment Services </li>
          <li>Cloud Consulting</li>
          <li>App Development</li>
          <li>Software Development</li>
          <li> Machine Learning</li>
          <li> AR & VR</li>
        </ul>
      </div>

      {/* company */}
      <div className="footer-company-container">
        <h1 className="footer-company-heading">Company</h1>
        <ul className="footer-company-list-container">
          <li>About us </li>
          <li>Team</li>
          <li> Careers </li>
          <li>Contact Us </li>
          <li>Blogs </li>
          <li> F.A.Q'S</li>
        </ul>
      </div>

      <div className="footer-policies-container">
        <ul className="footer-policies-list-container">
          <h1 className="footer-policies-heading">POLICIES</h1>

          <li>Privacy Policies</li>
          <li>Terms and Conditions</li>
        </ul>
        <ul className="footer-contact-list-container">
          <h1 className="footer-contact-heading">CONTACT US</h1>
          <li className="contact-us-mail-phone-container ">
            <IoIosMail size={22} />
            <p className="contact-us-mail-phone">
              srirangamlokeswararao@gmail.com
            </p>
          </li>
          <li className="contact-us-mail-phone-container">
            <FaPhone size={20} />
            <p className="contact-us-mail-phone"> +91 6303300378</p>
          </li>
        </ul>
      </div>

      {/* copy right */}
    </div>
    <div className="footer-copy-right">
      <p>© 2023 All Rights Reserved To Lokesh Software Solutions Pvt Ltd.</p>
    </div>
  </div>
);

export default Footer;
