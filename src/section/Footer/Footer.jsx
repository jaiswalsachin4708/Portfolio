import "./footer.css"
import { FaRegCopyright } from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <h4 className="copy">Copyright </h4>
        <FaRegCopyright />
      </div>
      <div className="footer name">
        <h4> Jaiswalsachin</h4>
        <h5 className="copy">, All Rights Reserved</h5>
      </div>
    </footer>
  )
}

export default Footer
