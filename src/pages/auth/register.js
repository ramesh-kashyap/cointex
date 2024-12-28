import react ,{ useState } from "react";
import Api from '../../Requests/Api';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import Api2, { googleAuth } from '../../Requests/Api';

import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/newcss.css";
 
export default function Register(){
    const navigate = useNavigate();
    const[uname, setUname] = useState('');
    // const[email, setEmail] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const[phone, setPhone] = useState('');
    const[password, setPassword] = useState('');
    const[cpassword, setCpassword] = useState('');
    const[refferal, setRefferal] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [passwordType, setPasswordType] = useState("password");
    const [passwordType2, setPasswordType2] = useState("password");
    const togglePasswordView = () => {
        if (passwordType === "password") {
            setPasswordType("text");
            setIsActive(true);
        } else {
            setPasswordType("password");
            setIsActive(false);
        }
    };
    const togglePasswordView2 = () => {
        if (passwordType2 === "password") {
            setPasswordType2("text");
            setIsActive2(true);
        } else {
            setPasswordType2("password");
            setIsActive2(false);
        }
    };
    const formSubmit = async (e) => {
        e.preventDefault();
        const payload = { name: uname, phone, password, referralCode: refferal };
            
        try {
            setLoading(true);
            const response = await Api.post('/register', payload); // Make API request
            console.log('Registration successful:', response.data);
            // Save token or handle successful registration
            localStorage.setItem('isRegistered', 'true');
            sessionStorage.setItem('phone', phone);
            navigate('/Otp');
        } catch (error) {
            console.error('Registration failed:', error.response?.data);
            setErrors(error.response?.data?.errors || { general: 'An error occurred' });
        } finally {
            setLoading(false);
        }
        if (password !== cpassword) {
            alert('Passwords do not match!');
            return;
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

            <form onSubmit={formSubmit} class="mt-32 mb-16">
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
                {/* <fieldset class="mt-16">
                    <label class="label-ip">
                        <p class="mb-8 text-small">Email</p>
                        <input type="text" placeholder="Example@gmail" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </label>
                </fieldset> */}
                <fieldset class="mt-16">
                    <label class="label-ip">
                        <p class="mb-8 text-small">Phone Number</p>
                       
                        < PhoneInput  international type="text" placeholder="Enter Your Mobile Number" name="phone" value={phone} enableSearch={true}  onChange={(value) => setPhone(value)}  
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
                <fieldset class="mt-16">
                    <label class="label-ip">
                        <p class="mb-8 text-small">Password</p>
                        <div class="box-auth-pass">
                            <input type={passwordType} required placeholder="6 -20 characters" class="password-field" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                            <span className={`show-pass ${isActive ? "active" : ""}`} onClick={togglePasswordView}>
                                <i className="icon-view"></i>
                                <i className="icon-view-hide"></i>
                            </span>
                        </div>
                    </label>
                </fieldset>
                <fieldset class="mt-16">
                    <label class="label-ip">
                        <p class="mb-8 text-small">Confirm Password</p>
                        <div class="box-auth-pass">
                            <input type={passwordType2} required placeholder="confirm password" name="confirm password" class="password-field2" value={cpassword} onChange={(e)=>setCpassword(e.target.value)}/>
                            <span className={`show-pass2 ${isActive2 ? "active" : ""}`} onClick={togglePasswordView2}>
                                <i className="icon-view"></i>
                                <i className="icon-view-hide"></i>
                            </span>
                        </div>
                    </label>
                </fieldset>

                <fieldset class="mt-16">
                    <label class="label-ip">
                        <p class="mb-8 text-small">Referral Code</p>
                        <div class="box-auth-pass">
                            <input type="text" required placeholder="Referral Code" name="refferal" class="password-field2" value={refferal} onChange={(e)=>setRefferal(e.target.value)}/>
                            
                        </div>
                    </label>
                </fieldset>
                
                <fieldset class="group-cb cb-signup mt-12">
                    <input type="checkbox" class="tf-checkbox" id="cb-ip" checked/> 
                    <label for="cb-ip">I agree to <span class="text-white">Terms and condition</span></label>
                </fieldset>
                <button class="mt-40" type="submit" >Create an accoun</button>
            </form>
            
        </div>
    </div>    
</div>
    )
}