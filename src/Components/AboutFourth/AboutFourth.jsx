import "./AboutFourth.css";
import seventysevensection from "../../image/seventy-sevensection.png";


const AboutFourth = () => {
  return (
    <div className="about_fourth_container">
      <div className="about_fourth_subcontainer">
        <div className="about_fourth_top">
          <div className="about_fourth_top_first_text">
            According To The World Health{" "}
          </div>
          <div className="about_fourth_subwrapper">
            <div className="about_fourth_top_second_text">Organization</div>
            <div className="about_fourth_top_third_text">
              Non Communicable Diseases(NCDs) kills 41 million people yearly
              which is equivalent to 71% of all deaths globally.
            </div>
          </div>
        </div>
        <div className="about_fourth_middle">
          <div className="about_fourth_middle_list">
            <div>
              <span className="seventy-seven">77</span><span className="percent">%</span> of all the NCDs occur in low and middle income countries and
              in Nigeria, it accounts for 29% of all deaths
            </div>
          </div>

          <div className="about_fourth_middle_list">
            <span className="about_fourth_bullets"></span>
            <div>
              There are millions of Nigerians who live with NCDs especially
              hypertension and diabetes but are yet to be diagnosed and treated.
            </div>
          </div>

          <div className="about_fourth_middle_list">
            <span className="about_fourth_bullets"></span>
            <div>
              This puts them at risk of complications and eventually causing end organ damage and deaths
            </div>
          </div>

          <div className="about_fourth_middle_list">
            <span className="about_fourth_bullets"></span>
            <div>
              There is need for proper enlightenment on the non-communicable
              diseases, access to screening and treatment.
            </div>
          </div>
        </div>

        <div className="about_fourth_bottom">
          <div className="about_fourth_image_container">
            <img className="about_fourth_image" src={seventysevensection}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFourth;
