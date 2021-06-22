import { useState } from 'react';

import styled from 'styled-components';
import AddStyle from '../layouts/AddStyle';
import {
    Box,
    Input,
    Button,
    StyledLink
  } from '../components/common/Components';

export default function AddRevenue(){
    const [value, setValue] = useState();
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);

    function submitRevenue(){
        console.log("ok")
    }

    return(
        <>
            <Title>
                Nova entrada
            </Title>
            <AddStyle>
                <Box>
                    <form onSubmit={submitRevenue}>
                        <Input type="number" placeholder="Valor" value={value} onChange={e => setValue(e.target.value)} />
                        <Input type="text" placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)} />
                        <Button type="submit" disabled={loading} backgroundColor="#A328D6">
                            Salvar entrada
                        </Button>
                        <StyledLink to="/">Voltar</StyledLink>
                    </form>
                </Box>
            </AddStyle>
        </>
    );
}

const Title = styled.div`
    font-size: 26px;
    font-weight: bold;
    color: #FFF;
    width: 90%;
    margin: 25px auto 40px auto;
`;