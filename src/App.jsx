import { useState, useEffect } from "react";
import "./app.css";
import main from "./data/main/main";
import Avantyurist from "./components/avanturist/avantyurist";
import Demo from "./components/demo/Demo";
import AudioPlayer from "./components/AudioPlayer"

const App = () => {
  const [game, setGame] = useState(null);
  const [musicUrl, setMusicUrl] = useState(null);
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
      <div className="container">
        {!game && (
          <ul>
            {games.map((game, i) => (
              <li key={i}>
                <button className="button" onClick={() => handleChoice(game)}>
                  {game}
                </button>
              </li>
            ))}
          </ul>
        )}
        {game === "👉Дар Міанта" && <Avantyurist setMusicUrl={setMusicUrl} />}
        {game === "👉demo" && <Demo setMusicUrl={setMusicUrl} />}
      </div>
    </div>
  );
;}
export default App;
