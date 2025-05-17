import { useState, useEffect } from "react";
import "./App.css";
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
    game === "👉Дар Міанта"
      ? "bg-avantyurist"
      : game === "👉demo"
      ? "bg-demo"
      : "bg-default";

  const games = ["👉Дар Міанта", "👉demo"];

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
          <ul>
            {games.map((game, i) => (
              <li key={i}>
                <h2 className="h2" onClick={() => handleChoice(game)}>
                  {game}
                </h2>
              </li>
            ))}
          </ul>
        )}
        {game === "👉Дар Міанта" && <Avantyurist setMusicUrl={setMusicUrl} />}
        {game === "👉demo" && <Demo setMusicUrl={setMusicUrl} />}
        {!game && (
          <button className="modalButton" onClick={handleClick}>
            Оновлення
          </button>
        )}
      </div>
    </div>
  );
};
export default App;
