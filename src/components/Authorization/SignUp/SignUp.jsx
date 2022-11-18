import moment from "moment";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import s from "./SignUp.module.scss";
const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [birthDay, setBirthDate] = useState(
    moment().add(-18, "year").format("YYYY-MM-DD")
  );
  const [helper, setHelper] = useState("");
  const [show, setShow] = useState(false);
  const handleSignUp = () => {
    if (
      !(fullName.split(" ").length > 1) ||
      !(fullName.replace(/[^а-яА-ЯёЁ]+$/g, "").length === fullName.length)
    ) {
      setShow(true);
      setHelper(<span>Проверьте введенные данные</span>);
      setFullName("");
    }
    if (
      !(password.replace(/[а-яёА-ЯЁ ]/g, "").length === password.length) ||
      password.length < 6
    ) {
      setShow(true);
      setHelper(<span>Проверьте введенные данные</span>);
      setPassword("");
    }
    if (
      !(login.replace(/[а-яёА-ЯЁ ]/g, "").length === login.length) ||
      login.length < 6
    ) {
      setShow(true);
      setHelper(<span>Проверьте введенные данные</span>);
      setLogin("");
    }
    console.log(password.replace(/[а-яёА-ЯЁ ]/g, ""));
  };
  return (
    <div className={s.main}>
      <div className={show ? s.helper_hover : s.helper_no_hover}>{helper}</div>
      <div className={s.signup}>
        <h1>Регистрация</h1>
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
    </div>
  );
};

export default SignUp;
