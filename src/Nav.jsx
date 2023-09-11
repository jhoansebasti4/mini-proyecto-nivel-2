import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Localitation
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Add Localitation
                  </a>
                </li>
                {/* Mostrar todas las ciudades desde stays.json aquí */}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Add guests
              </a>
              <ul className="dropdown-menu">
                <li>
                  <div className="d-flex align-items-center">
                    <span className="me-2">Adults Ages 13 or above</span>
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        -
                      </button>
                      <span className="btn btn-light">0</span>
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex align-items-center">
                    <span className="me-2">Children Ages 2 - 12</span>
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        -
                      </button>
                      <span className="btn btn-light">0</span>
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
           
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
