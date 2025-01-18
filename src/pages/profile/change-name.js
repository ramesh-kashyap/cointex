import react, { useState } from 'react';
import Api from "../../Requests/Api";
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';

 export default function ChangeName(){
    const navigate = useNavigate(); 
    const [name ,setName] = useState("");
    const submitForm = async(e)=>{
        e.preventDefault();
        try{
            const response = await Api.post("/change-name",{
                name:name,
            });
            if (response.data){
                navigate('/profile');
            }
            else{
                navigate('/profile',"Name is not change");
            }
        }
        catch{
            console.error("Sonting is wrong, please try again");

        }
    }

    return(
        <div>
        <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
            <a className="left back-btn"><i className="icon-left-btn"   onClick={()=>navigate('/profile')}></i></a>
            <h3>Name</h3>
        </div>
        <div className="pt-45 pb-16">
            <div className="tf-container">
                <form action="profile.html">
                    <fieldset className="mt-16">
                        <label className="mb-8">Name</label>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                    </fieldset>
                    <ul className="mt-20">
                        <li className="d-flex gap-8">
                            <i className="icon-round-check xs bg-white flex-shrink-0"></i>
                            <p className="text-large">Your name will be visible to all users. bnaj can change his nickname 3 times before the end of the year. The limit will be reset every year. Super/Diamond Advertisers are not allowed to change their nicknames.</p>
                        </li>
                        <li className="mt-16 d-flex gap-8">
                            <i className="icon-round-check xs bg-white flex-shrink-0"></i>
                            <p className="text-large">It will take a few minutes for us to review and approve the new global name or nickname</p>
                        </li>
                        <li className="mt-16 d-flex gap-8">
                            <i className="icon-round-check xs bg-white flex-shrink-0"></i>
                            <p className="text-large">When creating a nickname, please make sure it is free from vulgar language, the official name of Avicoin (ie the name of the product) and the names of other trading platforms.</p>
                        </li>
                    </ul>
                    <button className="mt-40 tf-btn lg" onClick={submitForm}>Done</button>
                </form>
            </div>
        </div> 
    </div>
    )
 }

