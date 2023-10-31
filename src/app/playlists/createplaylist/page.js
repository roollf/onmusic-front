'use client';
import { SongDropdown, SongList } from "@/components";
import axios from 'axios';
import { useEffect, useState } from 'react';
import PlaylistGenerator from "./utils";
import styles from './page.module.css';

export default function CreatePlaylist() {

    const [selectedSong, setSelectedSong] = useState('');
    const [playlist, setPlaylist] = useState([]);
    const [playlistName, setPlaylistName] = useState('');
    const [playlistType, setPlaylistType] = useState('');
    const [songs, setSongs] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');


    useEffect(() => {
        axios.get('http://localhost:3004/musics').then(
            (response) => {
                console.log(response.data)
                setSongs(response.data);
            }
        )
    }, [])

    function handleSubmit(e) {
        e.preventDefault(); // Isso previne que o formulário recarregue a página

        const data = {
            name: playlistName,
            type: playlistType,
            musics: playlist
        };

        axios.post('http://localhost:3004/playlistS/', data)
            .then((response) => {
                console.log('Playlist criada com sucesso:', response.data);
                // mostrar mensagem de acerto
                setSuccessMessage('Playlist criada com sucesso!');
                // limpar playlist após envio
                setPlaylistName('');
                setPlaylistType('');
                setPlaylist([]);
            })
            .catch((error) => {
                console.error('Erro ao criar a playlist:', error);
            });
    }


    function addSongToPlaylist() {
        if (selectedSong && !playlist.includes(selectedSong)) {
            setPlaylist(prevPlaylist => [...prevPlaylist, selectedSong]);
        }
    }

    function removeSongFromPlaylist(song) {
        setPlaylist(prevPlaylist => prevPlaylist.filter(item => item.toString() !== song.id));
    }

    const test = PlaylistGenerator(playlist);

    return (
        <div className={styles.main}>
            <div className="container-fluid" id={styles.container}>
                <form onSubmit={handleSubmit}>
                    <h1 style={{marginBottom: "2rem"}}>Criar Playlist</h1>
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
                            <SongDropdown songs={songs} selectedSong={selectedSong} setSelectedSong={setSelectedSong} />
                        </div>
                        <div className="col-sm">
                            <button
                                className="btn btn-secondary"
                                type="button"
                                onClick={addSongToPlaylist}
                                style={{ background: "none" }}>
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
                                    {test.map((song, index) => {
                                        return (
                                            <tr>
                                                <th scope="row">{index + 1}</th>
                                                <td>{song.song}</td>
                                                <td>{song.duration}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-secondary"
                                                        type="button"
                                                        style={{ float: "right", background: "none" }}
                                                        onClick={() => removeSongFromPlaylist(song)}
                                                    >
                                                        Remover
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>

                        {/* <div className="col-md" id={styles.list}>
                            <div>
                                <ul>
                                    {test.map((track) => {
                                        return (
                                            <li>
                                                {track.song}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div> */}


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
