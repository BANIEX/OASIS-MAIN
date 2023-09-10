import "./Support.css "
import Ellipse296 from "../../image/Ellipse 296.png";
import Ellipse295_1 from "../../image/Ellipse 295 (1).png"
import Image6 from "../../image/Ellipse268.png"


const Support = () => {
  return (
    <div>

      

          <div className="support-middle">
        <div className="support-support1">Support Us</div>
        <div className="support-process">Please go through the following <br/> process to support</div> <br/> <br/>

        <div className="support-middlechild">
            <div className="support-middlechild1">
                <div className="support-left">
                    
                    <div>
                        <div className="support-rightmedia"><img src={Ellipse296} alt="children"/></div>
                    </div>

       
                    
                    <div className="support-support2"> How you can support?</div>
                    <div className="support-support3">You can support us by being volunteers or by your donation.</div>

                   
                    <div className="support-Volunteer1">To Volunteer</div> <br/>
                    <div className="support-Volunteer2">To Volunteer kindly fill in the form below,providing your <br/> name and email.Then click submit. <br/> <br/>
                                            An email will be sent to you concerning what step <br/> to take next.
                    </div> 
                    <br/> <br/>
                </div>
               
                <div>
                    <div className="support-right"><img src={Ellipse296} alt="children"/></div>
                </div>
            </div>

            <div className="support-middlechild2">
                <div className="support-left">
                    <div className="support-first">
                        <p className="support-tag">Enter Full Name</p>
                        <input type="text" className="support-input1"/>
                    </div>
        
                    <div className="support-second">
                        <p className="support-tag">Email</p>
                        <input type="text" className="support-input1"/>
                    </div> 
                    
                    <div className="support-submit">Submit</div> <br/><br/>
                </div>

                


                <div className="support-left">
                    
                    <div className="support-rightmedia">
                        <div className="support-rightmedia adults"> <img src={Ellipse295_1} alt="adults"/></div>
                    </div>

                    <div className="support-whatsapplink">

                        <div className="support-whatsapp1">Or Click whatsapp Link</div>
                        <div className="support-whatsapp2">
                        <img src={Image6} alt="whatsapp"/>
                        </div>
                    </div>
                    <p className="support-helo"> <a href="wa.link@oasisinitiative.com/web">wa.link@oasisinitiative.com/web</a></p>
                </div>
        </div>
















        
            


            <div className="support-middlechild3">
                <div className="support-left">
                    <div className="support-donate">You can also show your <br/> support by donating</div> <br/> <br/>

                    <div className="support-submit2">Donate</div> 
                </div>

                

                <div className="support-ok">
                    <div className="support-right"> <img src={Ellipse295_1} alt="adults"/></div>
                </div>
    
                
            </div>

        </div>



        
    </div>


      


























    </div>
  )
}

export default Support