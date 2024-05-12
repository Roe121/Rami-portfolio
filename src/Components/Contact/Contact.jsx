import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact text-gray-200 bg-gray-900">
      
      <div className="form" data-aos="fade-up">
        <strong>Feel free to ask anything</strong>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea cols="30" rows="4" placeholder="Message"></textarea>
        <button>Send Message</button>
      </div>

      <div className="map" data-aos="fade-up">
        <strong>Where you can find us</strong>
        <p>
          <i className="fa fa-map-marker"></i> 120-240 Rio de Janeiro - State
          of Rio de Janeiro, Brazil{" "}
        </p>
        <div className="line"></div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58756.987128414774!2d-43.385296!3d-23.012325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdb695cd967b7%3A0x171cdd035a6a9d84!2sAv.%20L%C3%BAcio%20Costa%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%20Br%C3%A9sil!5e0!3m2!1sfr!2sus!4v1667431799606!5m2!1sfr!2sus"
          width="600"
          height="450"
          style={{ border: "0", maxWidth: "100%" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  )
}

export default Contact