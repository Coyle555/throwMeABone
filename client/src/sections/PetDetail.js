import React from 'react';
import {

    Navbar
} from 'react-bootstrap';
const About = () => {

  return (
    <>
<div className="divider">
 <Navbar color="light" ></Navbar>
</div>

      <div id="about" className="about-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div id="me" className="section-title">
                            <h1>About Us</h1>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="about-info">
                            <h3>About us info </h3>


                        </div>
                    </div>
                </div>
            </div>
        </div>
              

    </>
  );
}

export default About;
