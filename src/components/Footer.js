import React from 'react';
import './Footer.css'; // Import the CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Section */}
        <div className="brand-header">
          <p className='rectangle-icon'></p>
          Contact Us
        </div>
        <div className="contact-section">

          <div className="title">
            <p>Have a project in mind?</p>
            <p>Let's make it happen</p>
          </div>
        </div>

        {/* Address */}
        <div className="address">
          <p>22 Street Name, Suburb, 8000,</p>
          <p>Cape Town, South Africa
          </p>
          <p>+27 21 431 0001</p>
          <p>enquiry@website.co.za</p>
        </div>

        {/* Card Section */}
        <div className="card-section">
          <div className="card">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Impresum</a>
          </div>
          <div className="card">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
          <div className="card">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Teams</a>
          </div>
          <div className="card">
            <a href="#">Youtube</a>
            <a href="#">Behance</a>
            <a href="#">Dribble</a>
          </div>
          <div className="card">
            <a href="#">Youtube</a>
            <a href="#">Behance</a>
            <a href="#">Dribble</a>
          </div>
        </div>

        {/* Additional Link */}
        <div className="additional-link">
          <a href="#">Explore open jobs</a>
          <p>&copy; 2000 - 2023 Company Name</p>
        </div>
      </div>


    </footer>
  );
}

export default Footer;
