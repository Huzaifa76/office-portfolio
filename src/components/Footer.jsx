import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'

const Footer = () => {
    return (
        <>
        <div className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="footer-logo">
                        <h3>trydo</h3>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="social-icons">
                        <BsFacebook/>
                        <AiFillLinkedin/>
                        <AiFillInstagram/>
                        <AiFillTwitterCircle/>
                        </div>
                        </div>
                        <div className="col-md-5">
                            <div className="rights">
                            <a href="#">Copyright @ 2021. All Rights Reserved</a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer
