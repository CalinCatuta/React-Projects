import React, { useState, useRef } from "react";
// import style
import "./styles/app.scss";
// Import component
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import Nav from "./components/Nav";
// import data
import data from "./data";

function App() {
  // state
  // this state will take the data from ./util
  const [songs, setSongs] = useState(data());
  // this state will take the first song from data
  const [cureentSong, setCurrentSong] = useState(songs[0]);
  // we create a state to use it for play button the value is false bcs the song isn't playing on DOMLoad
  const [isPlaying, setIsPlaying] = useState(false);
  // this state will take the value curent time and duration of the song that is playing
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  // this state will check the library status
  const [libraryStatus, setLibraryStatus] = useState(false);
  // this will make reference to the audio tag with useRef we select the tag.
  const audioRef = useRef(null);
  // whit this function we pass in the state [songInfo, setSongInfo] the value of curent time and durion of the song that is playing on site
  const timeUpdateHan = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);

    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage: animation,
    });
  };
  // autoPlay
  const autoPlayHan = () => {
    if (isPlaying) {
      audioRef.current.play();
    }
  };
  // function to make the player go to next song after the song end
  const songEndHan = async () => {
    let currentIndex = songs.findIndex((song) => song.id === cureentSong.id);
    // (currentIndex + 1) % songs.length this run when urrentIndex hit 7 and 7 % 7 =0 bcs there is no rest.
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
  };
  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song cureentSong={cureentSong} isPlaying={isPlaying} />
      <Player
        setCurrentSong={setCurrentSong}
        songs={songs}
        setSongs={setSongs}
        cureentSong={cureentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
      />
      <Library
        libraryStatus={libraryStatus}
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
      />
      <audio
        onLoadedData={autoPlayHan}
        onTimeUpdate={timeUpdateHan}
        onLoadedMetadata={timeUpdateHan}
        ref={audioRef}
        src={cureentSong.audio}
        onEnded={songEndHan}
      ></audio>
    </div>
  );
}

export default App;
