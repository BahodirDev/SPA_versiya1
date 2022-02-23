import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header(props) {
    return (
        <>
               <nav className="navbar navbar-expand-lg navbar-light header">
            <div className="container-fluid">
                <Link to='/' className='navbar-brand'></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 ">
                        <li className="nav-item  ">
                            <Link to='/' className='color'>Menu</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className='color'>Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/example/1' className='color'>Example</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
            <div className='subHeader'>
               <span>
                   <p style={{color:'#808080',fontSize:'15px',padding:'5px'}}>SubHeader </p>
               </span>
            </div>
        </>
     
    );
}

export default Header;
