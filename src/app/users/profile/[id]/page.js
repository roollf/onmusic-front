'use client';
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./page.module.css";

export default function Profile(props) {
    const [perfilUsuario, setPerfilUsuario] = useState(null);
    const [editando, setEditando] = useState(false);
    const [novoNome, setNovoNome] = useState("");
    const [novoEmail, setNovoEmail] = useState("");
    const [novaSenha, setNovaSenha] = useState(null);

    useEffect(() => {
        const idSelecionado = props.params.id;
        axios.get(`http://localhost:3001/users/profile/${idSelecionado}`).then(
            (response) => setPerfilUsuario(response.data[0])
        )
    }, [props.params.id, perfilUsuario])

    const nomeUsuario = perfilUsuario?.name;
    const emailUsuario = perfilUsuario?.email;
    const senhaUsuario = perfilUsuario?.password;

    const handleEditClick = () => {
        setEditando(true);
        setNovoNome("");
        setNovoEmail("");
        setNovaSenha(null);
    }

    const handleSaveClick = () => {
        const idSelecionado = props.params.id;
        const requestBody = {}

        if (novoNome !== nomeUsuario && novoNome !== "") {
            requestBody.name = novoNome;
        }

        if (novoEmail !== emailUsuario && novoEmail !== "") {
            requestBody.email = novoEmail;
        }

        if (novaSenha !== senhaUsuario && novaSenha !== null && novaSenha !== "") {
            requestBody.password = novaSenha;
        }

        axios.patch(`http://localhost:3001/users/profile/${idSelecionado}`,
            requestBody
        ).then(
            (response) => {
                setPerfilUsuario(response.data);
                setEditando(false);
            }
        )
    }

    return (
        <main className={styles.main}>
            <div className={`${styles["content"]}`}>
                <h1>Perfil do Usuário</h1>
                <p>Nome: {editando ? <input type="text" placeholder="Digite seu nome" value={novoNome} onChange={(e) => setNovoNome(e.target.value)} /> : nomeUsuario}</p>
                <p>Email: {editando ? <input type="text" placeholder="Digite seu email" value={novoEmail} onChange={(e) => setNovoEmail(e.target.value)} /> : emailUsuario}</p>
                {editando && (
                    <>
                        <p>Nova Senha: <input type="password" placeholder="Digite sua nova senha" value={novaSenha} onChange={(e) => setNovaSenha(e.target.value)} /></p>
                    </>
                )}
                {!editando ? (
                    <button
                        className="btn btn-secondary"
                        type="button"
                        style={{ background: "none" }}
                        onClick={handleEditClick}
                    >
                        Editar
                    </button>
                ) : (
                    <>
                        <button
                            className="btn btn-secondary"
                            type="button"
                            style={{ background: "none" }}
                            onClick={handleSaveClick}
                        >
                            Salvar
                        </button>
                        <button
                            className="btn btn-secondary"
                            type="button"
                            style={{ background: "none", float: "right" }}
                            onClick={() => setEditando(false)}>Cancelar</button>
                    </>
                )}
            </div>
        </main>
    );
}