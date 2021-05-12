import React, { Component } from "react";
import { data } from "../data";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import star from "../star.svg";
import javascript from "../javascript.png";
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
      isLoggedIn: false,
    };
  }
  toggleSidebar = () => {
    // document.getElementById("mySidenav").style.opacity =
    //   document.getElementById("mySidenav").style.opacity === "1" ? "0" : "1";
    // document.getElementById("overlay").style.opacity =
    //   document.getElementById("overlay").style.opacity === "0.5" ? "0" : "0.5";
    // document.getElementById("mySidenav").style.visibility =
    //   document.getElementById("mySidenav").style.visibility === "visible"
    //     ? "hidden"
    //     : "visible";
    // document.getElementById("overlay").style.visibility =
    //   document.getElementById("overlay").style.visibility === "visible"
    //     ? "hidden"
    //     : "visible";
    document.getElementById("mySidenav").style.width =
      document.getElementById("mySidenav").style.width === "65%" ? "0" : "65%";
    document.getElementById("overlay").style.width =
      document.getElementById("overlay").style.width === "100%" ? "0" : "100%";
    document.getElementById("multiply").style.display =
      document.getElementById("multiply").style.display === "block"
        ? "none"
        : "block";
  };
  loginClickHandler = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };
  render() {
    let style =
      this.props.back === "true"
        ? {
            position: "absolute",
            top: "34%",
            left: "11%",
            display: "inline-block",
          }
        : {
            position: "absolute",
            top: "34%",
            left: "5%",
            display: "inline-block",
          };
    return (
      <header
        className="header"
        style={{
          position: "fixed",
          top: "0",
          zIndex: "99",
          width: "100%",
          height: "9%",
        }}
      >
        <div>
          {this.props.back === "true" && (
            <Link to={`/js-masters`}>
              <nav
                style={{
                  position: "fixed",
                  top: "24px",
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
              viewBox="0 0 100 80"
              width="30"
              height="30"
              fill="rgb(15,43,60)"
            >
              <rect width="85" height="7" fill="rgb(15,43,60)"></rect>
              <rect y="25" width="85" height="7" fill="rgb(15,43,60)"></rect>
              <rect y="50" width="85" height="7" fill="rgb(15,43,60)"></rect>
            </svg>
          </span>
        </div>

        <span>
          <img
            style={{
              position: "relative",
              bottom: "0%",
              top: "7%",
              right: "2%",
              marginLeft: "7%",
            }}
            src={javascript}
            alt="back"
            width="60px"
            height="60px"
          />{" "}
          <span style={{ fontSize: "24px", position: "relative", top: "32%" }}>
            masters
          </span>
        </span>
        {this.state.sidebar && (
          <>
            <div
              id="overlay"
              className="overlay"
              style={{ visibility: "visible", width: "0" }}
              onClick={() => this.toggleSidebar()}
            ></div>
            <div
              id="mySidenav"
              className="sidenav"
              style={{ visibility: "visible", width: "0" }}
            >
              <div className="user">
                {this.state.isLoggedIn && (
                  <div className="sidebar-profile">
                    <img src={user} alt="back" width="40px" height="40px" />{" "}
                    <div style={{ fontWeight: 300 }}>Anshuman Sharma</div>
                  </div>
                )}
                {!this.state.isLoggedIn && (
                  <button
                    className="signin-btn"
                    onClick={() => this.loginClickHandler()}
                  >
                    Login
                  </button>
                )}

                <img
                  id="multiply"
                  src={multiply}
                  alt="back"
                  width="19px"
                  height="19px"
                  onClick={() => this.toggleSidebar()}
                  style={{
                    float: "right",
                    position: "fixed",
                    top: "11%",
                    right: "39%",
                    color: "rgb(15,43,60)",
                    display: "none",
                  }}
                />
              </div>
              <a href="javascript:void(0)">
                <img
                  className="mr5 ml2"
                  src={saved}
                  alt="back"
                  width="19px"
                  height="19px"
                />{" "}
                Saved items
              </a>
              <a href="javascript:void(0)">
                <img
                  className="mr5 ml2"
                  src={like}
                  alt="back"
                  width="19px"
                  height="19px"
                />{" "}
                Popular
              </a>
              <a href="javascript:void(0)">
                <img
                  className="mr5 ml2"
                  src={feedback}
                  alt="back"
                  width="19px"
                  height="19px"
                />{" "}
                Feedback
              </a>
              <a href="javascript:void(0)">
                <img
                  className="mr5 ml2"
                  src={contact}
                  alt="back"
                  width="19px"
                  height="19px"
                />{" "}
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
