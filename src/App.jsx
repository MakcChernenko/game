import { useState, useEffect } from "react";
import "./styles/common.css";
import "./styles/App.css";
import Avantyurist from "./components/avanturist/avantyurist";
import Demo from "./components/demo/Demo";
import AudioPlayer from "./components/AudioPlayer";
import Modal from "./components/modal/Modal";

const App = () => {
  const [game, setGame] = useState(null);
  const [musicUrl, setMusicUrl] = useState(null);
  const [modal, setModal] = useState(null);

  const handleClick = () => {
    setModal(!modal);
  };

  useEffect(() => {
    if (game === null) {
      setMusicUrl("/sounds/titleTheme.mp3");
    }
  }, [game]);

  const backgroundClass =
    game === "The gift of Miant"
      ? "bg-avantyurist"
      : game === "demo"
      ? "bg-demo"
      : "bg-default";

  const games = ["The gift of Miant", "demo"];

  const handleChoice = (game) => {
    setGame(game);
    console.log(game);
  };
  return (
    <div className={`main ${backgroundClass}`}>
      <AudioPlayer musicUrl={musicUrl} isUnlocked={true} />
      {modal && <Modal setModal={setModal} modal={modal} />}
      <div className="container">
        {!game && (
          <div className="game-menu">
            <h1 className="logo">GloDog</h1>
            <ul className="list">
              {games.map((game, i) => (
                <li key={i}>
                  <h2 className="h2" onClick={() => handleChoice(game)}>
                    {game}
                  </h2>
                </li>
              ))}
            </ul>
            <p className="version">v0.1.0</p>
          </div>
        )}
        {game === "The gift of Miant" && (
          <Avantyurist setMusicUrl={setMusicUrl} />
        )}
        {game === "demo" && <Demo setMusicUrl={setMusicUrl} />}
        {!game && (
          <button className="modalButton" onClick={handleClick}>
            <img className="img" src="img/rectangle 1.png" alt="" />
          </button>
        )}
      </div>
    </div>
  );
};
export default App;
