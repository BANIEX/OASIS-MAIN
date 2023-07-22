// import logo from '../../image/IMG-20230314-WA0010 25.png'
// import {RiFacebookFill} from 'react-icons/ri'
// import {BsTwitter} from 'react-icons/bs'
// import {BsLinkedin} from 'react-icons/bs'
import './Footer.css'
// import Ellipse268 from '../../image/Ellipse268.png'
import logo from '../../image/logo.jpeg'


const Footer = () => {
  return (
    <div className="updiv3">
       
       
        <div className="footer">
            <div className="subdiv3left">
                <div className="subdiv3leftpikin">
                    <p className="the">THE</p>
                    <div className="oasisimage2">
                        {/* <img src="./ imagesoasis/oasislogo.png" alt="oasislogo"> */}
                         <img className='logo' src={logo} alt='pic'/>

                        <div className="initiative">INITIATIVE</div>  
                    </div>
                    
                    <p className="note">A non-profit organization committed to reducing mortality from the Non-communicable Diseases (NCDs).A non-profit  organization committed to reducing mortality .
                    </p>
        
                    <div className="icons2">
                        <i className="fa-brands fa-facebook"></i> <span>
                        <i className="fa-brands fa-twitter"></i></span> <span>
                        <i className="fa-brands fa-linkedin"></i></span>
                    </div>

                </div>
 
            </div>
            
            
            <div className="subdiv3right">
                <div className="leftlist">
                    <p className="h0">Company</p>
                    <p className="h1">Home</p>
                    <p className="h2">About Us</p>
                    <p className="h3">Contact Us</p>
                    <p className="h4">Support</p>
                    <p className="h5">Donate</p>
                </div>
                
    
                <div className="rightlist">
                    <p className="h0">Other options</p>
                    <p className="h1">Volunteer</p>
                    <p className="h2">About Us</p>
                    <p className="h3">Contact Us</p>
                    <p className="h4">Support</p>
                    <p className="h5">Donate</p>
                </div>
            </div>


       
            
        </div>

        <div className="below">
            <p className="white">
                Copyright Reserved @ 2023. The Oasis Initiative
            </p>
        </div>

    </div>
  )
}

export default Footer