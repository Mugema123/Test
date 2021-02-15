import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router";
import Nav from './Nav'
import axios from 'axios'
import './SignUp.css'


 const SignUp = () => {
  const history = useHistory();
  
  const { register, handleSubmit, errors } = useForm(); // initialize the hook


  const onSubmit =  async(data) => {
    
 const { firstname,lastname,email,phone,password,password2}=data;
 const user ={firstname,lastname,email,phone,password,password2}
   
    axios.post('https://bakendgenius-ch-backend-btlale.herokuapp.com/signup', user)
    .then(res => {
      console.log(res)
      history.push({
        pathname:  "/signin",
        state: {
          response: res.data.message 
         } 
        })
})
.catch(err => {
  if (err.response) {
    console.log(err.response)

    history.push({
      pathname:  "/",
      state: {
        response: err.response.data.message
       } 
      })
    alert(err.response.data.message);

  } else if (err.request) {

    console.log(err.request)

  } else {
    console.log("the issue is invisible!!!!!")
  }
})

  };



        return (
            <div >
               <Nav />
               <form action="/" method="post" onSubmit={handleSubmit(onSubmit)}>
              <div className="form3">
              <div className="top-row">
                <div className="field-wrap">
                  <input type="text" name="firstname" ref={register({ required: true })} required  autoComplete="off" placeholder="First Name" />
                </div>
            
                <div className="field-wrap">
                  
                  <input type="text" name="lastname" ref={register({ required: true })} required autoComplete="off" placeholder="Last Name"/>
                </div>
              </div>
    
              <div className="field-wrap">
               
                <input type="email" name="email" ref={register({ required: true })} required autoComplete="off" placeholder="Email address"/>
              </div>
              <div className="field-wrap">
               
                <input type="number" name="phone" ref={register({ required: true })} required autoComplete="off" placeholder="Phone number"/>
              </div>
              <div className="field-wrap">
                
                <input type="password" name="password" ref={register({ required: true })} required autoComplete="off" placeholder="Password"/>
              </div>
              <div className="field-wrap">
                
                <input type="password" name="password2" ref={register({ required: true })} required autoComplete="off" placeholder="Confirm password"/>
              </div>
              <button type="submit"  className="button button-block">Register Now</button>
              </div>
              </form>
            </div>
        )
    }


export default SignUp;