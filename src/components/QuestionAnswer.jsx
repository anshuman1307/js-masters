import React, { Component } from "react";
import { data } from "../data";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Prism from "prismjs";
import Header from "./Header.jsx";
import copy from "../clone-regular.svg";
import backarrow from "../arrow-left-solid.svg";
import star from "../star.svg";
import javascript from "../javascript.svg";

class QuestionAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
    };
  }
  componentDidMount() {
    setTimeout(() => Prism.highlightAll(), 0);
    console.log(this.props);
    this.setState({ id: this.props.match.params.id });
  }
  copyToClipboard = () => {
    var copyText = document.getElementById("code");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  };
  render() {
    let currentData;
    if (this.state.id) {
      currentData = data[this.state.id - 1];
    }
    console.log(this.state.id);
    return (
      <>
        <Header back="true" />
        <div       
          className=" w3-animate-right card question-container"
          style={{ position: "relative", top: "67px" }}
        >
          {currentData && (
            <>
              <div className="card-title">{currentData.title}</div>
              <div className="card-text">{currentData.question}</div>
              <div className="detailsinptotpt">
                <p className="input">Input : {currentData.input}</p>
                <p className="output">Output : {currentData.output}</p>
              </div>
              <div className="code card-title">
                Solution :
                {/* <img
                src={copy}
                alt="Copy"
                style={{ position: "relative", top: "44px", left: "69%" }}
                onClick={() => this.copyToClipboard()}
              /> */}
                <pre>
                  <code id="code" className="lang-css">
                    {currentData.code}
                  </code>
                </pre>
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}

export default QuestionAnswer;
