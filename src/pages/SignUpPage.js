import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import MainStyle from '../layouts/MainStyle';
import { Box, Input, Error, Button, StyledLink } from '../components/common/Components';

export default function SignUpPage(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const history = useHistory();

    function signUp (e) {
        e.preventDefault();
        setLoading(true);
    
        const request = axios.post('http://localhost:4000/sign-up', {
          name,
          email,
          password,
          confirmPassword
        });
    
        request.then(() => {
          alert('Usuário cadastrado com sucesso! Faça login para acessar sua conta.');
          history.push('/login');
        });
    
        request.catch(() => {
          setError('Dados inválidos. Verifique os campos e tente novamente.');
          setLoading(false);
        });
      }

    return (
        <MainStyle>
            <Box>
                <form onSubmit={signUp}>
                        <Input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
                        <Input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                        <Input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
                        <Input type="password" placeholder="Confirme a senha" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} invalid={password !== confirmPassword} />
                    {
                    error && <Error>{ error }</Error>
                    }
                    <Button type="submit" disabled={loading}>
                        Cadastrar
                    </Button>
                </form>
                <StyledLink to="/login">Já tem uma conta? Entre agora!</StyledLink>
            </Box>
        </MainStyle>
    );
}