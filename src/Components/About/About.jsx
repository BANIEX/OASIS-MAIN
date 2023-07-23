import AboutFirst from '../AboutFirst/AboutFirst'
import AboutFourth from '../AboutFourth/AboutFourth'
import AboutObjectives from '../AboutObjectives/AboutObjectives'
import AboutSecond from '../AboutSecond/AboutSecond'

const About = () => {
  return (
    <div className='header'>
      <AboutFirst/>
      <AboutSecond/>
      <AboutObjectives/>
      <AboutFourth/>
    </div>
  )
}

export default About