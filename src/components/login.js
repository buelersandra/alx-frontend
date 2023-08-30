import { useState } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //ancient-headland-44729-521a14483af1.herokuapp.com
      let res = await fetch("http://ancient-headland-44729-521a14483af1.herokuapp.com/infoms/v1/login",
       {
          method: "POST",
          headers: {
            'accept': '*/*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              emailAddress: email,
              password: password,
          }),
      });
      var body = await res.json();
      if (res.status === 200) {
        setEmail("");
        setPassword("");
        localStorage.setItem("token", body.data.accessToken);
        navigate("/home");
       
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
        <h1>Login</h1>
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
        <button type="submit">Login</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  )
    
}

export default Login;