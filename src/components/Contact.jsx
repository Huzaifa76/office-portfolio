import React,{useState} from "react";

const Contact = () => {

  const [data, setData] = useState({
    name:"",
    email:"",
    number:"",
    subject:"",
    message:""
  })

  let name, value;
  const userData=(event)=>{
    name=event.target.name;
    value=event.target.value;

    setData({...data , [name]:value})
  }

  const postData=(e)=>{
    e.preventDefault();

    alert(`Congratulation your request has been submitted successfully`);

  }


  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-inner">
                <h1>Contact Us</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
              <div className="contact-form">
                  <form action="">
                      <input type="text" className="form-control" onChange={userData} name="name" placeholder="Your Name" />
                      <input type="email" className="form-control" onChange={userData} name="email" placeholder="Your Email" />
                      <input type="number" className="form-control" onChange={userData} name="number" placeholder="Your Number" />
                      <input type="text" className="form-control" onChange={userData} name="subject" placeholder="Subject" />
                      <textarea name="" className="form-control" onChange={userData} name="message" placeholder="Message" cols="30" rows="10"></textarea>
                      <button className="btn btn-danger btn-md mt-3" onClick={postData} >Submit Now</button>
                  </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-img">
              <img src="./Images/contact.svg" alt="Contact" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
