import { useState } from "react";

const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    const checkUser = allUsers.find((user) => user.mail === mail);
        if (checkUser && checkUser.password === password) {
            localStorage.setItem("name", JSON.stringify(checkUser.name));
            window.location.replace("/dashboard");
            return;
        }
        else {
            alert("Wrong mail or password!");
            return;
        }
  };

  return (
    <>
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
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <hr />
      <button onClick={handleLogin}>Log In</button>
    </>
  );
};

export default Login;
