import React from 'react';
import "./Input.css"


function Navbar() {
    return (
        <div className="all-center">
            <h1 className="text"><span>S</span>horten Your<span>URL</span></h1> <br />
            <input className="input-style" placeholder="Paste your long URL " />  <br /><br /><br />
            <button className="bttn">Get URL</button>
            <p>© Copyright 2021 by Refsnes Data. All Rights Reserved..</p>
        </div>
    )
}

export default Navbar
