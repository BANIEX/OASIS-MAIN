import "./AboutSecond.css";
import Ellipse268 from "../../image/Ellipse268.png";

const AboutSecond = () => {
  return (
    <div className="about_second_container">
      <div className="about_second_subcontainer">
        <div className="about_second_left">
          <div className="about_second_left_maintext">More About Us</div>
          <div className="about_second_left_subtext">
            Our passion was borne out of the need to reduce the high rates of
            death and enormous burden that stems from a ravaging invasion of the
            non communicable diseases in Nigeria.
          </div>
        </div>
        <div className="about_second_right">
          <img src={Ellipse268} alt="pic" />
        </div>
      </div>
    </div>
  );
};

export default AboutSecond;
