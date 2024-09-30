import * as React from "react";
import "../styles/song.css";

export default function SongComposer({ handleAddSong }) {
  const [song, setSong] = React.useState({
    id: Math.floor(Math.random() * 10000),
    title: "",
    artist: "",
    playing: false,
  });

  const handleUpdateTitle = (e) => {
    setSong({
      ...song,
      title: e.target.value,
    });
  };

  const handleUpdateArtist = (e) => {
    setSong({
      ...song,
      artist: e.target.value,
    });
  };

  const handleAddSongClick = () => {
    handleAddSong(song);
    setSong({
      id: Math.floor(Math.random() * 10000),
      title: "",
      artist: "",
      playing: false,
    });
  };

  return (
    <li className="song-item">
      <div className="song-edit">
        <input
          type="text"
          value={song.title}
          onChange={handleUpdateTitle}
          placeholder="add a title"
          className="input-title"
        />
        <input
          type="text"
          value={song.artist}
          onChange={handleUpdateArtist}
          placeholder="add an artist"
          className="input-artist"
        />
      </div>
      <div className="song-controls">
        <button className="add-button" onClick={handleAddSongClick}>
          Add Song
        </button>
      </div>
    </li>
  );
}