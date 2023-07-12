import "./AboutObjectives.css"
import Ellipse268 from '../../image/Ellipse268.png'

const AboutObjectives = () => {
  return (
    <div className="ourobjective_container">
      <div className="ourobjective_subcontainer">
        <div className="ourobjective_top">
        <div className="ourobjective_text">
          Our Objectives
        </div>
      </div>
      <div className="ourobjective_bottom">
        <div className="ourobjective_left">
          <div className="ourobjective_left_image">
            <img src={Ellipse268} alt='pic'/>

          </div>
        </div>
        <div className="ourobjective_right">
          <div className="ourobjective_right_subcontainer">
            <div className="objective_one">
              <div className="objective_one_number">1</div>
              <div className="objective_one_content">Using the primary healthcare approach, organize at least two community outreaches in a year to ensure screening and management.</div>
            </div>
            <div className="objective_two">
              <div className="objective_two_number">2</div>
              <div className="objective_two_content">
                Helping the masses reduce the risk factors associated with non-communicable diseases to reduce mortality and morbidity.
              </div>
            </div>
            <div className="objective_three">
              <div className="objective_three_number">3</div>
              <div className="objective_three_content">
                Creating awareness by periodically enlightening the public on the various NCDs through effective use of social media and on site to communities, schools and religious organizations. 
              </div>
            </div>
          

          </div>

        </div>
      </div>

      </div>

    </div>
  )
}

export default AboutObjectives