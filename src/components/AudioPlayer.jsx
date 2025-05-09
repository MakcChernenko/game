import { useEffect, useRef } from "react";

function AudioPlayer({ musicUrl, isUnlocked }) {
  const audioRef = useRef(null);
  const fadeOutInterval = useRef(null);

  const fadeOut = (callback) => {
    if (!audioRef.current) return;
    let volume = audioRef.current.volume;

    clearInterval(fadeOutInterval.current);

    fadeOutInterval.current = setInterval(() => {
      if (volume > 0.05) {
        volume -= 0.05;
        audioRef.current.volume = volume;
      } else {
        clearInterval(fadeOutInterval.current);
        audioRef.current.pause();
        audioRef.current.src = "";
        audioRef.current.volume = 1;
        callback?.();
      }
    }, 100);
  };

  useEffect(() => {
    if (!isUnlocked || !audioRef.current) return;

    const absoluteUrl = musicUrl
      ? new URL(musicUrl, window.location.origin).href
      : null;

    if (!absoluteUrl) {
      fadeOut();
      return;
    }

    if (audioRef.current.src !== absoluteUrl) {
      fadeOut(() => {
        audioRef.current.src = absoluteUrl;
        audioRef.current.loop = true;
        audioRef.current.volume = 1;
        audioRef.current
          .play()
          .catch((e) => console.warn("Не вдалося відтворити:", e));
      });
    }
  }, [musicUrl, isUnlocked]);

  return <audio ref={audioRef} />;
}

export default AudioPlayer;
