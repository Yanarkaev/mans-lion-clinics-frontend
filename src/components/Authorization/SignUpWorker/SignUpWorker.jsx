import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDepartments } from "../../../features/departments/departmentsSlice";
import { signInUser, signUpUser } from "../../../features/userSlice";
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
  const [schedule, setSchedule] = useState("");
  const signUp = useSelector((state) => state.user.signUp);
  const dep = useSelector((state) => state.departments);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getDepartments());
    if (signUp) {
      navigate("/signin");
    }
  }, [dispatch, navigate, signUp]);
  const handleSignUp = () => {
    dispatch(
      signUpUser({
        fullName,
        login,
        password,
        birthDay,
        department,
        code,
        img,
        jobTitle,
        schedule,
      })
    );
  };

  useEffect(() => {
    if (signUp) {
      dispatch(signInUser({ login, password }));
    }
  }, [dispatch, navigate, signUp, login, password]);

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
                onChange={(e) => setImg(e.target.files[0])}
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
              type="text"
              placeholder="График работы"
              value={schedule}
              onChange={(e) => setSchedule(e.target.value)}
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
              {!dep.loading &&
                dep.departments.map((item) => {
                  return <option value={item._id}>{item.name}</option>;
                })}
            </select>
          </div>
        </div>
        <Button
          variant="primary"
          style={{ margin: "auto" }}
          onClick={handleSignUp}
        >
          Подтвердить
        </Button>
      </div>
    </div>
  );
};

export default SignUpWorker;
