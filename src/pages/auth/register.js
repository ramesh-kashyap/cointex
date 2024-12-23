import react ,{ useState } from "react";
import Api from '../../Requests/Api';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import Api2, { googleAuth } from '../../Requests/Api';
export default function Register(){
    const navigate = useNavigate();
    const[uname, setUname] = useState('');
    const[email, setEmail] = useState('');
    const[phone, setPhone] = useState('');
    const[password, setPassword] = useState('');
    const[cpassword, setCpassword] = useState('');

    const formSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await Api.post('/api/register',{
             name: uname,
             email: email,
             phone: phone,
             password: password,
             cpassword: cpassword,
            });

            if(response.data.status){
                console.log('Reagetr Sucess');
            }
            else{
                console.error(response.data.message);
            }

        }
        catch(error){
              console.error('Your Data not Submit Error in Registration !')
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
    const googleRegister= useGoogleLogin({
        onSuccess: responseGoogle,
        onError: responseGoogle,
        flow: 'auth-code',
      });
    return(
        <div>
    <div class="header fixed-top bg-surface">
        <a href="#" class="left back-btn"><i class="icon-left-btn"></i></a>
    </div>
    <div class="pt-45">
        <div class="tf-container">

            <form action="otp.html" class="mt-32 mb-16">
                <h2 class="text-center">Register Cointex</h2>

                <ul class="mt-40 socials-login">
                    <li class="mt-12"><button onClick={googleRegister} class="tf-btn md social dark"><img src="assets/images/coin/google.png" alt="img"/> Continue with Google</button></li>
                </ul>
                <fieldset class="mt-40">
                    <label class="label-ip">
                        <p class="mb-8 text-small">Name</p>
                        <input type="text" name="name" value={uname} onChange={(e) =>setUname(e.target.value)}/>
                    </label>
                </fieldset>
                <fieldset class="mt-16">
                    <label class="label-ip">
                        <p class="mb-8 text-small">Email</p>
                        <input type="text" placeholder="Example@gmail" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </label>
                </fieldset>
                <fieldset class="mt-16">
                    <label class="label-ip">
                        <p class="mb-8 text-small">Phone Number</p>
                        <input type="text" placeholder="Phone number" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                    </label>
                </fieldset>
                <fieldset class="mt-16">
                    <label class="label-ip">
                        <p class="mb-8 text-small">Password</p>
                        <div class="box-auth-pass">
                            <input type="password" required placeholder="6 -20 characters" class="password-field" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                            <span class="show-pass">
                                <i class="icon-view"></i>
                                <i class="icon-view-hide"></i>
                            </span>
                        </div>
                    </label>
                </fieldset>
                <fieldset class="mt-16">
                    <label class="label-ip">
                        <p class="mb-8 text-small">Confirm Password</p>
                        <div class="box-auth-pass">
                            <input type="password" required placeholder="confirm password" name="confirm password" class="password-field2" value={cpassword} onChange={(e)=>setCpassword(e.target.value)}/>
                            <span class="show-pass2">
                                <i class="icon-view"></i>
                                <i class="icon-view-hide"></i>
                            </span>
                        </div>
                    </label>
                </fieldset>
                <fieldset class="group-cb cb-signup mt-12">
                    <input type="checkbox" class="tf-checkbox" id="cb-ip" checked/> 
                    <label for="cb-ip">I agree to <span class="text-white">Terms and condition</span></label>
                </fieldset>
                <button class="mt-40" type="submit" onSubmit={formSubmit}>Create an account</button>
            </form>
            
        </div>
    </div>    
</div>
    )
}