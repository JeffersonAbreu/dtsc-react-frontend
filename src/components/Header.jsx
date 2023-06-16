import { useContext } from "react";
import classes from "./Header.module.css";
import AppContext from "./AppContext";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { tema, setTema } = useContext(AppContext);

  function handleTemaClick(e) {
    e.preventDefault();
    if (tema === "light") {
      setTema("dark");
    } else {
      setTema("light")
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="/">
            <span className={classes.imgLogo}><img src="/public/logo.png" alt="Logo" width="95" height="95"/></span>
            <span className="fs-3">Dog Tracker System Control - DTSC</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navMenu">
            <div className="navbar-nav">
              <NavLink to="/" className="nav-link">Principal</NavLink>
              <NavLink to="/ufs" className="nav-link">UFs</NavLink>
              <NavLink to="/alunos" className="nav-link">Alunos</NavLink>
              <NavLink to="/instrutores" className="nav-link">Instrutores</NavLink>
              <NavLink to="/sobre" className="nav-link">Sobre</NavLink>

              <a href="#" className="nav-link" onClick={handleTemaClick}>
                {tema === "dark" && (
                  <i className="bi bi-sun-fill" />
                )}
                {tema === "light" && (
                  <i className="bi bi-moon-fill" />
                )}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header;