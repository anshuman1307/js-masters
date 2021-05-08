import React, { Component } from "react";
import { data } from "../data";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import star from "../star.svg";
import javascript from "../javascript.svg";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="w3-animate-left container">
        <header className="header">
          <span style={{position:"absolute",top:"1%",left:"3%"}}> <svg height="24" class="octicon octicon-three-bars" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill="white" fill-rule="evenodd" d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"></path></svg></span>
        <span><img style={{position:"relative",bottom:"4%",right:"2%",marginLeft:"7%"}} src={javascript} alt="back" /> <span style={{fontSize:"28px",position:"relative",top:"16%"}}>masters</span></span>
          <div
            className="w3-sidebar w3-bar-block w3-border-right"
            style={{ display: "none" }}
            id="mySidebar"
          >
            <button className="w3-bar-item w3-large">Close &times;</button>
            <a href="!#" className="w3-bar-item w3-button">
              Link 1
            </a>
            <a href="!#" className="w3-bar-item w3-button">
              Link 2
            </a>
            <a href="!#" className="w3-bar-item w3-button">
              Link 3
            </a>
          </div>
          {/* <Link to={`/js-masters`}>
              <nav style={{ position: "fixed", top: "-5px", left: "3%" }}>
                <img src={backarrow} alt="back" />
              </nav>
            </Link> */}
        </header>
        {data.map((val) => {
          let route = val.title.split(" ").join("-").toLowerCase();
          return (
            <div key={val.title} className="question-list">
              <div className="card w-75">
                <div className="card-body">
                  <h5 className="card-title">{val.title}</h5>
                  <p className="card-text">{val.question}</p>
                  <div className="inptotpt">
                    <p className="input">&#8226; Input : {val.input}</p>
                    <p className="output">&#8226; Output : {val.output}</p>
                  </div>
                  <Link to={`/js-masters/details/${route}/${val.id}`}>
                    <button href="#" className="btn btn-success">
                      View Code
                    </button>
                  </Link>
                  <img className="star" src={star} alt="back" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default HomePage;
