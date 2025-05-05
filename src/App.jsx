import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <main className="container" >
      <div className="main">
        <div className="section description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta amet
          incidunt assumenda et labore alias aperiam dolores excepturi optio
          veritatis eum dolorum sed nemo quibusdam, doloribus illo eos beatae
          modi!
        </div>
        <div className="section img"><img src="/public/img/gotick.jpg" alt="" /></div>
        <div className="section selector">
          <ul>
            <li><button className="button" >choice1</button></li>
            <li><button className="button">choice2</button></li>
            <li><button className="button">choice3</button></li>
          </ul>
        </div>
        <div className="section state">xp = 11</div>
      </div>
      </main>
    </>
  );
}

export default App;
