'use client';
import React, { useState } from 'react';
// import Swal from "sweetalert2";
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { Button, Container } from 'react-bootstrap';
import styles from './signup.module.css';

export default function UserSignup() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [email2, setEmail2] = useState("");
  const [senha, setSenha] = useState("");
  const [genero, setGenero] = useState("");
  const [error, setError] = useState(null);
  const [dataNascimento, setDataNascimento] = useState('');
  const [sucesso, setSucesso] = useState(null);

//   const Sucess = () => {
//     Swal.fire({
//       icon: "success",
//       title: "Sucesso!",
//       text: "Bem vindo ao OnMusic!",
//     });
//   };

  function handleSubmit(e) {
    e.preventDefault();
    if (email !== email2) {
      setError("Os emails não correspondem.");
      return;
    }

    // Sucess();

    console.log("Enviando dados para o servidor:", { nome, email, senha, genero, dataNascimento });

    setError(null);
    setSucesso(null);
    setEmail("");
    setEmail2("");
    setSenha("");
    setGenero("");
    setDataNascimento("")
    setNome("")
  }

  return (
    <Container className={`mt-3 d-flex justify-content-center align-items-center ${styles["form-content"]}`}>
      <div>
        <Form onSubmit={handleSubmit} className="py-3">
          <h1 className="text-center mb-4">Cadastre-se no OnMusic</h1>

          <Form.Group className="mb-3" controlId="nome">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu nome"
              className="form-control-sm"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
              className="form-control-sm"
            />
            </Form.Group>
          <Form.Group className="mb-3" controlId="confirmEmail">
            <Form.Label>Confirme seu Email</Form.Label>
            <Form.Control
              type="email"
              value={email2}
              onChange={(e) => setEmail2(e.target.value)}
              placeholder="Confirme seu email"
              className="form-control-sm"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha"
              className="form-control-sm"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="dataNascimento">
            <Form.Label>Data de Nascimento</Form.Label>
            <Form.Control
              type="date"
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
              className="form-control-sm"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="genero">
            <Form.Label>Gênero</Form.Label>
            <div>
              <Form.Check
                inline
                type="radio"
                label="Masculino"
                name="genero"
                value="Masculino"
                checked={genero === "Masculino"}
                onChange={(e) => setGenero(e.target.value)}
              />
              <Form.Check
                inline
                type="radio"
                label="Feminino"
                name="genero"
                value="Feminino"
                checked={genero === "Feminino"}
                onChange={(e) => setGenero(e.target.value)}
              />
              <Form.Check
                inline
                type="radio"
                label="Não-binário"
                name="genero"
                value="Não-binário"
                checked={genero === "Não-binário"}
                onChange={(e) => setGenero(e.target.value)}
              />
            </div>
          </Form.Group>
          {error && (
            <Alert variant="danger" onClose={() => setError(null)} dismissible>
              {error}
            </Alert>
          )}
          {sucesso && (
            <Alert variant="success" onClose={() => setSucesso(null)} dismissible>
              {sucesso}
            </Alert>
          )}
          <Button type="submit" variant="primary">
            Cadastrar
          </Button>
        </Form>
      </div>
    </Container>
  );
}