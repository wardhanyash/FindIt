import main from "../assets/images/main-alternative.svg";
import Wrapper from "../assets/wrappers/LandingPage";
// import { Logo } from "../components";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        {/* <Logo /> */}
        <h1 style={{ color: "#0072b1" }}>FindIt</h1>
      </nav>
      <div className="container page">
        {/* info */}
        <img src={main} alt="job hunt" className="img main-img" />
        <div className="info">
          <h1>Track your Job status </h1>
          <p>
            FindIt makes it easy to track status of your jobs. You can track
            your upcoming job interviews, pending jobs and declined jobs.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Sign Up
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
