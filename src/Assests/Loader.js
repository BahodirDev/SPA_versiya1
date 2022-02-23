import React from 'react';
import './Loader.css';
function Loader(props) {
    return (
        <div className="containerr">
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
            <p>Loading...</p>
        </div>

    );
}

export default Loader;