import AboutFirst from '../AboutFirst/AboutFirst'
import AboutFourth from '../AboutFourth/AboutFourth'
import AboutObjectives from '../AboutObjectives/AboutObjectives'
import AboutSecond from '../AboutSecond/AboutSecond'
import "./About.css"

const About = () => {
  return (
    <div className='header__about'>
      <AboutFirst/>
      <AboutSecond/>
      <AboutObjectives/>
      <AboutFourth/>
    </div>
  )
}

export default About