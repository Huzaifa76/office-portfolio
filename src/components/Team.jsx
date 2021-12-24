import React from 'react'
import Teamdata from './Teamdata'
import Teammembers from './Teammembers'

const Team = () => {
    return (
        <>
        <div className='team'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="team-inner">
                    <h1>Skilled Team</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/> tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    </div>
                </div>
                <div className="row">
                    {Teamdata.map((val)=>{
                        return(
                            <Teammembers
                            teamimg={val.teamimg}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
        </>
    )
}

export default Team
