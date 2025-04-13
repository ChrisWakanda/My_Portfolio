import React from 'react';
//import landing_pg_img from '../assets/undraw_dev-productivity_5wps.svg';
//import landing_pg_img from '../assets/undraw_coding_joxb.svg';
//import landing_pg_img from '../assets/undraw_in-the-zone_07y7.svg';





function Landing() {
  return (
    <>

      <div className="side-toolbar">
        <h1 className="logo">
              AIR
        </h1>
      </div>

      <div className="main-container">

        <h2 className="hey-there-text">
          hey there!👋 i'm
        </h2>

        <h2 className="fname-text">
          Aryan
        </h2>

        <h2 className="lname-text">
          Raveshia
        </h2>

        <h2 className="basic-intro-text">
          <span className="swe-text">software engineer</span> by trade. <br />
          <span className="builder-text">builder</span> at heart. <br />
          <span className="global-text">global</span> in spirit.
        </h2>
      </div>
    </>
  );

}

export default Landing;