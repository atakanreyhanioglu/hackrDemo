
import {useState} from 'react'
import Layout from "../components/Layout";
import axios from 'axios'

const Register = () => {
  const[state, setState] = useState({
    name : '',
    email : '',
    password : '',
    error : '',
    success:'',
    buttonText:'Register'

  })
  const handleChange= (name) => (e)=>{
    setState({...state,[name]: e.target.value, error:'',success:'',buttonText:'Register'})
  }

  const handleSubmit =(e)=> {

    e.preventDefault()
   // console.table({name, email, password});
    axios.post('http://localhost:8000/api/register',{
      name  ,
       email,
       password
    })
    .then(response=>console.log(response))
    .catch(error=>console.log(error))
  }
  const {name, email, password, error,success,buttonText} = state;


  

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
        
      <div className="form-group">
        <input value={name}
        onChange={handleChange('name')} type="text" className="form-control" placeholder="Type your name" />
        <br />
      
      </div>
      <div className="form-group">
        <input value={email} onChange={handleChange('email')}
          type="email"
          className="form-control"
          placeholder="Type your email"
        />
        <br />
      </div>
      <div className="form-group">
        <input value={password} onChange={handleChange('password')}
          type="password"
          className="form-control"
          placeholder="Type your password"
        />
        <br />
      </div>
      <div className="form-group">
        <button id = "registerbtn"className="btn btn-warning"><b>{buttonText}</b></button>
      </div>
    </form>
  );
  return (
    <Layout>
      <div className="col-md-6 offset-md-3">
        <h3>Register Form</h3>
        <br />
        {registerForm()}
       
      </div>
    </Layout>
  );
};

export default Register;
