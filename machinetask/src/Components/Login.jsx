import React, { useState } from 'react'
import '../Styles/Login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const route = useNavigate();

    const [loginData, setloginData] = useState({useremail:"", userpassword:""});
    console.log(loginData, "loginData")

    function openregisterpage() {
        route("/register")
    }

    var DataFromLS = JSON.parse(localStorage.getItem("machineDatabase"));
        console.log(DataFromLS, "DataFromLS")
    
    const Login = (e) =>{

        e.preventDefault();
        // alert("working");

        var flag = false;

        for(var i=0; i < DataFromLS.length; i++){
            if(DataFromLS[i].email === loginData.useremail && DataFromLS[i].password === loginData.userpassword){
                flag = true;
            }
        }console.log(flag, "flag");
        if(flag){
           setloginData({useremail:"", userpassword:""});
            alert("login successful");
        }
        else{
            setloginData({useremail:"", userpassword:""});
            alert("please check your credentials");
        }
        
    }

    const updatingData = (e) =>{
        e.preventDefault();
        // console.log(e.target.name, e.target.value);
        var name = e.target.name;
        var value = e.target.value;
        setloginData({...loginData, [name]: value})
    }


    
    return (
        <div id='loginfullapge'>
            <div id='loginpage'>
                <div id='loginpage-section-one'>
                    <h3>Login to your account</h3>
                    <p>
                        In order to use the editing and rating capabilities of TMDB, as well as get personal recommendations you will need to login to your account.
                        If you do not have an account, registering for an account is free and simple.<span style={{ color: "blue", fontWeight: "550", cursor:"pointer" }} onClick={() => openregisterpage()}>Click here</span> to get started.
                    </p>
                    <p>If you signed up but didn't get your verification email, click here to have it resent.</p>
                </div>
                <form>
                    <label>UserEmail</label>
                    <br />
                    <input onChange={(e) => updatingData(e)} name='useremail' value={loginData.useremail}  type="text" placeholder='' />
                    <br />
                    <label>UserPassword</label>
                    <br />
                    <input onChange={(e) => updatingData(e)} name='userpassword' value={loginData.userpassword}  type="text" placeholder='' />
                </form>
                <div className='register-right-one-box2'>
                    <button onClick={(e) => Login(e)}>Login</button>
                    {/* <button style={{
                        marginLeft: "1%", border: "none",
                        backgroundColor: "white", color: "blueviolet"
                    }}>Cancel</button> */}
                </div>

            </div>

        </div>
    )
}

export default Login;
