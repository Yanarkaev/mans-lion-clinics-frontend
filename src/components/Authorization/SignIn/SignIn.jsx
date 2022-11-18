import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import s from "./SignIn.module.scss";

const SignIn = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {};

  return (
    <div className={s.main}>
      <div className={s.signup}>
        <h1>Вход в аккаунт</h1>
        <div className={s.inputText}>
          <input
            type="text"
            placeholder="Логин"
            value={login}
            onChange={(e) => setLogin(e.target.value.replace(" ", "").trim())}
          ></input>
          <button onClick={() => setLogin("")}>
            <span>×</span>
          </button>
        </div>
        <div className={s.inputText}>
          <input
            type="text"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button onClick={() => setPassword("")}>×</button>
        </div>
        <Button
          variant="primary"
          style={{ marginTop: "0.5rem" }}
          onClick={handleSignIn}
        >
          Подтвердить
        </Button>
        <div className={s.links}>
          <Link to="/signup">Регистрация</Link>
          <Link to="/sad">Забыли Пароль?</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
