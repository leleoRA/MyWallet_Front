import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import MainStyle from '../layouts/MainStyle';
import { Box, Input, Error, Button, StyledLink } from '../components/common/Components';
import UserContext from '../contexts/UserContext.js';

export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const history = useHistory();
    const { setUserData } = useContext(UserContext);
  
    function signIn (e) {
        e.preventDefault();
        setLoading(true);
    
        const request = axios.post('http://localhost:4000/login', {
          email,
          password
        });
    
        request.then(res => {
          setUserData({
            token: res.data.token
          });
    
          history.push('/');
        });
    
        request.catch(() => {
          setError('Email e/ou senha inválidos!');
          setLoading(false);
        });
      }

    return (
        <MainStyle>
            <Box>
                <form onSubmit={signIn}>
                        <Input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                        <Input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
                    {
                    error && <Error>{ error }</Error>
                    }
                    <Button type="submit" disabled={loading}>
                        Entrar
                    </Button>
                </form>
                <StyledLink to="/signup">Primeira vez? Cadastre-se!</StyledLink>
            </Box>
        </MainStyle>
    );
}