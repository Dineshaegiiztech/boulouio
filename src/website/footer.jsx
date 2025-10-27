// import React from 'react';
// import './Footer.css';
// import {
//   FaLinkedinIn,
//   FaFacebookF,
//   FaInstagram,
//   FaTimes,
//   FaYoutube,
// } from 'react-icons/fa';
// import { MdEmail, MdPhone } from 'react-icons/md';
// import { Link } from 'react-router-dom';

// const WebFooter = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-sections">
//         <div className="footer-column">
//           <h4>Products</h4>
//           <ul>
//             <Link style={{ color: "white", textDecoration: "none" }} to="/health-care"><li>Healthcare Intelligence Database</li></Link>
//             <Link style={{ color: "white", textDecoration: "none" }} to="/energy"><li>Energy & Utilities Database</li></Link>
//             <Link style={{ color: "white", textDecoration: "none" }} to="/HiringManagers"> <li>Hiring Managers Database</li></Link>
//             <Link style={{ color: "white", textDecoration: "none" }} to="/companies"><li>IT Companies Database</li></Link>
//             <Link style={{ color: "white", textDecoration: "none" }} to="/fleet">  <li>Fleet Database</li></Link>
//           </ul>
//         </div>

//         <div className="footer-column">
//           <h4>Solutions</h4>
//           <ul>
//             <Link style={{ color: "white", textDecoration: "none" }} to="/us-data"> <li>US Data</li></Link>
//             <Link style={{ color: "white", textDecoration: "none" }} to="/appending"> <li>Data Appending</li></Link>
//             <Link style={{ color: "white", textDecoration: "none" }} to="/cleansing"> <li>Data Cleansing</li></Link>
//             <Link style={{ color: "white", textDecoration: "none" }} to="/enrichment"> <li>CRM Enrichment</li></Link>
//             <Link style={{ color: "white", textDecoration: "none" }} to="/B2bleads"> <li>Get Free B2B Leads</li></Link>
//             <Link style={{ color: "white", textDecoration: "none" }} to="/sales">  <li>Boulou for Sales</li></Link>
//             <Link style={{ color: "white", textDecoration: "none" }} to="/marketing">  <li>Boulou for Marketing</li></Link>
//             <Link style={{ color: "white", textDecoration: "none" }} to="/recruitment"><li>Boulou for Recruitment</li></Link>
//           </ul>
//         </div>

//         <div className="footer-column">
//           <h4>Company</h4>
//           <ul>
//             <Link style={{ textDecoration: "none", color: "white" }} to="/about"> <li>About us</li></Link>
//             <Link style={{ textDecoration: "none", color: "white" }} to="/contact"> <li>Contact us</li></Link>
//             <li>Careers</li>
//             <Link style={{ textDecoration: "none", color: "white" }} to="/blogs"><li>Blogs</li></Link>
//             <li>FAQ</li>
//           </ul>
//         </div>

//         <div className="footer-column">
//           <h4>Legal</h4>
//           <ul>
//             <Link style={{ textDecoration: "none", color: "white" }} to="/terms-conditions"><li>Terms & Conditions</li></Link>
//             <Link style={{ textDecoration: "none", color: "white" }} to="/privacy-policy"><li>Privacy Policy</li></Link>
//             <Link style={{ textDecoration: "none", color: "white" }} to="/cookiepolicy"><li>Cookie Policy</li></Link>
//             <Link style={{ textDecoration: "none", color: "white" }} to="/gdpr"><li>GDPR</li></Link>
//             <Link style={{ textDecoration: "none", color: "white" }} to="/do-not-sell-myinfo"><li>Do not sell my info</li></Link>
//           </ul>
//         </div>

//         <div className="footer-column">
//           <h4>Contact Info</h4>
//           <p>Address:</p>
//           <p>
//             4400 N Federal
//             <br /> Highway,Ste 8 Boca
//             <br /> Raton, FL 33431
//           </p>
//           <p><MdPhone className="" /> &nbsp; 1(866)611-6943</p>
//           <p><MdEmail className="" /> &nbsp; support@boulou.io</p>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <div className="social-icons">
//           <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//             <FaLinkedinIn />
//           </a>
//           <a href="https://www.facebook.com/profile.php?id=61575703206688&notif_id=1746012650197562&notif_t=profile_plus_admin_invite&ref=notif" target="_blank" rel="noopener noreferrer">
//             <FaFacebookF />
//           </a>
//           <a href="https://www.instagram.com/boulou_io/" target="_blank" rel="noopener noreferrer">
//             <FaInstagram />
//           </a>
//           <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
//             <FaYoutube />
//           </a>
//         </div>
//         <p style={{ color: "white" }}>© 2025 Boulou. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default WebFooter;

