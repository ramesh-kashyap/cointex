import react, { useState } from 'react';
import Api from '../../Requests/Api';
import { useNavigate } from 'react-router-dom';
export default function ChangePass(){
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword]  = useState('');
    const [newpassword, setNewpassword] = useState('');
    const submitForm = async (e) => {
        e.preventDefault();
    
        if (password === cpassword) {
            try {
                const response = await Api.post('/change-password', {
                    password: password,
                    newpassword: newpassword,
                });
                if (response.data) {
                    navigate('/',response.data, 'Your password has been changed');
                }
            } catch (error) {
                console.error('Something went wrong, please try again:', error);
            }
        } else {
            console.log('Passwords do not match');
        }
    };
    

    return(
<div>

    <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
        <a href="javascript:void(0);" className="left back-btn"><i className="icon-left-btn"></i></a>
        <h3>Change login password</h3>
    </div>
    <div className="pt-45 pb-16">
        <div className="tf-container">
            <form action="security-center.html">
                <fieldset className="mt-4">
                    <label className="mb-8">Current password</label>
                    <div className="box-auth-pass">
                        <input type="password" required placeholder="Enter current password" value={password} onChange={(e)=>setPassword(e.target.value)} className="password-field"/>
                        <span className="show-pass">
                            <i className="icon-view"></i>
                            <i className="icon-view-hide"></i>
                        </span>
                    </div>
                </fieldset>
                <fieldset className="mt-16">
                    <label className="mb-8">New login password</label>
                    <div className="box-auth-pass">
                        <input type="password" required placeholder="Enter your new password" value={cpassword} onChange={(e)=>setCpassword(e.target.value)} className="password-field"/>
                        <span className="show-pass">
                            <i className="icon-view"></i>
                            <i className="icon-view-hide"></i>
                        </span>
                    </div>
                </fieldset>
                <ul className="mt-16">
                    <li className="d-flex gap-4 align-items-center">
                        <input type="checkbox" className="tf-checkbox style-2" id="cb1" checked/> 
                        <label className="text-small text-white" for="cb1">8 - 32 characters long</label>
                    </li>
                    <li className="mt-12 d-flex gap-4 align-items-center">
                        <input type="checkbox" className="tf-checkbox style-2" id="cb2" checked/> 
                        <label className="text-small text-white" for="cb2">1 lowercase character</label>
                    </li>
                    <li className="mt-12 d-flex gap-4 align-items-center">
                        <input type="checkbox" className="tf-checkbox style-2" id="cb3" checked/> 
                        <label className="text-small text-white" for="cb3">1 uppercase character</label>
                    </li>
                    <li className="mt-12 d-flex gap-4 align-items-center">
                        <input type="checkbox" className="tf-checkbox style-2" id="cb4" checked/> 
                        <label className="text-small text-white" for="cb4">1 number</label>
                    </li>
                    <li className="mt-12 d-flex gap-4 align-items-center">
                        <input type="checkbox" className="tf-checkbox style-2" id="cb5" checked/> 
                        <label className="text-small text-white" for="cb5">1 symbol</label>
                    </li>
                </ul>
                <fieldset className="mt-16">
                    <label className="mb-8">Confirm new login password</label>
                    <div className="box-auth-pass">
                        <input type="password" required placeholder="Enter your new password" value={newpassword} onChange={(e)=>setNewpassword(e.target.value)} className="password-field"/>
                        <span className="show-pass">
                            <i className="icon-view"></i>
                            <i className="icon-view-hide"></i>
                        </span>
                    </div>
                </fieldset>
                <button className="mt-40 tf-btn lg" onClick={submitForm}>Confirm</button>
            </form>
        </div>
    </div>

 
    
</div>
)}