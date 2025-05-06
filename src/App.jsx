import { useState } from "react";
import "./App.css";
import story from "../src/data/promo/story"

function App() {
  const [scene, setScene] = useState("start");
  const [inventory, setInventory] = useState([]);

  const current = story[scene];

  const handleChoice = (option) => {
    setScene(option.next);
  
    if (option.inventory) {
      setInventory((prevInventory) => [
        ...prevInventory,
        ...option.inventory
      ]);
    }
  };

  return (
    <main className="container">
      <div className="main">
        <div className="section description">{current.text}</div>
        <div className="section img">
          <img src={current.img} alt="scene" />
        </div>
        <div className="section selector">
          <ul>
            {current.options.map((opt, i) => (
              <li key={i}>
                <button className="button" onClick={() => handleChoice(opt)}>
                  {opt.text}
                </button>
              </li>
            ))}
            {current.end && <li><strong>КІНЕЦЬ ГРИ</strong></li>}
            {current.success && <li><strong>ТИ ВРЯТУВАВСЯ 🎉</strong></li>}
          </ul>
        </div>
        <div className="section state">
          <p>🎒 Інвентар:</p>
          <ul>{inventory.map((item, i) => <li key={i}>{item}</li>)}</ul>
        </div>
      </div>
    </main>
  );
}

export default App;
