// Navbar01.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/navbar.css'; 

function Navbar01() {
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('id_token');
    //To handle logout logic
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Jobs</Link>
        </li>
        <li className="nav-item">
          <Link to="/accounts">Interships</Link>
        </li>
        <li className="nav-item">
          <Link to="/tracker">Resume</Link>
        </li>
        <li className="nav-item">
          <Link to="/team">Forum</Link>
        </li>
      </ul>
      {/* <div className="nav-item logout-button">
        <button onClick={handleLogout}>Logout</button>
      </div> */}
    </nav>
  );
}

export default Navbar01;
