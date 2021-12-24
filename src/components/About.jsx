import React from "react"

const About = ({heading,para}) => {
    return (
        <>
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img src="./Images/about.jpg" className="img-fluid about-img" alt="About" />
                    </div>
                    <div className="col-md-7">
                        <div className="about-inner">
                        <h1>About Us</h1>
                        <p>Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
         nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                             Duis aute irure dolor in reprehenderit in voluptate velit
                              esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="we-are">
                                    <h3>Who We Are</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="we-are">
                                    <h3>Who We Are</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>

                
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default About
