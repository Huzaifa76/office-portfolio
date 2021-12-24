import React,{useEffect, useState} from 'react'

const Counter = (props) => {

    const [value, setvalue] = useState(0)

    useEffect(()=>{
    for (let val = 0; val <= props.value; val++) {
      var interval= setInterval(() => {
            setvalue(val)
            
        }, 500);

        if(val===props.value){
          clearInterval(interval)

        }
        
    }
},[])


    return (
        <div class="counter">
        <h3>
          {value}
        </h3>
        <p>
          {props.text}
        </p>
      </div>
    )
}

export default Counter
