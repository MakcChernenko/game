import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main">
        <div className="section description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta amet
          incidunt assumenda et labore alias aperiam dolores excepturi optio
          veritatis eum dolorum sed nemo quibusdam, doloribus illo eos beatae
          modi!
        </div>
        <div className="section img">img</div>
        <div className="section selector">
          <ul>
            <li>choice 1</li>
            <li>choice 2</li>
            <li>choice 3</li>
          </ul>
        </div>
        <div className="section state">xp = 11</div>
      </div>
    </>
  );
}

export default App;
