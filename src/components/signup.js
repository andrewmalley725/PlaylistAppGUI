import {React,useRef,useState} from "react";
import axios from 'axios';

export default function SignUp(){
    const url = 'https://localhost:7152/api/Users';
    const firstname = useRef("");
    const lastname = useRef("");
    const username = useRef("");
    const password = useRef("");
    const confPass = useRef("");
    const email = useRef("");
    const [match, setMatch] = useState(true);

    function handleSubmit(e){
        e.preventDefault();
        if (password.current !== confPass.current)
        {
            setMatch(false);
        }
        else
        {
            const obj = {
                firstName:firstname.current,
                lastName:lastname.current,
                username:username.current,
                password:password.current,
                email:email.current
            }

            axios.post(url, obj).then(res => {
                console.log(res);
                window.location.href = '/login';
            })
        }
    }

    return(
        <div class="container">
  <form onSubmit={handleSubmit} class="needs-validation" novalidate>
    <div class="row">
      <div class="col-md-6 mb-3">
        <label for="firstName">First name</label>
        <input type="text" class="form-control" id="firstName" placeholder="Enter first name" onChange={(e) => firstname.current = e.target.value} required/>
        <div class="invalid-feedback">
          Please enter a valid first name.
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <label for="lastName">Last name</label>
        <input type="text" class="form-control" id="lastName" placeholder="Enter last name" onChange={(e) => lastname.current = e.target.value} required/>
        <div class="invalid-feedback">
          Please enter a valid last name.
        </div>
      </div>
    </div>
    
    <div class="mb-3">
      <label for="username">Username</label>
      <div class="input-group">
        
        <input type="text" class="form-control" id="username" placeholder="Enter username" onChange={(e) => username.current = e.target.value} required/>
        <div class="invalid-feedback" style={{width: '100%'}}>
          Your username is required.
        </div>
      </div>
    </div>
    
    <div class="mb-3">
      <label for="password">Password</label>
      <input type="password" class="form-control" id="password" placeholder="Enter password" onChange={(e) => password.current = e.target.value} required/>
      <div class="invalid-feedback">
        Please enter a valid password.
      </div>
    </div>

    <div class="mb-3">
      <label for="confirmPassword">Confirm password</label>
      <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm password" onChange={(e) => confPass.current = e.target.value} required/>
      <div class="invalid-feedback">
        Please enter a valid password.
      </div>
      <div class="text-danger" style={{display: !match ? 'block' : 'none'}}>
        Passwords must match
      </div>
    </div>

    <div class="mb-3">
      <label for="email">Email</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email" onChange={(e) => email.current = e.target.value} required/>
      <div class="invalid-feedback">
        Please enter a valid email address.
      </div>
    </div>

    <button class="btn btn-primary btn-lg btn-block" type="submit">Sign up</button>
  </form>
</div>

    )
}