import "./AboutFirst.css"
import Ellipse266 from '../../image/Ellipse266.png'
import Ellipse265 from '../../image/Ellipse265.png'
import Ellipse289 from '../../image/Ellipse289.png'



const AboutFirst = () => {
  return (
    <div className="about_first_layer">

      <div className="about_first_left">
        <div className="about_first_left_image">
          <img src={Ellipse266} alt='pic'/>

        </div>
      </div>


      <div className="about_first_middle">
        <div className="about_first_middle_subcontainer">
          <div className="about_first_middle_maintext">About Us</div>
          <div className="about_first_middle_subtext">The Oasis Initiative is a fast rising, 
          blossoming not-for-profit organization working to reduce
          mortality from Non-communicable diseases (NCD) in Nigeria.
         </div>
        </div>
      </div>






      <div className="about_first_right">
        <div className="about_first_right_image">
          <img src={Ellipse265} alt='pic'/>

        </div>

      </div>

      <div className="about_first_down">
        <img src={Ellipse289}/>

      </div>

    </div>
  )
}
export default AboutFirst