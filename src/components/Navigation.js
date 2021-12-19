import React from 'react';
import { NavLink} from 'react-router-dom'

const Navigation = () => {
    return (
  <div className="sidebar">
      <div className="id">
          <div className="idContent">
              <img src="./media/profile.jpg" alt="profil-pic" />
              <h3>Mon nom </h3>
          </div>
      </div>

        <div className="navigation">
            <ul>
                <li>
                    <NavLink to="/" className={(navData)=> navData.isActive ? "active" : ""}><i className="fas fa-home"></i><span>Home</span></NavLink>
                </li>
                <li>
                    <NavLink to="/comptences" className={(navData)=> navData.isActive ? "active" : ""}><i className="fas fa-mountain"></i><span>Compétence</span></NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio" className={(navData)=> navData.isActive ? "active" : ""}><i className="fas fa-images"></i><span>Portfolio</span></NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={(navData)=> navData.isActive ? "active" : ""}><i className="fas fa-address-book"></i><span>Contact</span></NavLink>
                </li>
            </ul>
        </div>


        <div className="socialNetwork"> 
        <ul>
            <li>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"> </i></a>
            </li>
            <li>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"> </i></a>
            </li>
            <li>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"> </i></a>
            </li>
            <li>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"> </i></a>
            </li>
        </ul>

        <div className="signature">
            <p>Mon Cv - 2021</p>
        </div>
        </div>

  </div>
    );
};

export default Navigation;