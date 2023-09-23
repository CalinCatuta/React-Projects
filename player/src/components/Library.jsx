import { library } from "@fortawesome/fontawesome-svg-core";
import LibrarySong from "./LibrarySong";
// create a component where i display all the song in the data.
// map over songs and render the LibrarySong component for each song in songs.
const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            setSongs={setSongs}
            songs={songs}
            song={song}
            id={song.id}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            key={song.id}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
