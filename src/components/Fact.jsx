import React from "react";
import Counter from "./Counter";

const Fact = () => {

//   useEffect(()=>{

//     const counters = document.querySelectorAll('.count');
// const speed = 100;

// counters.forEach((counter) => {
//   const updateCount = () => {
//     const target = parseInt(counter.getAttribute('data-target'));
//     const count = parseInt(counter.innerText);
//     const increment = Math.trunc(target / speed);

//     if (count < target) {
//       counter.innerText = count + increment;
//       setTimeout(updateCount, 1);
//     } else {
//       counter.innerText = target;
//     }
//   };
//   updateCount();
// });


//   });

  return (
    <>
      <div className="fact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="fact-heading">
                <h1>Our Fun Facts</h1>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div class="container">
                <div class="counter-container">
                 <Counter value={45} text={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"} />
                 <Counter value={100} text={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"} />
                 <Counter value={55} text={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fact;
