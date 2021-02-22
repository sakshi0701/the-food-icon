import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import style from "./Follow.module.css";

const Follow = () => {
    return(
        <div>
          <a href="#" className={style.fb}><FontAwesomeIcon icon={faFacebook} /></a> 
          <a href="#" className={style.insta}><FontAwesomeIcon icon={faInstagram} /></a> 
          <a href="#" className={style.twitter}><FontAwesomeIcon icon={faTwitter} /></a> 
          <a href="#" className={style.yt}><FontAwesomeIcon icon={faYoutube} /></a>          
        </div>
    );
};

export default Follow;