import { useState } from "react"
import Api2, { googleAuth } from '../../Requests/Api';
import Api from '../../Requests/Api';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

export default function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
    try {
        const response = await Api.post('/api/login',{
           email : email,
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
    {/* <div class="preload preload-container">
        <div class="preload-logo" style={{backgroundImage: "url('images/logo/144.png')"}}>
          <div class="spinner"></div>
        </div>
    </div> */}
    <div class="header fixed-top bg-surface">
        <a href="#" class="left back-btn"><i class="icon-left-btn"></i></a>
    </div>
    <div class="pt-45 pb-20">
        <div class="tf-container">
            <div class="mt-32">
                <h2 class="text-center">Login Cointex</h2>
                <ul class="mt-40 socials-login">
                    <li class="mt-12"><button onClick={googleLogin} class="tf-btn md social dark"><img src="assets/images/coin/google.png" alt="img"/> Continue with Google</button></li>
                </ul>
            </div>
            <div class="auth-line mt-12">Or</div>
            <form action="home.html" class="mt-16">
                <fieldset class="mt-16">
                    <label class="label-ip">
                        <p class="mb-8 text-small"> Email</p>
                        <input type="text" placeholder="Example@gmail" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </label>
                </fieldset>
                <fieldset class="mt-16 mb-12">
                    <label class="label-ip">
                        <p class="mb-8 text-small">Password</p>
                        <div class="box-auth-pass">
                            <input type="password" required placeholder="Your password" class="password-field" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                            <span class="show-pass">
                                <i class="icon-view"></i>
                                <i class="icon-view-hide"></i>
                            </span>
                        </div>
                    </label>
                </fieldset>
                <a href="reset-pass.html" class="text-secondary">Forgot Password?</a>
                <button class="mt-20" type="submit" onSubmit={handleSubmit}>Login</button>
                <p class="mt-20 text-center text-small">Already have a Account? &ensp;<a href="register.html">Sign up</a></p>
            </form>
        </div>
    </div>

    
</div>
    )
}

