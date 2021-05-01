import "bootstrap/dist/css/bootstrap.min.css";
import { data } from "./data";

function App() {
  return (
    <div className="App">
      <header className="header">JS Masters</header>
      <nav></nav>
      <div className="container">
        {data.map((val) => {
          return (
            <div className="question-list">
              <div className="card w-75">
                <div className="card-body">
                  <h5 className="card-title">{val.title}</h5>
                  <p className="card-text">{val.question}</p>
                  <div className="inptotpt">
                  <p className="input">&#8226;	Input : {val.input}</p>
                  <p className="output">&#8226;	Output : {val.output}</p>
                  </div>              
                  <a href="#" class="btn btn-success">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
