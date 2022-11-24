import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signInUser } from "../../../features/userSlice";
import s from "./SignIn.module.scss";

const SignIn = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const signIn = useSelector((state) => state.user.signIn);
  const handleSignIn = () => {
    dispatch(signInUser({ login, password }));
  };
  useEffect(() => {
    if (signIn) {
      navigate("/");
    }
  }, [dispatch, navigate, signIn]);

  return (
    <div className={s.main}>
      <div className={s.signup}>
        <h1>Вход в аккаунт</h1>
        <div className={s.info}>
          {user.signUp ? "Вы успешно зарегистрировались" : ""}
        </div>
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
          disabled={password.length > 5 && login.length > 5 ? "" : "disabled"}
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
