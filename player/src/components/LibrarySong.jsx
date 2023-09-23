const LibrarySong = ({
  songs,
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
  id,
  setSongs,
}) => {
  // make a function and add it to div on click when this run pass the data in the state and change the value with the song we click on.
  const changeSongHandler = () => {
    setCurrentSong(song);
    // change the active from false to true when are we click on a song
    // if song.id is === id we click on then return the song but with the active:true else for the rest that dosen't have the same id return them with active:false send the data back with setSongs state
    const changeSongActive = songs.map((song) => {
      if (song.id === id) {
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
    // check if the song is playing and when you change the song from library make it play() if it was playing
    if (isPlaying) {
      const playSong = audioRef.current.play();
      if (playSong === undefined) {
        playSong.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  };
  return (
    <div
      onClick={changeSongHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
