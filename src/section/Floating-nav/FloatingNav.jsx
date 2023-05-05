import "./floating-nav.css"
import { AiFillHome } from "react-icons/ai"
import { MdWindow } from "react-icons/md"
import { HiLightBulb } from "react-icons/hi"
import { BsFillPersonFill } from "react-icons/bs"
import { AiFillMessage } from "react-icons/ai"

const FloatingNav = () => {
  return (
    <div className="floating_icon">
      <a href="#"><AiFillHome /></a>
      <a href="#about"> <BsFillPersonFill /></a>
      <a href="#Skills"><HiLightBulb /></a>
      <a href="#portfolio"> <MdWindow /></a>
      <a href="#contact"><AiFillMessage /></a>
    </div>
  )
}

export default FloatingNav
