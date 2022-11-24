import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../features/userSlice";

const Header = () => {
  const [scrollPos, setScrollPos] = useState("");

  document.addEventListener("scroll", () => {
    setScrollPos(window.scrollY);
  });
  const token = useSelector((state) => state.user.token);

  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(userLogout());
  };
  useEffect(() => {}, [dispatch]);
  return (
    <Navbar
      className={`${styles.header} ${scrollPos > 0 ? styles.headerFixed : ""}`}
    >
      <Container className={styles.headerContainer}>
        <Navbar.Brand>
          <Link to="main">Logo</Link>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
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
          </Link>
        )}

        <Button className={styles.signinBtn} variant="success">
          {token ? (
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
