import React from 'react';
import '../styles/Footer.css';

function Footer(props) {
    return (

        <footer className="page-footer footer">
            <div className="container">
            </div>
            <div className="footer-copyright">
            ©  {new Date().getFullYear()}   Copyright Text
                <div className="container">
                   
                    <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;