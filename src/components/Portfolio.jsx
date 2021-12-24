import React from 'react'

const Portfolio = () => {
    return (
        <>
        <div className='portfolio'>
            <div className="container">
                <div className="portfolio-inner">
                    <h1>Portfolio</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/> tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="portfolio-cards">
                            <img src="./Images/portfolio1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="portfolio-cards">
                            <img src="./Images/portfolio2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="portfolio-cards">
                            <img src="./Images/portfolio3.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
        </>
    )
}

export default Portfolio
