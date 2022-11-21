import moment from "moment";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signInUser, signUpUser } from "../../../features/userSlice";
import loadAuth from "../animations/loadAuth.json";
import s from "./SignUp.module.scss";
import Lottie from "lottie-react";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [birthDay, setBirthDate] = useState(
    moment().add(-18, "year").format("YYYY-MM-DD")
  );

  const [helper, setHelper] = useState("");
  const [show, setShow] = useState(false);
  const error = useSelector((state) => state.user.error);
  const loading = useSelector((state) => state.user.loading);
  const signUp = useSelector((state) => state.user.signUp);
  const signIn = useSelector((state) => state.user.signIn);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUp = () => {
    let newFullName = fullName;
    let newPassword = password;
    let newLogin = login;
    if (
      !(fullName.split(" ").length > 1) ||
      !(fullName.replace(/[^а-яА-ЯёЁ]+$/g, "").length === fullName.length)
    ) {
      setShow(true);
      setHelper(<span>Проверьте введенные данные</span>);
      setFullName("");
      newFullName = "";
    }
    if (
      !(password.replace(/[а-яёА-ЯЁ ]/g, "").length === password.length) ||
      password.length < 6
    ) {
      setShow(true);
      setHelper(<span>Проверьте введенные данные</span>);
      setPassword("");
      newPassword = "";
    }
    if (
      !(login.replace(/[а-яёА-ЯЁ ]/g, "").length === login.length) ||
      login.length < 6
    ) {
      setShow(true);
      setHelper(<span>Проверьте введенные данные</span>);
      setLogin("");
      newLogin = "";
    }
    SignUp(newFullName, newLogin, newPassword);
  };
  const SignUp = (fullName, login, password) => {
    if (fullName && login && password) {
      dispatch(signUpUser({ fullName, login, password, birthDay }));
    }
  };

  useEffect(() => {
    if (signUp) {
      dispatch(signInUser({ login, password }));
    }
  }, [dispatch, navigate, signUp, login, password]);

  if (signIn) {
    navigate("/");
  }

  return (
    <div className={s.main}>
      <div className={show ? s.helper_hover : s.helper_no_hover}>{helper}</div>
      {loading ? (
        <div className={s.signup}>
          <Lottie animationData={loadAuth} />
        </div>
      ) : (
        <div className={s.signup}>
          <h1>Регистрация</h1>
          {error ? (
            <>
              {error.includes("duplicate") ? (
                <h5
                  style={{
                    color: "orangered",
                    marginTop: "1rem",
                    marginBottom: "auto",
                    background: "rgba(10, 63, 188, 1)",
                    padding: "0.25rem",
                    borderRadius: "0.25rem",
                  }}
                >
                  логин уже занят
                </h5>
              ) : (
                <h5
                  style={{
                    color: "orangered",
                    marginTop: "1rem",
                    marginBottom: "auto",
                    background: "rgba(10, 63, 188, 1)",
                    padding: "0.25rem",
                    borderRadius: "0.25rem",
                  }}
                >
                  "Ошибка ввода данных, повторите попытку"
                </h5>
              )}
            </>
          ) : (
            <span
              style={{
                color: "orangered",
                marginTop: "1rem",
                marginBottom: "auto",
                background: "none",
                padding: "0.25rem",
                borderRadius: "0.25rem",
              }}
            ></span>
          )}
          <div className={s.inputText}>
            <input
              type="text"
              placeholder="Фамилия Имя отчество"
              value={fullName}
              onChange={(e) =>
                setFullName(e.target.value.replace(/^[a-zA-Z0-9]+$/, ""))
              }
              onFocus={() => {
                setShow(true);
                setHelper(
                  <>
                    <h5>Рекомендации</h5>
                    <ul>
                      <li>Фамилия Имя Отчество(при наличии)</li>
                      <li>Только Кириллица</li>
                    </ul>
                  </>
                );
              }}
              onFocusCapture={() => {
                setHelper("");
                setShow(false);
              }}
              onBlur={() => {
                setHelper("");
                setShow(false);
              }}
            ></input>
            <button onClick={() => setFullName("")}>
              <span>×</span>
            </button>
          </div>
          <div className={s.inputText}>
            <input
              type="text"
              placeholder="Логин"
              value={login}
              onChange={(e) => setLogin(e.target.value.replace(" ", "").trim())}
              onFocus={() => {
                setShow(true);
                setHelper(
                  <>
                    <h5>Рекомендации</h5>
                    <ul>
                      <li>Длина больше 6 символов</li>
                      <li>Только Латинские буквы и числа</li>
                    </ul>
                  </>
                );
              }}
              onFocusCapture={() => {
                setHelper("");
                setShow(false);
              }}
              onBlur={() => {
                setHelper("");
                setShow(false);
              }}
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
              onChange={(e) =>
                setPassword(e.target.value.replace(" ", "").trim())
              }
              onFocus={() => {
                setShow(true);
                setHelper(
                  <>
                    <h5>Рекомендации</h5>
                    <ul>
                      <li>Длина больше 6 символов</li>
                      <li>Только Латинские буквы и числа</li>
                    </ul>
                  </>
                );
              }}
              onFocusCapture={() => {
                setHelper("");
                setShow(false);
              }}
              onBlur={() => {
                setHelper("");
                setShow(false);
              }}
            ></input>
            <button onClick={() => setPassword("")}>×</button>
          </div>
          <div className={s.inputDate}>
            <div className={s.placeholder}>Дата рождения:</div>
            <input
              type="date"
              placeholder="Дата рождения"
              value={birthDay}
              max={moment().add(-18, "year").format("YYYY-MM-DD")}
              onChange={(e) => {
                setBirthDate(moment(e.target.value).format("YYYY-MM-DD"));
              }}
            ></input>
          </div>
          <Button
            variant="primary"
            style={{ marginTop: "0.5rem" }}
            onClick={handleSignUp}
          >
            Подтвердить
          </Button>
          <div className={s.links}>
            <Link to="/signin">Войти в аккаунт</Link>
            <Link to="/worker">Сотрудникам организации</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
