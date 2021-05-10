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

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: true,
    };
  }
  toggleSidebar = () => {
    document.getElementById("mySidenav").style.opacity=document.getElementById("mySidenav").style.opacity == "1"?"0":"1";
    document.getElementById("overlay").style.opacity=document.getElementById("overlay").style.opacity == "0.5"?"0":"0.5";
    document.getElementById("mySidenav").style.visibility=document.getElementById("mySidenav").style.visibility == "visible"?"hidden":"visible";
    document.getElementById("overlay").style.visibility=document.getElementById("overlay").style.visibility == "visible"?"hidden":"visible";
    
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
                <img src={backarrow} alt="back" />
              </nav>
            </Link>
          )}
          <span style={style} onClick={() => this.toggleSidebar()}>
            {" "}
            <svg
              height="24"
              class="octicon octicon-three-bars"
              viewBox="0 0 16 16"
              version="1.1"
              width="24"
              aria-hidden="true"
            >
              <path
                fill="white"
                fill-rule="evenodd"
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
          />{" "}
          <span style={{ fontSize: "28px", position: "relative", top: "16%" }}>
            masters
          </span>
        </span>
        {this.state.sidebar && (
          <>
            <div id="overlay" className="overlay" style={{opacity:"0",visibility:"hidden"}} onClick={() => this.toggleSidebar()}></div>
            <div id="mySidenav" className="sidenav" style={{opacity:"0",visibility:"hidden"}}>
              <div className="user">
                <img src={user} alt="back" />
                <a href="javascript:void(0)" onClick={() => this.toggleSidebar()} className="closebtn">
                  &times;
                </a>
              </div>
              <a href="#">
                <img src={saved} alt="back" /> Saved items
              </a>
              <a href="#">
                <img src={like} alt="back" /> Popular
              </a>
              <a href="#">
                <img src={feedback} alt="back" /> Feedback
              </a>
              <a href="#">
                <img src={contact} alt="back" /> Contact Us
              </a>
            </div>
          </>
        )}
      </header>
    );
  }
}

export default Header;
