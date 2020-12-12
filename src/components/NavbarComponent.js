import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Navbar.css";

const activeTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "teal" };
  } else {
    return { color: "turquoise" };
  }
};

const NavbarComponent = ({ history }) => {
  return (
    <nav>
      <ul>
        <li>
          <div class="nav-box">
            <a href="/">
              <center>
                <i class="fa fa-home" aria-hidden="true"></i>
                <label>
                  <Link
                    style={activeTab(history, "/")}
                    className="nav-link"
                    to="/"
                  >
                    Home
                  </Link>
                </label>
              </center>
            </a>
          </div>
        </li>
        <li>
          <div class="nav-box">
            <a href="/">
              <center>
                <i class="fa fa-university" aria-hidden="true"></i>
                <label>
                  <Link
                    style={activeTab(history, "/inventory")}
                    className="nav-link"
                    to="/inventory"
                  >
                    Inventory
                  </Link>
                </label>
              </center>
            </a>
          </div>
        </li>
        <li>
          <div class="nav-box">
            <a href="/">
              <center>
                <i class="fa fa-university" aria-hidden="true"></i>
                <label>
                  <Link
                    style={activeTab(history, "/about")}
                    className="nav-link"
                    to="/about"
                  >
                    About
                  </Link>
                </label>
              </center>
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(NavbarComponent);
