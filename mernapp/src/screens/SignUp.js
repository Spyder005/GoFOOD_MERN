import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';

const SignUp = () => {
    
    let navigate=useNavigate();
    const [credentials,setcredentials] =useState({name:"",email:"",password:"",geolocation:""}) 
    console.log(JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation}))
    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser",{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
         })
        // .then(async(req,res)=>{ const data = await response.json();
        //   res.json(data);
        //   // console.log(json)})
        // })
          // .catch(async(err,res)=>{ res.json(err)
          //   alert("Enter valid credentials")})
          const json = await response.json();
          console.log(json)
        if(!json.success) alert("Enter valid credentials")
        else{
          navigate('/');
   }
    }
    const OnChange =(event) => {
      setcredentials({...credentials,[event.target.name]:event.target.value}) 
    }


 return(
    <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover',height: '100vh' }}>
      <div>
      <Navbar />
      </div>

        <div className='container text-light' >
          <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
            <div className="m-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" name='name' value={credentials.name} onChange={OnChange} aria-describedby="emailHelp" />
            </div>
            <div className="m-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" name='email' value={credentials.email} onChange={OnChange} aria-describedby="emailHelp" />
            </div>
            <div className="m-3">
              <label htmlFor="address" className="form-label">Address</label>
              <fieldset>
                <input type="text" className="form-control" name='address'  value={credentials.geolocation} onChange={OnChange} aria-describedby="emailHelp" />
              </fieldset>
            </div>
            {/* <div className="m-3">
              <button type="button" onClick={handleSubmit} name="geolocation" className=" btn btn-success">Click for current Location </button>
            </div> */}
            <div className="m-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" value={credentials.password} onChange={OnChange} name='password' />
            </div>
            <button type="submit" className="m-3 btn btn-success" onClick={handleSubmit}>Submit</button>
            <Link to="/login" className="m-3 mx-1 btn btn-danger">Already a user</Link>
          </form>
        </div>
      </div>
 
//     {/* <div className='container '>
//      <form onSubmit={handleSubmit}>
//      <div className="mb-3">
//     <label htmlFor="user" className="form-label">User Name</label>
//     <input type="text" className="form-control" name='name' value={credentials.name} onChange={OnChange} />
   
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//     <input type="email" className="form-control"  name='email' value={credentials.email} id="exampleInputEmail1" onChange={OnChange} aria-describedby="emailHelp"/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//     <input type="password" className="form-control"  name='password' value={credentials.password} onChange={OnChange} id="exampleInputPassword1"/>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
//     <input type="location" className="form-control"  name='geolocation' value={credentials.geolocation} onChange={OnChange} />
//   </div>
  
//   <button type="submit" className="m-3 btn btn-success">Submit</button>
//   <Link to="/login" className="m-3 btn btn-primary">Log in</Link>
// </form>
//     </div> */}
 ) 
  
}

export default SignUp
