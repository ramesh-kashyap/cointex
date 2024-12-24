import React, { useState } from "react";
import Api2, { googleAuth } from '../../Requests/Api';
import Api from '../../Requests/Api';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Route, Router,Routes, Link } from 'react-router-dom';

import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/newcss.css";

export default function Login(){
    const navigate = useNavigate();
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordType, setPasswordType] = useState("password");
    const [isActive, setIsActive] = useState(false);

    const togglePasswordView = () => {
        if (passwordType === "password") {
            setPasswordType("text");
            setIsActive(true);
        } else {
            setPasswordType("password");
            setIsActive(false);
        }
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
    try {
        const response = await Api.post('/api/login',{
           phone : phone,
           password: password,
        });

        if(response.data.status){
            console.log('error accur');
        }
        else{
            console.error(response.data.message);
        }
    }
    catch{
        console.error('An error occurred during the API request');
    }

    }


const responseGoogle =async (authResult)=>{
    try{
        console.log(authResult);
        if(authResult['code']){
            const result = await googleAuth(authResult['code']); 
            console.log(result.data);
            // Extract user information from the result (assuming the backend returns this)
            const { name, email, picture } = result.data.user;

            // Log the user information
            console.log(`User's Name: ${name}`);
            console.log(`User's Email: ${email}`);
            console.log(`User's Profile Image: ${picture}`);

            localStorage.setItem('authToken', result.data.token);

            // Redirect to dashboard
            navigate('/');
       
        }else {
            // If there's no authorization code, handle the error
            console.error('Authorization code not received');
        }
    }catch(err){
        console.error('Error while requesting google code:', err);
    }
}

    const googleLogin= useGoogleLogin({
        onSuccess: responseGoogle,
        onError: responseGoogle,
        flow: 'auth-code',
      });
    return(
<div>
    {/* <div className="preload preload-container">
        <div className="preload-logo" style={{backgroundImage: "url('images/logo/144.png')"}}>
          <div className="spinner"></div>
        </div>
    </div> */}
    <div className="header fixed-top bg-surface">
        <a href="#" className="left back-btn"><i className="icon-left-btn"></i></a>
    </div>
    <div className="pt-45 pb-20">
        <div className="tf-container">
            <div className="mt-32">
                <h2 className="text-center">Login Cointex</h2>
                <ul className="mt-40 socials-login">
                    <li className="mt-12"><button onClick={googleLogin} className="tf-btn md social dark"><img src="assets/images/coin/google.png" alt="img"/> Continue with Google</button></li>
                </ul>
            </div>
            <div className="auth-line mt-12">Or</div>
            <form action="home.html" className="mt-16">
                <fieldset className="mt-16">
                    <label className="label-ip">
                        <p className="mb-8 text-small">Phone</p>

                        < PhoneInput country={"us"} type="text" placeholder="Enter Your Mobile Number" name="phone" value={phone} enableSearch={true} onChange={(e)=>setPhone()} 
                        inputStyle={{ padding: "10px",paddingLeft:"50px", fontSize: "14px" ,color:"white", backgroundColor:"#11150f"}} containerStyle={{backgroundColor:"#000"}} dropdownStyle={{backgroundColor:"#000"}}
                        style={{
    fontFamily: "'Poppins', sans-serif",
    width: "100%",
    border: "1px solid transparent",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "26px",
    // padding: "12px 16px",
    borderRadius: "8px",
    color: "var(--white)",
    backgroundColor: "var(--menuDark)",
  }}/>
                    </label>
                </fieldset>
                <fieldset className="mt-16 mb-12">
                    <label className="label-ip">
                        <p className="mb-8 text-small">Password</p>
                        <div className="box-auth-pass">
                            <input type={passwordType} required placeholder="Your password" className="password-field" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                            <span className={`show-pass ${isActive ? "active" : ""}`} onClick={togglePasswordView}>
                                <i className="icon-view"></i>
                                <i className="icon-view-hide"></i>
                            </span>
                        </div>
                    </label>
                </fieldset>
                <a href="" className="text-secondary">Forgot Password?</a>
                <button className="mt-20" type="submit" onSubmit={handleSubmit}>Login</button>
                <p className="mt-20 text-center text-small">Already have a Account? &ensp;<Link to="/register">Sign up</Link></p>
            </form>
        </div>
    </div>

    
</div>
    )
}

