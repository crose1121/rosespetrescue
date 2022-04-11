import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <div className="nav">
                <div className="nav-title">
                    <h1 style={{display:"inline-block"}}>Rose's Pet Rescue Hub</h1>
                    <img className="logo" src="https://static.vecteezy.com/system/resources/thumbnails/002/215/678/small_2x/cool-wolves-face-mascot-e-sport-logo-design-isolated-on-dark-grey-background-angry-wolf-monster-mascot-illustration-logo-professional-wolf-logo-for-a-sport-team-modern-template-design-vector.jpg" alt="" />

                </div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/pets">Find Pets</Link></li>
                    <li><Link to="/contributors">View Contributors</Link></li>
                    <li><Link to="/contributors/new">Become a Contributor</Link></li>
                </ul>
            </div>
        </>
    );
};


export default NavBar;