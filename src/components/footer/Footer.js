import React from 'react';
import Follow from './Follow';
import '../dashboard/dashboard.css';

const Footer = () => {
    return (
        <div>
             <div className="footer">
            <p>Follow us on:   </p>
            <Follow />
          </div>
        </div>
    )
}

export default Footer;
