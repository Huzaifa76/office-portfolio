import React from 'react'

const Servicecards = (props) => {
    return (
        <>
                <div className="col-md-4 gy-4">
                    <div className="service_inner">
                        <span className='service-icon'>{props.imgsrc}</span>
                <h5>{props.heading}</h5>
                <p>{props.para}</p>
                </div>
                </div>
                </>
    )
}

export default Servicecards