import React from 'react';
import './footer.css';
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTimes,
  FaYoutube,
} from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { Link } from 'react-router-dom';
import icon from '../assets/navbar.png';

const WebFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-column">
          <img src={icon} style={{ width: "100%" }} />
          <br/><br/>
          <p>Your all-in-one sales intelligence platform for precise prospecting and automated outreach. Discover, engage, and close more deals with smarter lead generation</p>
        </div>
        <div className="footer-column">
          <h4>Products</h4>
          <ul>
            <Link style={{ color: "white", textDecoration: "none" }} to="/health-care"><li>Healthcare Intelligence Database</li></Link>
            <Link style={{ color: "white", textDecoration: "none" }} to="/energy"><li>Energy & Utilities Database</li></Link>
            <Link style={{ color: "white", textDecoration: "none" }} to="/HiringManagers"> <li>Hiring Managers Database</li></Link>
            <Link style={{ color: "white", textDecoration: "none" }} to="/companies"><li>IT Companies Database</li></Link>
            <Link style={{ color: "white", textDecoration: "none" }} to="/fleet">  <li>Fleet Database</li></Link>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Solutions</h4>
          <ul>
            <Link style={{ color: "white", textDecoration: "none" }} to="/us-data"> <li>US Data</li></Link>
            <Link style={{ color: "white", textDecoration: "none" }} to="/appending"> <li>Data Appending</li></Link>
            <Link style={{ color: "white", textDecoration: "none" }} to="/cleansing"> <li>Data Cleansing</li></Link>
            <Link style={{ color: "white", textDecoration: "none" }} to="/enrichment"> <li>CRM Enrichment</li></Link>
            <Link style={{ color: "white", textDecoration: "none" }} to="/B2bleads"> <li>Get Free B2B Leads</li></Link>
            <Link style={{ color: "white", textDecoration: "none" }} to="/sales">  <li>Boulou for Sales</li></Link>
            <Link style={{ color: "white", textDecoration: "none" }} to="/marketing">  <li>Boulou for Marketing</li></Link>
            <Link style={{ color: "white", textDecoration: "none" }} to="/recruitment"><li>Boulou for Recruitment</li></Link>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <Link style={{ textDecoration: "none", color: "white" }} to="/about"> <li>About us</li></Link>
            <Link style={{ textDecoration: "none", color: "white" }} to="/contact"> <li>Contact us</li></Link>
            <li>Careers</li>
            <Link style={{ textDecoration: "none", color: "white" }} to="/blogs"><li>Blogs</li></Link>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <Link style={{ textDecoration: "none", color: "white" }} to="/terms-conditions"><li>Terms & Conditions</li></Link>
            <Link style={{ textDecoration: "none", color: "white" }} to="/privacy-policy"><li>Privacy Policy</li></Link>
            <Link style={{ textDecoration: "none", color: "white" }} to="/cookiepolicy"><li>Cookie Policy</li></Link>
            <Link style={{ textDecoration: "none", color: "white" }} to="/gdpr"><li>GDPR</li></Link>
            <Link style={{ textDecoration: "none", color: "white" }} to="/do-not-sell-myinfo"><li>Do not sell my info</li></Link>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Info</h4>
          <p>Address:</p>
          <p>
            4400 N Federal
            <br /> Highway,Ste 8 Boca
            <br /> Raton, FL 33431
          </p>
          <p><MdPhone className="" /> &nbsp; 1(866)611-6943</p>
          <p><MdEmail className="" /> &nbsp; support@boulou.io</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-icons">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61575703206688&notif_id=1746012650197562&notif_t=profile_plus_admin_invite&ref=notif" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/boulou_io/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </div>
        <p style={{ color: "white" }}>© 2025 Boulou. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default WebFooter;
