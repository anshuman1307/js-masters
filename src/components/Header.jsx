import React, { Component } from "react";
import { data } from "../data";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import star from "../star.svg";
import javascript from "../javascript.svg";
import backarrow from "../arrow-left-solid.svg";
import user from "../user.svg";
import saved from "../saved.svg";
import feedback from "../feedback.svg";
import like from "../like.svg";
import contact from "../contact.svg";
import multiply from "../multiply.svg";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: true,
    };
  }
  toggleSidebar = () => {
    document.getElementById("mySidenav").style.opacity =
      document.getElementById("mySidenav").style.opacity == "1" ? "0" : "1";
    document.getElementById("overlay").style.opacity =
      document.getElementById("overlay").style.opacity == "0.5" ? "0" : "0.5";
    document.getElementById("mySidenav").style.visibility =
      document.getElementById("mySidenav").style.visibility == "visible"
        ? "hidden"
        : "visible";
    document.getElementById("overlay").style.visibility =
      document.getElementById("overlay").style.visibility == "visible"
        ? "hidden"
        : "visible";
  };
  render() {
    let style =
      this.props.back == "true"
        ? {
            position: "absolute",
            top: "27%",
            left: "11%",
            display: "inline-block",
          }
        : {
            position: "absolute",
            top: "27%",
            left: "4%",
            display: "inline-block",
          };
    return (
      <header
        className="header"
        style={{ position: "fixed", top: "0", zIndex: "99", width: "100%" }}
      >
        <div>
          {this.props.back == "true" && (
            <Link to={`/js-masters`}>
              <nav
                style={{
                  position: "fixed",
                  top: "15px",
                  left: "3%",
                  display: "inline-block",
                }}
              >
                <img src={backarrow} alt="back" width="23px" height="23px" />
              </nav>
            </Link>
          )}
          <span style={style} onClick={() => this.toggleSidebar()}>
            {" "}
            <svg
              height="24"
              className="octicon octicon-three-bars"
              viewBox="0 0 16 16"
              version="1.1"
              width="24"
              aria-hidden="true"
            >
              <path
                fill="rgb(15,43,60)"
                fillRule="evenodd"
                d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"
              ></path>
            </svg>
          </span>
        </div>

        <span>
          <img
            style={{
              position: "relative",
              bottom: "4%",
              right: "2%",
              marginLeft: "7%",
            }}
            src={javascript}
            alt="back"
            width="45px"
            height="45px"
          />{" "}
          <span style={{ fontSize: "28px", position: "relative", top: "13%" }}>
            masters
          </span>
        </span>
        {this.state.sidebar && (
          <>
            <div
              id="overlay"
              className="overlay"
              style={{ opacity: "0", visibility: "hidden" }}
              onClick={() => this.toggleSidebar()}
            ></div>
            <div
              id="mySidenav"
              className="sidenav"
              style={{ opacity: "0", visibility: "hidden" }}
            >
              <div className="user">
                <button className="signin-btn">Login</button>
                <img
                  src={multiply}
                  alt="back"
                  width="19px"
                  height="19px"
                  style={{
                    float: "right",
                    position: "relative",
                    top: "13px",
                    right: "4%",
                    color: "rgb(15,43,60)",
                  }}
                />
              </div>
              <a href="#">
                <img src={saved} alt="back" width="19px" height="19px" /> Saved
                items
              </a>
              <a href="#">
                <img src={like} alt="back" width="19px" height="19px" /> Popular
              </a>
              <a href="#">
                <img src={feedback} alt="back" width="19px" height="19px" />{" "}
                Feedback
              </a>
              <a href="#">
                <img src={contact} alt="back" width="19px" height="19px" />{" "}
                Contact Us
              </a>
              {/* <a href="#"  style={{position:"fixed",bottom:"2%",fontSize:"15px",color:"#35a5c9",textDecoration:"underline"}}>
              See icons attributions
              </a> */}
            </div>
          </>
        )}
      </header>
    );
  }
}

export default Header;
