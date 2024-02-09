import React from 'react';
import Home from './Home';

function Navbar() {
  const navStyle = {
    color: "red",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "space-around",
    height: "50px",
    paddingTop: "24px"
  };

  return (
    <>
      <div style={navStyle}>
        <span onClick={<Home name="Home"></Home>}><a>Home</a></span>
        <span>|</span>
        <span onClick={<Home name="About"></Home>}>About Us</span>
        <span>|</span>
        <span><a>Contact Us</a></span>
        <span>|</span>
        <span><a>Blogs</a></span>
      </div>
      {/* <Home name="Home"></Home> */}
    </>
  );
}

export default Navbar;
