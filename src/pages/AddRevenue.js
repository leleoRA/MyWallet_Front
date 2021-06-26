import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import styled from 'styled-components';
import AddStyle from '../layouts/AddStyle';
import { Box, Input, Error, Button, StyledLink } from '../components/common/Components';
import UserContext from '../contexts/UserContext';

export default function AddRevenue(){
    const [value, setValue] = useState();
    const [error, setError] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const { userData } = useContext(UserContext);
    const history = useHistory();  
    const localUser = JSON.parse(localStorage.getItem("user"));

    function submitRevenue(e){
        e.preventDefault();
        setLoading(true);

        const request = axios.post('https://back-mywallet.herokuapp.com/finances', 
            {
                value,
                description,
                eventType: 'revenue'
            },
            {
                headers: 
                    {
                        Authorization: `Bearer ${userData.token || localUser}`
                    }
            }
        );

        request.then(() => {
            history.push('/home');
        });

        request.catch(() => {
            setError('Erro ao adicionar entrada!');
            setLoading(false);
        });
    }

    return(
        <>
            <Title>
                Nova entrada
            </Title>
            <AddStyle>
                <Box>
                    <form onSubmit={submitRevenue}>
                        <Input type="number" placeholder="Valor (em centavos)" value={value} onChange={e => setValue(e.target.value)} />
                        <Input type="text" placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)} />
                        {
                            error && <Error>{ error }</Error>
                        }
                        <Button type="submit" disabled={loading} backgroundColor="#A328D6">
                            Salvar entrada
                        </Button>
                        <StyledLink to="/home">Voltar</StyledLink>
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