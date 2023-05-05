import "./skills.css"

const Skills = () => {
  return (
    <section id="Skills">
      <div className="container skill_container">
        <h2 className="heading_name">Skills</h2>
        <div className="skill-display">
          <div className="skill_left">
            <div className="skill-box">
              <span className="title">HTML</span>
              <div className="skill-bar">
                <span className="skill-per html">
                  <span className="tooltip">85%</span>
                </span>
              </div>
            </div>

            <div className="skill-box">
              <span className="title">CSS</span>
              <div className="skill-bar">
                <span className="skill-per css">
                  <span className="tooltip">75%</span>
                </span>
              </div>
            </div>

            <div className="skill-box">
              <span className="title">JAVASCRIPT</span>
              <div className="skill-bar">
                <span className="skill-per javascript">
                  <span className="tooltip">55%</span>
                </span>
              </div>
            </div>

            <div className="skill-box">
              <span className="title">REACT JS</span>
              <div className="skill-bar">
                <span className="skill-per reactjs">
                  <span className="tooltip">45%</span>
                </span>
              </div>
            </div>

            <div className="skill-box">
              <span className="title">NODE JS</span>
              <div className="skill-bar">
                <span className="skill-per nodejs">
                  <span className="tooltip">35%</span>
                </span>
              </div>
            </div>
          </div>
          <div className="skill_left">
            <div className="skill-box">
              <span className="title">C</span>
              <div className="skill-bar">
                <span className="skill-per c">
                  <span className="tooltip">70%</span>
                </span>
              </div>
            </div>

            <div className="skill-box">
              <span className="title">C++</span>
              <div className="skill-bar">
                <span className="skill-per cpp">
                  <span className="tooltip">60%</span>
                </span>
              </div>
            </div>

            <div className="skill-box">
              <span className="title">JAVA</span>
              <div className="skill-bar">
                <span className="skill-per java">
                  <span className="tooltip">55%</span>
                </span>
              </div>
            </div>

            <div className="skill-box">
              <span className="title">PYTHON</span>
              <div className="skill-bar">
                <span className="skill-per python">
                  <span className="tooltip">35%</span>
                </span>
              </div>
            </div>


            <div className="skill-box">
              <span className="title">DSA</span>
              <div className="skill-bar">
                <span className="skill-per dsa">
                  <span className="tooltip">35%</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills








