import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import style from "./Follow.module.css";

const Follow = () => {
    return(
        <div>
          {/* eslint-disable-next-line */}
          <a href="#" className={style.fb}><FontAwesomeIcon icon={faFacebook} /></a> 
          {/* eslint-disable-next-line */}
          <a href="#" className={style.insta}><FontAwesomeIcon icon={faInstagram} /></a> 
          {/* eslint-disable-next-line */}
          <a href="#" className={style.twitter}><FontAwesomeIcon icon={faTwitter} /></a> 
          {/* eslint-disable-next-line */}
          <a href="#" className={style.yt}><FontAwesomeIcon icon={faYoutube} /></a>          
        </div>
    );
};

export default Follow;