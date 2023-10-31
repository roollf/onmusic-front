  'use client';
  import React, { useState } from 'react';
  import Form from 'react-bootstrap/Form';
  import Alert from 'react-bootstrap/Alert';
  import { Button, Container } from 'react-bootstrap';
  import styles from './signup.module.css';
  import axios from 'axios';



  export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState(null);
    const [sucesso, setSucesso] = useState(null);


    function handleSubmit(e) {
      e.preventDefault();
        // Sucess();

      axios.get(`http://localhost:3004/users?email=${email}`)   
          .then((res) => {
                  const users = res.data[0];
                  if (!users || !users.email) {
                    setError('Email não cadastrado');
                  } else {
                    if(users.senha!== senha) {
                      setError('Senha incorreta');
                      console.log(users.senha)
                      return 
                  }
                  
                  localStorage.setItem('usuarioLogado', JSON.stringify(users));

                  window.location.replace("http://localhost:3000");

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
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Digite sua senha"
                className="form-control-sm"
              />
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
              Entrar
            </Button>
              <br></br>
              <br></br>
            <a href="http://localhost:3000/users/signup">Não tem uma conta? Cadastre-se aqui</a>

          </Form>
        </div>
      </Container>
    );

      };
      
      
