import * as React from "react"
import "../styles/song.css"

export default function Song({ song, handleUpdateSong, handleDeleteSong }) {
  const [editing, setEditing] = React.useState(false)

  const handleEditClick = () => setEditing(!editing)

  const handleClick = () => handleUpdateSong({
    ...song,
    playing: !song.playing
  })

  const handleUpdateTitle = (e) => handleUpdateSong({
    ...song,
    title: e.target.value
  })

  const handleUpdateArtist = (e) => handleUpdateSong({
    ...song,
    artist: e.target.value
  })

  const handleDeleteClick = () => handleDeleteSong(song.id)

  return (
    <li className="song-item">
      {
        editing ? (
          <div className="song-edit">
            <input 
              type="text" 
              value={song.title}
              onChange={handleUpdateTitle}
              className="input-title"
            />
            <input 
              type="text" 
              value={song.artist}
              onChange={handleUpdateArtist}
              className="input-artist"
            />
          </div>
        ) : (
          <div className="song-info">
            <h3 className="song-title">{song.title}</h3>
            <p className="song-artist">{song.artist}</p>
          </div>
        )
      }
      <div className="song-controls">
        <button className="play-button" onClick={handleClick}>
          {song.playing ? "⏸" : "▶"}
        </button>
        <button className="edit-button" onClick={handleEditClick}>
          {editing ? "Save" : "Edit"}
        </button>
        {!editing && (
          <button className="delete-button" onClick={handleDeleteClick}>
            Delete
          </button>
        )}
      </div>
    </li>
  )
}