import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
function Contact(props) {
    return (
        <div>
            <h1>404 </h1>
            <p className="zoom-area"><b>Contact</b> page. </p>
            <section className="error-container">
                <span>4</span>
                <span><span className="screen-reader-text">0</span></span>
                <span>4</span>
            </section>
            <div className="link-container">
                <Link  to='/' className="more-link">Back</Link>
            </div>
        </div>
    );
}

export default Contact;