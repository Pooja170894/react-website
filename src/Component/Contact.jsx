import React,{useState} from "react";

const Contact = () => {
    const [data, setData] = useState({
        fullname: '',
        phone:'',
        email:'',
        msg:'',
    });
    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`Dear ${data.fullname}, your response has been recorded. Our team will contact you soon on number ${data.phone} or ${data.email}. Here is what you want to convey "${data.msg}". Thank you for your interest in our company.`)
        };
    

    const inputEvent = (event) =>{
        const { name, value } = event.target;
        setData((preValue)=>{
            return {
                ...preValue,
                [name] : value
            }
        })
    }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact Us </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="fullname"
                value={data.fullname}
                onChange={inputEvent}
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Phone
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                name="phone"
                value={data.phone}
                onChange={inputEvent}
                placeholder="Mobile Number"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                name="email"
                value={data.email}
                onChange={inputEvent}
                placeholder="name@example.com"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="msg"
                value={data.msg}
                onChange={inputEvent}
              ></textarea>
              <br />
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck2"
                    required
                  />
                  <label className="form-check-label" htmlFor="invalidCheck2">
                    Agree to terms and conditions
                  </label>
                </div>
              </div>
              <br />
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
              
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
