import React, { useState } from 'react';

import MainStyle from '../layouts/MainStyle';
import { 
    Box,
    Input,
    Error,
    Button,
    StyledLink
  } from '../components/common/Components';

export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    function signIn(){
        console.log("ok")
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