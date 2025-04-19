import React from 'react';
//import landing_pg_img from '../assets/undraw_dev-productivity_5wps.svg';
//import landing_pg_img from '../assets/undraw_coding_joxb.svg';
//import landing_pg_img from '../assets/undraw_in-the-zone_07y7.svg';

import linkedin_icon from '../assets/icons8-linkedin-48.png';
import github_icon from '../assets/icons8-github-48.png';
import x_icon from '../assets/icons8-x-48.png';


function Landing() {
  return (
    <>

      <div className="side-toolbar">
        <h1 className="logo">
            AIR
        </h1>

        <button className='linkedin_button' onClick={()=>window.open('https://www.linkedin.com/in/aryanraveshia/', '_blank')}>
          <img src={linkedin_icon} alt='linkedin_icon' className='linkedin_icon'></img>
        </button>

        <button className='github_button' onClick={()=>window.open('https://github.com/ChrisWakanda', '_blank')}>
          <img src={github_icon} alt='github_icon' className='github_icon'></img>
        </button>

        <button className='x_button' onClick={()=>window.open('https://x.com/aryan_raveshia', '_blank')}>
          <img src={x_icon} alt='x_icon' className='x_icon'></img>
        </button>

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