
import React, { useState } from "react";
import { getUser } from "../services/fetchRequests";

export default function LogIn() {
  const [email, setEmail] = useState("");

  async function handleSubmit() {
    const result=await getUser(email)
    if(result){
      window.localStorage.removeItem('currentUser');
        window.localStorage.setItem('currentUser', JSON.stringify(result));
    }
    else {
      alert("you need to sign up")
     }
  }

  return (
    <form>
      <h1>Enter Your Account</h1>
      <label>
        Email:
        <input
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required />
      </label>
      <br /><br />
      <button onClick={handleSubmit}>Submit</button>
    </form>)
}