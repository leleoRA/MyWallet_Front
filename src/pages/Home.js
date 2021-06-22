import { useHistory } from "react-router";

import styled from "styled-components";
import { IoExitOutline } from "react-icons/io5";
import { BsDashCircle, BsPlusCircle } from "react-icons/bs";

export default function Home(){
    const history = useHistory();
    
    function goTo (path) {
        history.push(path);
    }

    return(
        <>
            <Box>
                <Title>
                    Olá, Fulano
                </Title>
                <IoExitOutline size="32" color="#FFF"/>
            </Box>
            <RegisterBox>
                
            </RegisterBox>
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

