import React, { useContext } from "react";
import { AuthContext } from "../utils/AuthContext";

export default function Login() {
  const { login, setLogin } = useContext(AuthContext);
  function handleClick() {
    setTimeout(() => {
      setLogin(!login);
    }, 1000);
  }

  return (
    <div>
      <h1>Login</h1>
      <p>{login ? "You're logged in!" : "You're not logged in."}</p>
      <button onClick={handleClick}>{login ? "Logout." : "Login."}</button>
    </div>
  );
}