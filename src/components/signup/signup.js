'use client';
import React, { useState } from 'react';
// import Swal from "sweetalert2";
import { Form, Alert, Button, Container } from 'react-bootstrap';
import styles from './signup.module.css';
import axios from 'axios';

export default function UserSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [genre, setGenre] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [error, setError] = useState(null);
  const [sucesso, setSucesso] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (email !== email2) {
      setError("Os emails não correspondem.");
      return;
    }

    if (password !== password2) {
      setError("As senhas não correspondem.");
      return;
    }

    axios.post('http://localhost:3001/users', {
      name: name,
      email: email,
      genre: genre,
      password: password,
    }).then(
      () => {
        setSucesso('Usuário cadastrado com sucesso!');
      })

    setError(null);
    setSucesso(null);
    setEmail("");
    setEmail2("");
    setPassword("");
    setPassword2("");
    setGenre("");
    setDataNascimento("")
    setName("")
  }

  return (
    <Container className={`mt-3 d-flex justify-content-center align-items-center ${styles["form-content"]}`}>
      <div>
        <Form onSubmit={handleSubmit} className="py-3">
          <h1 className="text-center mb-4">Cadastre-se no OnMusic</h1>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              className="form-control-sm"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Confirme sua senha</Form.Label>
            <Form.Control
              type="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              placeholder="Confirme sua senha"
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
          <Form.Group className="mb-3" controlId="genre">
            <Form.Label>Gênero</Form.Label>
            <div>
              <Form.Check
                inline
                type="radio"
                label="Masculino"
                name="genre"
                value="Masculino"
                checked={genre === "Masculino"}
                onChange={(e) => setGenre(e.target.value)}
              />
              <Form.Check
                inline
                type="radio"
                label="Feminino"
                name="genre"
                value="Feminino"
                checked={genre === "Feminino"}
                onChange={(e) => setGenre(e.target.value)}
              />
              <Form.Check
                inline
                type="radio"
                label="Não-binário"
                name="genre"
                value="Não-binário"
                checked={genre === "Não-binário"}
                onChange={(e) => setGenre(e.target.value)}
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