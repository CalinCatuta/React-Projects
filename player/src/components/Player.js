import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
const Player = ({
  cureentSong,
  setCurrentSong,
  setSongs,
  songs,
  audioRef,
  songInfo,
  setSongInfo,
  setIsPlaying,
  isPlaying,
}) => {
  // call this when we change the song and pass the data in nextPrev
  const acttiveLivraryHan = (nextPrev) => {
    const changeSongActive = songs.map((song) => {
      if (song.id === nextPrev.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(changeSongActive);
  };
  // function
  // here whe use the state isPlaying, setIsPlaying : whe check if isPlaying when we click on play btn if true do that else do that.
  const playSoundHan = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  // create a function that formate the number on DOM to see only the second and minut.
  const getTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const secondsWithZero = String(seconds).padStart(2, "0");
    return `${minutes}:${secondsWithZero}`;
  };
  // create a function that update the state [songInfo, setSongInfo] pass the new value when you move the range input
  const dragHan = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  // create a function to skip back or forward song and pass the direction value when we call the function onClick
  const skipTrackHan = async (direction) => {
    // this findIndex() check if the song on screen have the id of a song from songs array then give the index of the song
    let currentIndex = songs.findIndex((song) => song.id === cureentSong.id);
    if (direction === "skip-forward") {
      // (currentIndex + 1) % songs.length this run when urrentIndex hit 7 and 7 % 7 =0 bcs there is no rest.
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      acttiveLivraryHan(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        // here when currentIndex become -1 we set the songs[7]
        await setCurrentSong(songs[songs.length - 1]);
        acttiveLivraryHan(songs[songs.length - 1]);
        if (isPlaying) audioRef.current.play();
        return;
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
      acttiveLivraryHan(songs[(currentIndex - 1) % songs.length]);
    }
    if (isPlaying) audioRef.current.play();
  };
  // add style
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${cureentSong.color[0]},${cureentSong.color[1]})`,
          }}
          className="track"
        >
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHan}
            type="range"
          />
          <div style={trackAnim} className="animate-track"></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHan("skip-back")}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSoundHan}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHan("skip-forward")}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;
