import { Component } from "react";
import "./index.css";
import { FaLongArrowAltRight } from "react-icons/fa";

class Home extends Component {
  state = { heading: "We Are Unique" };

  componentDidMount() {
    setInterval(() => {
      this.setState({ heading: "We Are Unique" });
    }, 2000);

    setInterval(() => {
      this.setState({ heading: "Do Yoy Want Your Work To Be Done?" });
    }, 3000);

    setInterval(() => {
      this.setState({ heading: "Get Passion You Want" });
    }, 4000);
  }
  render() {
    const { heading } = this.state;
    return (
      <div className="home-container">
        <p className="home-welcome-note">
          Welcome to Lokesh Software Solutions
        </p>
        <h1 className="home-changing-heading">{heading}</h1>

        <p className="home-description ">
          Makers Mind Software Solutions is to be the leading provider of
          innovative and intuitive software solutions that drive success for our
          clients.
        </p>
        <div>
          <button className="transparent-buttons" type="button">
            Request Quote
          </button>
          <button className="transparent-buttons" type="button">
            Learn More <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
