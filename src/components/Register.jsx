import { useState } from "react";

function Register() {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        
        const allUsers = JSON.parse(localStorage.getItem("users")) || [];
        const existingUser = allUsers.find((user) => user.mail === mail);
        if (existingUser) {
            alert("User is already registred!");
            return;
        }
    
                
        const newUser = {
            name,
            mail,
            password,
        };
        allUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(allUsers));
        localStorage.setItem("name", JSON.stringify(newUser.name));

        window.location.replace("/dashboard");
    
    
      };

  return (
    <>
      <label>
        Name: 
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <hr />
      <label>
        Mail: 
        <input
          type="text"
          placeholder="Mail"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
      </label>
      <hr />
      <label>
        Password: 
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <hr />
      <button onClick={handleRegister}>Register</button>
    </>
  )
}

export default Register