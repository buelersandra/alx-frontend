import { useState } from "react";
import React from 'react';

function SignUp() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      //ancient-headland-44729-521a14483af1.herokuapp.com
      let res = await fetch("https://ancient-headland-44729-521a14483af1.herokuapp.com/infoms/v1/register", {
        method: "POST",
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            emailAddress: email,
            password: password,
            confirmPassword: confirmPassword,
        }),
      });
      if (res.status === 201) {
        setPassword("");
        setEmail("");
        setConfirmPassword("")
        setMessage("User created successfully. You can login Now");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
       <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br/>
        <input
          type="text"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <input
          type="text"
          value={confirmPassword}
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br/>
        <button type="submit">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  )
    
}

export default SignUp;