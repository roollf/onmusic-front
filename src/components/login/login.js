'use client';
import React, { useState, useContext } from 'react';
import { Form, Alert, Button, Container } from 'react-bootstrap';
import { UserContext } from '../hooks/userContext';
import styles from './signup.module.css';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();

    axios.get(`http://localhost:3001/users?email=${email}`)
      .then((res) => {
        const user = res.data[0];
        if (!user || !user.email) {
          setError('Email não cadastrado');
        } else {
          if (user.password !== password) {
            setError('Senha incorreta');
            return;
          }
          login(user);
        }
      })
  }

  return (
    <Container className={`mt-3 d-flex justify-content-center align-items-center ${styles["form-content"]}`}>
      <div>
        <Form onSubmit={handleSubmit} className="py-3">
          <h1 className="text-center mb-4">Login</h1>
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
          {error && (
            <Alert variant="danger" onClose={() => setError(null)} dismissible>
              {error}
            </Alert>
          )}
          <Button type="submit" variant="primary">
            Entrar
          </Button>
          <div className="col-md" style={{ marginTop: "1rem" }}>
            <a href="http://localhost:3000/users/signup">Não tem uma conta? Cadastre-se aqui</a>
          </div>
        </Form>
      </div>
    </Container>
  );
};


