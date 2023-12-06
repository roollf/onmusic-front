'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import { SongDropdown } from "@/components";
import PlaylistGenerator from "./utils";
import styles from './page.module.css';

export default function CreatePlaylist() {

    const [selectedSong, setSelectedSong] = useState('');
    const [playlist, setPlaylist] = useState([]);
    // const [addedMusics, setAddedMusics] = useState([]);
    // const [removedMusics, setRemovedMusics] = useState([]);
    const [playlistName, setPlaylistName] = useState('');
    const [playlistType, setPlaylistType] = useState('');
    const [songs, setSongs] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3001/songs').then(
            (response) => {
                setSongs(response.data);
            }
        )
    }, [])

    function handleSubmit(e) {
        e.preventDefault();

        // const addMusics = addedMusics.map((song) => song._id);
        // const removeMusics = removedMusics.map((song) => song._id);

        const data = {
            name: playlistName,
            type: playlistType,
            songs: playlist
        };

        axios.post('http://localhost:3001/playlists/', data)
            .then(() => {
                setSuccessMessage('Playlist criada com sucesso!');
                setSelectedSong('');
                setPlaylistName('');
                setPlaylistType('');
                setPlaylist([]);
                // setAddedMusics([]);
                // setRemovedMusics([]);
            })
            .catch((error) => {
                console.error('Erro ao criar a playlist:', error);
            });
    }

    function addSongToPlaylist() {
        // console.log("Selected Song:", selectedSong);
        if (selectedSong && !playlist.includes(selectedSong)) {
            setPlaylist((prevPlaylist) => [...prevPlaylist, selectedSong]);
            // if (!addedMusics.includes(selectedSong)) {
            //     setAddedMusics((prevAddedSongs) => [...prevAddedSongs, selectedSong])
            // }
        }
    }

    function removeSongFromPlaylist(song) {
        setPlaylist((prevPlaylist) => prevPlaylist.filter((item) => item !== song._id));
        // if (!removedMusics.includes(song._id)) {
        //     setRemovedMusics((prevRemovedSongs) => [...prevRemovedSongs, song._id]);
        // }
    }

    const playlistPreview = PlaylistGenerator(playlist);
    // console.log("playlistPreview:", playlistPreview);
    // console.log("AddedMusics:", addedMusics);
    // console.log("RemovedMusics:", removedMusics);
    // console.log("Playlist:", playlist);

    return (
        <div className={styles.main}>
            <div className="container-fluid" id={styles.container}>
                <form onSubmit={handleSubmit}>
                    <h1 style={{ marginBottom: "2rem" }}>Criar Playlist</h1>
                    <div className="row">
                        <div className="col-md">
                            <label htmlFor="playlistName" style={{ marginBottom: "1rem" }}>Nome</label>
                            <input type="text" value={playlistName} onChange={(e) => setPlaylistName(e.target.value)} className="form-control" placeholder="Digite o nome da Playlist" />
                        </div>
                        <div className="col-md">
                            <label htmlFor="playlistType" style={{ marginBottom: "1rem" }}>Tipo</label>
                            <select value={playlistType} onChange={(e) => setPlaylistType(e.target.value)} className="form-control">
                                <option value="" disabled hidden>Selecione o tipo</option>
                                <option value="Relaxar">Relaxar</option>
                                <option value="Estudar">Estudar</option>
                                <option value="Trabalhar">Trabalhar</option>
                                <option value="Positividade">Positividade</option>
                                <option value="Extravasar">Extravasar</option>
                            </select>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md">
                            <select className="form-control" value={selectedSong} onChange={(e) => setSelectedSong(e.target.value)}>
                                <option value="" disabled hidden>Selecionar Música</option>
                                {songs.map(({ _id, song, duration }) => (
                                    <option key={_id} value={_id}>
                                        {song} {duration}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="col-sm">
                            <button
                                className="btn btn-secondary"
                                type="button"
                                onClick={addSongToPlaylist}
                                style={{ background: "none" }}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <h4>Músicas Selecionadas:</h4>
                        <div className="col-md">
                            <table className={`table ${styles["table-content"]}`}>
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Song</th>
                                        <th scope="col">Duration</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody className="table-group-divider">
                                    {playlistPreview.map((song, index) => {
                                        return (
                                            <tr>
                                                <th scope="row">{index + 1}</th>
                                                <td>{song?.song}</td>
                                                <td>{song?.duration}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-secondary"
                                                        type="button"
                                                        style={{ float: "right", background: "none" }}
                                                        onClick={() => removeSongFromPlaylist(song)}
                                                    >
                                                        -
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-secondary">Criar</button>
                </form>
                <br />
                <div className="row">
                    <div className="col-md">
                        <p className="text-success">{successMessage}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
