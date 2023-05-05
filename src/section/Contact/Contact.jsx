import "./contact.css"
import { GrMail } from "react-icons/gr"
import { BsMessenger } from "react-icons/bs"
import { IoLogoWhatsapp } from "react-icons/io"
import { HiLocationMarker } from "react-icons/hi"

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
          <h2 className="contact_heading">Contact Me</h2>
        <div className="contact_container">
          <div className="left_contact">
            <div className="port_map">
              <article className="contact_option">
                <GrMail className="app" />
                <h4>Email</h4>
                <a href="mailto:Sachinjaiswal4708@gmail.com" target="_blank">Send</a>
              </article>
              <article className="contact_option">
                <BsMessenger className="app" />
                <h4>Messenger</h4>
                <a href="mailto:Sachinjaiswal4708@gmail.com" target="_blank">Send</a>
              </article>
              <article className="contact_option">
                <IoLogoWhatsapp className="app" />
                <h4>Whatsapp</h4>
                <a href="https://api.whatsapp.com/send?phone=+9335929498" target="_blank">Send</a>
              </article>
            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.9510992636287!2d88.37623097498856!3d22.952027979223296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8930c72830a8d%3A0x1f11c987f77b071e!2sAshirwad%20Boy&#39;s%20Hostel!5e0!3m2!1sen!2sin!4v1683294211758!5m2!1sen!2sin"
                height={200}
                width={300}
                style={{
                  border: "0"
                }}
                allowfullscreen=""
                loading="lazy" referrerpolicy="no-referrer-when-downgrade">
              </iframe>
              <div className="location">
                <HiLocationMarker className="HiLocationMarker" />
                <h4>My Address</h4>
              </div>
            </div>
          </div>
          <form className="port_input">
            <input type="text" name="name" placeholder="Enter Your Name" required />
            <input type="text" name="email" placeholder="Enter Your Email" required />
            <textarea name="message" rows={7} placeholder="Enter Your Message" required />
            <button type="submit" className="btn primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
