import "./FooterStyles.css";
import React from "react";

import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>fdsefgfh sefgsdg</p>
              <p>vgfhg.</p>
            </div>
          </div>
          <div className="phone">
            <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }}/>835436-574-3457</h4>
          </div>
          <div className="email">
            <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }}/>info@gmail.com</h4>
          </div>
        </div>
        <div className="right">
<h4>sdgfshfgs dfgs dsgds</h4>
<p>Lorem ufughb kfhjsdhf hfjn jhfj fd fjd .</p>
<div className="social">
<FaFacebook size={20} style={{ color: "#fff", marginRight: "2rem" }} />
<FaTwitter size={20} style={{ color: "#fff", marginRight: "2rem" }} />
<FaLinkedin size={20} style={{ color: "#fff", marginRight: "2rem" }} />
</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
