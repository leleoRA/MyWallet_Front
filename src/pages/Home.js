import { useHistory } from "react-router";
import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import dayjs from 'dayjs';

import styled from "styled-components";
import { IoExitOutline } from "react-icons/io5";
import { BsDashCircle, BsPlusCircle } from "react-icons/bs";
import UserContext from '../contexts/UserContext';

export default function Home(){
    const [events, setEvents] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const { userData } = useContext(UserContext);  
    const history = useHistory();
    const localUser = JSON.parse(localStorage.getItem("user"));
    
    useEffect(() => {
        const request = axios.get('http://localhost:4000/finances', 
            {
                headers: 
                    {
                        Authorization: `Bearer ${userData.token || localUser}`
                    }
            }
        );
    
        request.then(res => {
          setEvents(res.data);
          setLoading(false);
          calculateTotal(res.data);
        });
      }, []); // eslint-disable-line react-hooks/exhaustive-deps

    function goTo(path){
        history.push(path);
    }

    function calculateTotal(events){
        let total = 0;
    
        events.forEach(e => {
          if (e.eventType === "revenue"){
            total += e.value;
          } else{
            total -= e.value;
          }
        });
        setTotal(total);
    }

    function logout(){
        if(window.confirm("Deseja sair da sua conta?")){
            const request = axios.post('http://localhost:4000/logout', {},
            {
                headers: 
                    {
                        Authorization: `Bearer ${userData.token || localUser}`
                    }
            }
            );
            request.then(() => {
                localStorage.removeItem("user");
                history.push('/');
            })
            request.catch(() => {
                alert("Ocorreu um erro. Tente novamente.")
            })
        } 
    }
    
    return(
        <>
            <Box>
                <Title>
                    Olá, {userData.name}
                </Title>
                <IoExitOutline onClick={logout} size="32" color="#FFF"/>
            </Box>
            {(loading || events.length !== 0) ? 
                <RegisterBox>
                    <Registers>
                        {events.map((e, i) => (
                            <Event key={i}>
                                <Date>{dayjs(e.date).format('DD/MM')}</Date>
                                <Element>
                                    <Description>{e.description}</Description>
                                    <Value type={e.eventType}>{((e.value)/100).toFixed(2).replace(".",",")}</Value>
                                </Element>
                            </Event>
                        ))}
                    </Registers>
                    <Balance positive={total >= 0}>
                        <h1>SALDO</h1>
                        <p>{((total/100).toFixed(2).replace(".",",").replace("-",""))}</p>
                    </Balance>
                </RegisterBox>
                :
                <NoRegisters>
                    <p>Não há registros de <br/>entrada ou saída</p>
                </NoRegisters> 
            }
            <Actions>
                <AddRemove onClick={() => goTo('/add-revenue')}>
                    <BsPlusCircle size="20" color="#FFF"/>
                    <p>Nova<br/>entrada</p>
                </AddRemove>
                <AddRemove onClick={() => goTo('/add-expense')}>
                    <BsDashCircle size="20" color="#FFF"/>
                    <p>Nova<br/>saída</p>
                </AddRemove>
            </Actions>
        </>
    );
}

const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 7px auto;
`;

const Title = styled.h1`
    font-size: 26px;
    color: #FFF;
    font-weight: bold;
`;

const RegisterBox = styled.div`
    height: 446px;
    background: #FFFFFF;
    border-radius: 5px;
    width: 90%;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const NoRegisters = styled.div`
    height: 446px;
    background: #FFFFFF;
    border-radius: 5px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        text-align: center;
        color: #868686;
        font-size: 20px;
    }
`;

const Registers = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    max-height: 90%;
    overflow: scroll;
`;

const Event = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 8px;
`;

const Date = styled.div`
    font-size: 16px;
    color: #C6C6C6;
`;

const Element = styled.div`
    display: flex;
    justify-content: space-between;
    width: 75%;
`;

const Description = styled.div`
    color: #000;
    font-size: 16px;
`;

const Value = styled.div`
    color: ${props => props.type === 'revenue' ? '#28A745' : '#DC3545'};
`;

const Balance = styled.div`
    padding: 0 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{
        font-size: 17px;
        font-weight: bold;
        color: #000;
    }

    p{
        color: ${props => props.positive ? '#28A745' : '#DC3545'};
        font-size: 16px;
    }
`;

const Actions = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 13px auto;
`;

const AddRemove = styled.button`
    width: 48%;
    background: #A328D6;
    border-radius: 5px;
    height: 114px;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-top: 10px;
    padding-left: 10px;

    p{
        color: #FFF;
        font-size: 17px;
        font-weight: bold;
        text-align: start;
    }
`;
