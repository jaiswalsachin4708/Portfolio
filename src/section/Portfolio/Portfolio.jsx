import "./portfolio.css"
import data from "./data.js"

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container portfolio_container">
      <h2 className="heading_portfolio">Portfolio</h2>
      <div className="portfolio_in">
        {
          data.map(({ id, Image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio_item">
                <div className="portfoilo_img">
                  <img className="p_image" src={Image} alt={title} />
                  <h3 className="Portfolio_title">
                    {title}
                  </h3>
                  <div className="over_img">
                    
                    <div className="portfolio_btn">
                      <a href={github} className="btn" target="_blank">github</a>
                      <a href={demo} className="btn primary" target="_blank">demo</a>
                    </div>
                  </div>
                </div>
              </article>
            )
          })
        }
        </div>
      </div>
    </section>
  )
}

export default Portfolio
