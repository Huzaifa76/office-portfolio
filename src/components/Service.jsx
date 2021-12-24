import React from "react";
import Servicedata from './Servicedata'
import Servicecards from './Servicecards'

const Service = () => {
  return (
    <>
      <div className="container">
        <div className="service">
          <div className="row">
            {Servicedata.map((val) => {
              return (
                <Servicecards
                  imgsrc={val.imgsrc}
                  heading={val.heading}
                  para={val.para}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
