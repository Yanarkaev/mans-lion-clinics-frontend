import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isUserSignIn, userLogout } from "../../features/userSlice";
import doctor from "../../assets/Header/doctorIcon.svg";
import user from "../../assets/Header/userIcon.svg";
import headerLogo from "../../assets/Header/headerLogo.png";
const Header = () => {
  const token = useSelector((state) => state.user.token);
  let parsedJwt;
  if (token) {
    const parseJwt = (token) => {
      let base64Url = token.split(".")[1];
      let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      let jsonPayload = decodeURIComponent(
        window
          .atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );

      return JSON.parse(jsonPayload);
    };
    parsedJwt = parseJwt(token);
  }

  const [scrollPos, setScrollPos] = useState("");
  const isToken = useSelector((state) => state.user.token);

  document.addEventListener("scroll", () => {
    setScrollPos(window.scrollY);
  });

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(userLogout());
  };
  useEffect(() => {
    dispatch(isUserSignIn());
  }, [dispatch]);
  return (
    <Navbar
      className={`${styles.header} ${scrollPos > 0 ? styles.headerFixed : ""}`}
    >
      <Container className={styles.headerContainer}>
        <Navbar.Brand>
          <Link to="/">
            <div className={styles.headerLogo}>
              <img src={headerLogo} alt="" />
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id="navigate">
            <Link to="/" className={styles.navLink}>
              Главная
            </Link>
            <Link to="/about" className={styles.navLink}>
              О нас
            </Link>
            <Link to="/entry" className={styles.navLink}>
              Запись
            </Link>
            <Link to="/contacts" className={styles.navLink}>
              Контакты
            </Link>
          </Nav>
        </Navbar.Collapse>
        {token && (
          <Link to="/account">
            <div className={styles.account}></div>
        {isToken && (
          <Link to="/account">
            <div className={styles.account}>
              <img
                src={parsedJwt.role === "doctor" ? `${doctor}` : `${user}`}
                alt=""
              />
            </div>
          </Link>
        )}

        <Button className={styles.signinBtn} variant="success">
          {isToken ? (
            <Link to="/" onClick={handleLogOut}>
              Выйти
            </Link>
          ) : (
            <Link to="/signin">Войти</Link>
          )}
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
