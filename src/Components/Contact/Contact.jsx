import "./Contact.css"
import MailImage from "../../image/mail.png"
import LinkedInImage from "../../image/linkedIn.png"
import InstagramImage from "../../image/instagram.png"
import TwitterImage from "../../image/twitter.png"
import FacebookImage from "../../image/facebook.png"



const Contact = () => {
  return (
    <div>
      <div className="middle">
        <div className="up">
          <div className="plus">+</div>
          <div className="contact">Contact Us</div>
          <div className="form">
            Get in touch with us by filling the below form
          </div>

          <div className="plus" id="plus1">
            +
          </div>
        </div>

        <div className="down">
          <div className="contact_left">
            <div className="contact_leftchild">
              <p className="contact_touch">Get in touch</p>
              <div className="contact_first">
                <p className="contact_tag">Enter Full Name</p>
                <input type="text" className="contact_input1" />
              </div>

              <div className="contact_second">
                <div className="contact_second1">
                  <p className="contact_tag">Email</p>
                  <input type="text" className="contact_input2" />
                </div>
                <div className="contact_second2">
                  <p className="contact_tag">Phone Number</p>
                  <input type="text" className="contact_input3" />
                </div>
              </div>

              <div className="contact_third">
                <p className="contact_tag">Subject</p>
                <input type="text" className="contact_input4" />
              </div>

              <div className="contact_fourth">
                <p className="contact_tag">Message</p>
                <input type="text" className="contact_input5" />
              </div>

              <div className="contact_submit">Submit</div>

              <div className="media">
                <p className="via">Contact us via</p>
                <div className="mediaicons">
                  <div className="mail1">
                    <img src={MailImage} className="gmail" alt="mail" />
                  </div>
                  <div className="linkedln">
                    <img src={LinkedInImage} alt="linkedln" className="linke" />
                  </div>
                  <div className="instagram">
                    <img
                      src={InstagramImage}
                      alt="instagram"
                      className="insta1"
                    />
                  </div>
                  <div className="twitter">
                    <img src={TwitterImage} alt="twitter" className="tweet" />
                  </div>
                  <div className="facebook">
                    <img src={FacebookImage} alt="facebook" className="fb" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact_right">
            <div className="contact1">Contact</div>
            <div className="mail1">
              <img src={MailImage} className="gmail" alt="mail" />{" "}
              <span>Email@gmail.com</span>
            </div>
            <div className="linkedln">
              <img src={LinkedInImage} alt="linkedln" className="linke" />{" "}
              <span>Linkedln</span>
            </div>
            <div className="instagram">
              <img src={InstagramImage} alt="instagram" className="insta1" />{" "}
              <span>Instagram</span>
            </div>
            <div className="twitter">
              <img src={TwitterImage} alt="twitter" className="tweet" />{" "}
              <span>Twitter</span>
            </div>
            <div className="facebook">
              <img src={FacebookImage} alt="facebook" className="fb" />{" "}
              <span>Facebook</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact