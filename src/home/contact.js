import './style.css';
function Contact()
{
    return(
        <div className="contact" id="contact">
          <div className="contact-form">
            <div className="left">
              <h1>Contact Us</h1>
              <input type="text" placeholder="Your Name"/>
              <input type="text" placeholder="Your Email"/>
              <label className="checkbox-label">
                <input type="checkbox"/> <h6>reply me by Email</h6>
              </label>
            </div>
            <div className="right">
              <textarea placeholder="Your Message"></textarea>
              <a href="#" className="submit-button">Submit</a>
            </div>
          </div>
        </div>
    )
}
export default Contact;