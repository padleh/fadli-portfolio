import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import linkedin_icon from '../../assets/linkedin_icon.svg'
import github_icon from '../../assets/github_icon.svg'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "81109411-3fce-467d-84af-7857f8bb7571");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };

  return (
    <div id='contact' className='contact' data-aos="fade-up">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <div className="contact-left"></div>
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk!</h1>
            <p>I'm currently available to take on new projects, so feel free to contact me!</p>
            <div className="contact-details">
              <div className="contact-socials">
                <div className="contact-detail">
                  <a href="https://www.linkedin.com/in/muhammad-fadli7/" target='_blank' rel='noopener noreferrer'>
                    <img src={linkedin_icon} alt="" />
                  </a>
                </div>
                <div className="contact-detail">
                  <a href="https://github.com/padleh" target='_blank' rel='noopener noreferrer'>
                    <img src={github_icon} alt="" />
                  </a>
                </div>
              </div>
                <div className="contact-detail-email">
                  <img src={mail_icon} alt="" /> <p>mfadli1272@gmail.com</p>  
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className="contact-submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
