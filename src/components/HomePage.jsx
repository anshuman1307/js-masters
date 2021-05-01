import React, { Component } from 'react';
import { data } from "../data";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="container">
        {data.map((val) => {
            let route = val.title.split(" ").join("-").toLowerCase();
          return (
            <div  key={val.title} className="question-list">
            <div className="card w-75">
              <div className="card-body">
                <h5 className="card-title">{val.title}</h5>
                <p className="card-text">{val.question}</p>
                <div className="inptotpt">
                <p className="input">&#8226;	Input : {val.input}</p>
                <p className="output">&#8226;	Output : {val.output}</p>
                </div>  
                <Link to={`/js-masters/details/${route}/${val.id}`}>
                <a href="#" className="btn btn-success">
                  View Code
                </a>
                </Link>            

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