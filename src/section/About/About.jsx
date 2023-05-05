import "./about.css"
import pic3 from "../../img/pic3.jpg"
import CV from "../../img/resume.pdf"
import {HiDownload} from "react-icons/hi"

const About = () => {
  return (
    <section id="about">
      <div className="container about_container">
        <div className="about_left">
          <div className="about_pic">
            <img src={pic3} alt="about image" />
          </div>
        </div>
        <div className="about_right">
          <h2>About Me</h2>
          <p>My self sachin jaiswal. I am a third year undergraduate student of the
            Department of Computer Science and Engineering, Academy of Technology Hooghly, kolokata, India.
            I was born in Bhabua, Bihar. I like watching movies, playing video games and I love music. I have learnt a range of Programming Languages such as C, C++, JAVA. I have also developed
            some Website ( links can be found in PortFolio section).</p>
          <a href={CV} download className="btn primary">Download CV <HiDownload/></a>
        </div>

      </div>
    </section>
  )
}

export default About
