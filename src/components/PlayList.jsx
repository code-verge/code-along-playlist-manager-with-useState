import * as React from "react"
import Song from "./Song"
import "../styles/playList.css"
import SongComposer from "./SongComposer"

export default function PlayList() {
    const [songs, setSongs] = React.useState([
        { id: 1, title: "Bohemian Rhapsody", artist: "Queen", playing: false },
        { id: 2, title: "Imagine", artist: "John Lennon", playing: false },
        { id: 3, title: "Smells Like Teen Spirit", artist: "Nirvana", playing: false }
    ])

    const handleUpdateSong = (updatedSong) => {
        const updatedSongs = songs.map((song) =>
            song.id === updatedSong.id ? updatedSong : song
        )
        setSongs(updatedSongs)
    }

    const handleDeleteSong = (songId) => {
        const updatedSongs = songs.filter(song =>
            song.id !== songId
        )
        setSongs(updatedSongs)
    }

    const handleAddSong = (newSong) => {
        const updatedSongs = [...songs, newSong];
        setSongs(updatedSongs);
      };

    return (
        <ul className="play-list">
            <SongComposer handleAddSong={handleAddSong} />
            {songs.map((song) => (
                <Song
                    key={song.id}
                    song={song}
                    handleUpdateSong={handleUpdateSong}
                    handleDeleteSong={handleDeleteSong}
                />
            ))}
        </ul>
    )
}
