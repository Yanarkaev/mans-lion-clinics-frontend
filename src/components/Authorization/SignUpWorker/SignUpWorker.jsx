import React, { useState } from "react";
import { Button } from "react-bootstrap";
import s from "./SignUpWorker.module.scss";

const SignUpWorker = () => {
  const [department, setDepartment] = useState("");
  const [img, setImg] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [code, setCode] = useState("");

  return (
    <div className={s.main}>
      <div className={s.signup}>
        <h2> Регистрация сотрудника организации</h2>
        <div className={s.inputs}>
          <div className={s.path}>
            <div className={s.inp_img}>
              <h3>Фотография</h3>
              <input
                type="file"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              ></input>
            </div>
            <div className={s.input}>
              <div>
                <h3>Пригласительный код</h3>
              </div>
              <div>
                <input
                  type="text"
                  className={s.inp_code}
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                ></input>
              </div>
            </div>
          </div>
          <div className={s.path}>
            <input
              type="text"
              placeholder="ФИО"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            ></input>
            <input
              type="text"
              placeholder="Логин"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            ></input>
            <input
              type="text"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <input
              type="text"
              placeholder="Должность"
              value={jobTitle}
              onChange={(e) => {
                setJobTitle(e.target.value);
              }}
            ></input>
            <input
              type="date"
              value={birthDay}
              onChange={(e) => setBirthDay(e.target.value)}
            ></input>
            <select
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
              }}
            >
              {department ? "" : <option>Выберите отделение</option>}
              <option>Chocolate</option>
              <option>Coconut</option>
              <option>Mint</option>
              <option>Strawberry</option>
              <option>Vanilla</option>
            </select>
          </div>
        </div>
        <Button variant="primary" style={{ margin: "auto" }}>
          Подтвердить
        </Button>
      </div>
    </div>
  );
};

export default SignUpWorker;
