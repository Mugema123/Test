import React, { Component } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import Nav from './Nav'
import { useHistory } from "react-router";
import { Link } from 'react-router-dom';
import './SignIn.css'
import Button from '@material-ui/core/Button';

 const SignIn = () => {
  const history = useHistory();
  
  const { register, handleSubmit, errors } = useForm();

  const onSubmit =  async(data) => {
    
    const { email,password}=data;
    const user ={email,password}
      
       axios.post('https://bakendgenius-ch-backend-btlale.herokuapp.com/login', user)
       .then(res => {
         console.log(res)
         if(res.data.message ==="logged In successfull"){
          history.push({
            pathname:  "/dashboard",
            state: {
              response: res.data.message 
             } 
            })
    }        
   })
   .catch(err => {
     if (err.response) {
       console.log(err.response)

       history.push({
        pathname:  "/signin",
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
                <form action="/" method="post" onSubmit={handleSubmit(onSubmit)} >
            <div className="form2">
              <div className="field-wrap">
              
              <input type="email" name="email" ref={register({ required: true })} required autoComplete="off" placeholder="Enter your email address"/>
            </div>
            
            <div className="field-wrap">
              
              <input type="password" name="password" ref={register({ required: true })} required autoComplete="off" placeholder="Enter your password" / >
            </div>
            
            
            {/* <Button className="button button-block"><a href="#dashboard.html">Log In</a> </Button> */}
            <div className="button-signin">
            {/* <Button className="button button-block"><Link to={`/dashboard`} >Sign in</Link> </Button> */}
            <Button type="submit"  className="button button-block" >Sign in </Button>

            </div>
            </div>
            </form>
            </div>
        )
    }

 
export default SignIn