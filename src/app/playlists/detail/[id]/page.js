'use client';
import { useState, useEffect } from 'react';
// import Image from 'next/image';
import PlaylistGenerator from './utils';
import styles from './page.module.css';
import axios from 'axios';

export default function Detail(props) {
    const idSelecionado = props.params.id;
    const [playlist, setPlaylist] = useState({ musics: [] });
    // const [musics, setMusics] = useState([]);


    // useEffect(() => {
    //     axios.get('http://localhost:3004/musics').then(
    //         (response) => {
    //             setMusics(response.data)
    //         }
    //         )
    //     }, [])

    useEffect(() => {
        axios.get(`http://localhost:3004/playlists/${idSelecionado}`).then(
            (response) => {
                setPlaylist(response.data);
            }
        )
    }, [])

    const test = PlaylistGenerator(props);
    console.log(test);

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
                        <h2 style={{ marginTop: "1rem" }}>{playlist.name}</h2>
                        <p style={{ opacity: "0.5", fontWeight: "lighter", fontSize: "small" }}>{playlist.type}</p>
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
                                {test.map((music, index) => {
                                    return (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
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