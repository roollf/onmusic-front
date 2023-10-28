'use client';
import { useState } from 'react';
// import Image from 'next/image';
import styles from './page.module.css';

export default function Detail(props) {
    const idSelecionado = props.params.id;
    const [playlist, setPlaylist] = useState({ musics: [] });
    const [musics, setMusics] = useState([]);
    const [matchingMusics, setMatchingMusics] = useState([]);

    
    // useEffect(() => {
    //     axios.get('http://localhost:3004/musics').then(
    //         (response) => setMusics(response.data)
    //         )
    //     }, [])
        
    // useEffect(() => {
    //     axios.get(`http://localhost:3004/playlists/${idSelecionado}`).then(
    //         (response) => {
    //             setPlaylist(response.data);
    //             const matching = findMatchingMusics(response.data.musics, musics);
    //             setMatchingMusics(matching);
    //         }
    //     )
    // }, [])

    // function findMatchingMusics(playlistMusicId, allMusics) {
    //     const matchingMusics = [];

    //     playlistMusicId.forEach(playlistMusicId => {
    //         const musicWithMatchingId = allMusics.find((music) => music.id === playlistMusicId);
    //         if (musicWithMatchingId) {
    //             matchingMusics.push(musicWithMatchingId);
    //         }
    //     })
    // }

    return (
        <>
            <main className={styles.main}>
                <div className="row">
                    <div className="col-md-4">
                        {/* <Image
                            className={`${styles["table-content-image"]}`}
                            src={album.image}
                            alt={`Imagem ${album.name}`}
                            width={350}
                            height={350}
                            layout="responsive"
                        /> */}
                        <h2 style={{marginTop: "1rem"}}>{playlist.name}</h2>
                        <p style={{opacity: "0.5", fontWeight: "lighter", fontSize: "small"}}>{playlist.type}</p>
                    </div>
                    <div className="col-md-8">
                        <table className={`table ${styles["table-content"]}`}>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Song</th>
                                    <th scope="col">Duration</th>
                                    <th scope="col">Player</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                {matchingMusics.map((music) => {
                                    return (
                                        <tr>
                                            <th scope="row">{music.id}</th>
                                            <td>{music.song}</td>
                                            <td>{music.duration}</td>
                                            <td>
                                                <audio controls>
                                                    <source src={music.audio} />
                                                </audio>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main >
        </>
    )
}