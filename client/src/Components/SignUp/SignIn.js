import React, { useState } from "react";
import "./SignUp.css"
import { getUser } from "../services/fetchRequests";

export default function SignIn() {
  const [fname, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  async function handleSubmit() {
    const user = { 'name': fname, 'email': email, 'phone': phone, 'userType': 3 }
    const result = await getUser(email)
    if (!result) {
      window.localStorage.removeItem('currentUser');
      window.localStorage.setItem('currentUser', JSON.stringify(user));
      const posting = await fetch('http://localhost:8080/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
        mode: 'cors'
      });
      const content = await posting.json();
    }
    else alert("user exists");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Account</h1>
      <label>
        First Name:
        <input
          name="fname"
          type="fname"
          value={fname}
          onChange={e => setFirstName(e.target.value)}
          required />
      </label>
      <br /><br />
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
      <label>
        Phone Number:
        <input
          name="phone"
          type="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required />
      </label>
      <br /><br />
      <button>Submit</button>
    </form>
  )
}