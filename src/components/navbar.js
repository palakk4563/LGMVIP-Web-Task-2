import React from "react";
import "./navbar.css";
const Navbar = ({ onSetIsClicked }) => {
    const clicked = () => {
        onSetIsClicked(1);
    }
    return (
        <>
           <nav className="main-nav">
            <div className="logo">
                <h2>
                    <span>L</span>ets 
                    <span>G</span>row
                    <span>M</span>ore

                </h2>
            </div>
            <div className="btn">
                <button  onClick={clicked} >Get Users</button>
            </div>
            </nav>
        </>
    );
};

export default Navbar;