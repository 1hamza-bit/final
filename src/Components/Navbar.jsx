import React, { useState } from "react";
import "./navbar.css";
import {Link} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import Topbar from "./Topbar";


const Navbar = (props) => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
    <Topbar user={props.user} />
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>R</span>ein
            <span>V</span>okes
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <Link to="/admin">Home</Link>
            </li>
            <li>
              <Link to="/Videos ">Movies</Link>
            </li>
            <li>
              <Link to="/Magazines">Digital magazines</Link>
            </li>
            <li>
              <Link to="/">Screenplays</Link>
            </li>
            <li>
              <Link to="/">Other media</Link>
            </li>
            
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                 <LinkedInIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/thapatechnical/"
                target="_thapa">
               
               <FacebookIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
               <TwitterIcon />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <div onClick={() => setShowMediaIcons(!showMediaIcons)}>
             <MenuIcon />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;