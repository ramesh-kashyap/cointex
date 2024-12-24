import React, {useState} from "react";
import Api from '../../Requests/Api';
import { useNavigate } from 'react-router-dom';


export default function Newpass() {
      const navigate = useNavigate();
    const[password, setPassword] = useState('');
    const[cpassword, setCpassword] =useState('');

    const Submitreset = async (e) =>{
        e.preventDefault();
        if(password !=cpassword){
            alert('Confirm Your password');
            return;
         }

        try{            
              // Retrieve the phone number from localStorage
            const phone = localStorage.getItem('phone');
             const response = await Api.post('/reset',{
                phone,
                password:password,
             });       
             
             if(response.data){
                localStorage.removeItem('phone');
                navigate('/sendotp');
             }
        }
        catch{
            console.error('An error occurred during the API request');
        }
    }

    return (
        <div>
          
            <div className="header fixed-top bg-surface">
                <a href="#" className="left back-btn">
                    <i className="icon-left-btn"></i>
                </a>
            </div>
            <div className="pt-45 pb-16">
                <div className="tf-container">
                    <form action="" className="mt-32">
                        <h2 className="text-center">Create new password</h2>
                        <fieldset className="mt-40">
                            <label className="label-ip">
                                <p className="mb-8 text-small">Password</p>
                                <div className="box-auth-pass">
                                    <input
                                        type="password"
                                        required
                                        name="password"
                                        className="password-field"
                                        Value={password}  onChange={ (e)=>setPassword(e.target.value)}
                                    />
                                    <span className="show-pass">
                                        <i className="icon-view"></i>
                                        <i className="icon-view-hide"></i>
                                    </span>
                                </div>
                            </label>
                        </fieldset>
                        <fieldset className="mt-16">
                            <label className="label-ip">
                                <p className="mb-8 text-small">Confirm Password</p>
                                <div className="box-auth-pass">
                                    <input
                                        type="password"
                                        required
                                        className="password-field2"
                                        name="cpassword"
                                        placeholder="6 -20 characters"
                                        value={cpassword}  onChange={ (e)=>setCpassword(e.target.value)}
                                    />
                                    <span className="show-pass2">
                                        <i className="icon-view"></i>
                                        <i className="icon-view-hide"></i>
                                    </span>
                                </div>
                            </label>
                        </fieldset>
                        <button type="submit" className="mt-40" onClick={Submitreset}>
                            Reset Password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
