'use client';
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

export default function SearchResult() {
  const params = useSearchParams();
  const searchTerm = params.get("term");
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState([]);

  useEffect(() => {
    // Use o Axios para buscar a música com base no nome da música
    axios.get(`http://localhost:3004/musics?song_like=${searchTerm}`)
      .then((response) => {
        if (response.data.length > 0) {
          setResult(response.data);
        }
      })
      .catch((error) => {
        console.error('Erro na pesquisa de músicas:', error);
      })
      .finally(() => {
        setLoading(false);
      })
  }, [searchTerm]);

  return (
    <main className={styles.main}>
      <div className="row">
          {loading && "Loading..."}
          {!loading && !result.length && "No result"}
          {!loading && !!result.length && (
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
                {result.map(({ id, song, duration, audio }) => ( //map gerando os resultados automaticamente através da , sem a necessidade de colocar result.id}
                  <tr>
                    <th scope="row">{id}</th>
                    <td>{song}</td>
                    <td>{duration}</td>
                    <td>
                      <audio controls>
                        <source src={audio} />
                      </audio>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
    </main>
  );
}
