import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../assets/css/Navbar.css";

const activeTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "goldenrod" };
  } else {
    return { color: "turquoise" };
  }
};

const NavbarComponent = ({ history }) => {
  return (
    <nav>
      <ul>
        <li>
          <div className="nav-box">
            <a href="/">
              <center>
                <i className="fa fa-home" aria-hidden="true"></i>
                <label>
                  <Link
                    style={activeTab(history, "/")}
                    className="nav-link"
                    to="/">
                    Home
                  </Link>
                </label>
              </center>
            </a>
          </div>
        </li>
        {/* <li>
          <div className="nav-box">
            <a href="#puzzle-game">
              <center>
                <i class="fa fa-gamepad" aria-hidden="true"></i>
                <label>
                  <Link
                    style={activeTab(history, "/")}
                    className="nav-link"
                    to="/">
                    Game
                  </Link>
                </label>
              </center>
            </a>
          </div>
        </li> */}
        <li>
          <div className="nav-box">
            <a href="/">
              <center>
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
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
          <div className="nav-box">
            <a href="/">
              <center>
                <i class="fa fa-info-circle" aria-hidden="true"></i>
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
