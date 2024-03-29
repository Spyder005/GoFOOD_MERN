import React ,{useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar';

const Login = () => {
  let navigate = useNavigate();
  const [credentials,setcredentials] =useState({email:"",password:""}) 
    console.log(JSON.stringify({email:credentials.email,password:credentials.password}))
    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/loginuser",{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email:credentials.email,password:credentials.password})
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
             localStorage.setItem('userEmail',credentials.email)
             localStorage.setItem('authToken',json.authToken)
             console.log(localStorage.getItem('authToken'));
      }
    }
    const OnChange =(event) => {
      setcredentials({...credentials,[event.target.name]:event.target.value}) 
    }
  return (
    <>


    <div style={{backgroundImage: 'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', height: '100vh', backgroundSize: 'cover' }}>
      <div>
        <Navbar />
      </div>
      <div className='container'>
        <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
          <div className="m-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={OnChange} aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone.</div>
          </div>
          <div className="m-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" value={credentials.password} onChange={OnChange} name='password' />
          </div>
          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/signup" className="m-3 mx-1 btn btn-danger">New User</Link>
        </form>

      </div>
    </div>
  


    {/* <div className='container '>
     <form onSubmit={handleSubmit}>
    
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control"  name='email' value={credentials.email} id="exampleInputEmail1" onChange={OnChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control"  name='password' value={credentials.password} onChange={OnChange} id="exampleInputPassword1"/>
  </div>
 
  
  <button type="submit" className="m-3 btn btn-success">Submit</button>
  <Link to="/createuser" className="m-3 btn btn-primary">Sign in</Link>
</form>
    </div> */}
      
    </>
  )
}

export default Login
