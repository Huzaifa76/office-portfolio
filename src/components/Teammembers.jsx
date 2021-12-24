import React from 'react'

const Teammembers = (props) => {
    return (
        <>
            <div className="col-md-4 gy-5">
                <div className="teamimg">
                <img src={props.teamimg} alt="Team" />
                </div>
            </div>
        </>
    )
}

export default Teammembers
