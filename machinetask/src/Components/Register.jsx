 import React, { useState } from 'react'
import '../Styles/Register.css'

const Register = () => {

  const [userData, setuserData] = useState({
    name: "", password: "", confirmpassword: "",
    email: ""
  });
  console.log(userData, "userData");

  const Register = (e) => {

    e.preventDefault();

    var machineData = JSON.parse(localStorage.getItem("machineDatabase")) || [];
    console.log(machineData, "machineData");

    var flag = false;

    for (var i = 0; i < machineData.length; i++) {
      if (machineData[i].email === userData.email) {
        flag = true;
      }
    } console.log(flag, "true")
    if (flag) {
      alert("Email is already present")
      setuserData({ name: "", password: "", confirmpassword: "", email: "" });
    }
    else if (userData.password.length < 8) {
      alert("Password should be 8 digit")
      setuserData({ name: "", password: "", confirmpassword: "", email: "" });
    }
    else if (userData.password !== userData.confirmpassword) {
      alert("Password not match");
      setuserData({ name: "", password: "", confirmpassword: "", email: "" });
    }
    else if (userData.name < 1 && userData.email < 1 && userData.password < 1 && userData.confirmpassword < 1) {
      alert("must fill all field")
      setuserData({ name: "", password: "", confirmpassword: "", email: "" });
    }
    else {
      machineData.push(userData);
      localStorage.setItem("machineDatabase", JSON.stringify(machineData));
      setuserData({ name: "", password: "", confirmpassword: "", email: "" });
      alert("Registration Successfully")
    }
  }

  const updatingData = (e) => {
    // console.log(e.target.name, e.target.value);
    var name = e.target.name;
    var value = e.target.value;
    setuserData({ ...userData, [name]: value })
  }

  return (
    <div id='register-fullpage'>
      <div id='register-page'>
        <div id='register-left-one'>
          <div className='register-left-one-box'>
            <p>Benefits of being a member</p>
          </div>
          <div className='register-left-one-box1'>
            <ul>
              <li>Find something to watch on your subscribed streaming services</li>
              <li>Log the movies and TV shows you have watched</li>
              <li> Keep track of your favourite movies and TV shows and get recommendations from them</li>
              <li> Build and maintain a personal watchlist</li>
              <li>Build custom mixed lists (movies and TV)</li>
              <li>Take part in movie and TV discussions</li>
              <li> Contribute to, and improve the information in our database</li>
            </ul>
          </div>
        </div>
        <div id='register-right-one'>
          <div className='register-right-one-box'>
            <h1>Sign up for an account</h1>
            <p>Signing up for an account is free and easy. Fill out the form below to get started. JavaScript is required to to continue.</p>
          </div>
          <form>
            <label>Username</label>
            <br />
            <input onChange={(e) => updatingData(e)} name='name' value={userData.name} type="text" placeholder='' />
            <br />
            <label className='sneha'>Password (4 characters minimum)</label>
            <br />
            <input onChange={(e) => updatingData(e)} name='password' value={userData.password} type="text" placeholder='' />
            <br />
            <label>Password Confirm</label>
            <br />
            <input onChange={(e) => updatingData(e)} name='confirmpassword' value={userData.confirmpassword} type="text" placeholder='' />
            <br />
            <label>Email</label>
            <br />
            <input onChange={(e) => updatingData(e)} name='email' value={userData.email} type="text" placeholder='' />
            <br />
          </form>
          <div className='register-right-one-box1'>
            <p>By clicking the "Sign up" button below, I certify that I have read and agree to the TMDB terms of use and privacy policy.</p>
          </div>
          <div className='register-right-one-box2'>
            <button onClick={(e) => Register(e)}>Sign Up</button>
            <button style={{
              marginLeft: "1%", border: "none",
              backgroundColor: "white", color: "blueviolet"
            }}>Cancel</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Register
