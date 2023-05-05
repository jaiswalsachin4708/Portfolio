import "./header.css"
import pic2 from "../../img/pic2.png"
import data from "./data"
import Typewriter from 'typewriter-effect';

const Header = () => {

  return (
    <header id="header">
      <div className="container header_container">
        <div className="header_profile">
          <img src={pic2} alt="" />
        </div>
        <div className="header_type">
          <h1 className="name">Sachin Jaiswal</h1>
          <h2 className="typed">I'm a<span className="type"><Typewriter
              options={{
                strings: ["CSE STUDENT", "WEB DEVELOPER", "CODER"],
                typeSpeed: 40,
                backSpeed: 30,
                startDelay: 1000,
                backDelay: 1000,
                loop: true,
                autoStart:true
              }}
            /></span></h2>
          <div className="header_app">
            {data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
            }
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header
