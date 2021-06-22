import React, { useState } from 'react';

import MainStyle from '../layouts/MainStyle';
import { 
    Box,
    Input,
    Error,
    Button,
    StyledLink
  } from '../components/common/Components';

export default function SignUpPage(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    function signUp(){
        console.log("ok")
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