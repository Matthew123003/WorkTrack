import React from 'react-native';
import '../assets/styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col right-align">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
            </ul>
          </div>
          <div className="footer-col right-align">
            <h4>Add Jobs</h4>
            <ul>
              <li>
                <a href="#">Saved Jobs</a>
              </li>
            </ul>
          </div>
          <div className="footer-col right-align">
            <h4>Settings</h4>
            <ul>
              <li>
                <a href="#">Profile</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;