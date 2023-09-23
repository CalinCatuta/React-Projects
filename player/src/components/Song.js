import React from "react";

const Song = ({ cureentSong, isPlaying }) => {
  return (
    <div className="song-container">
      <img
        className={isPlaying ? "rotate-animation" : ""}
        src={cureentSong.cover}
      ></img>
      <h2>{cureentSong.name}</h2>
      <h3>{cureentSong.artist}</h3>
    </div>
  );
};

export default Song;
