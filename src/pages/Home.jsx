import React from 'react'
import styled from "styled-components"
import { DataTable } from '../components/table/Table';

function Home() {
    return (
        <ContainerHome>
            <h1>Lista de Bots</h1>
            <DataTable></DataTable>
        </ContainerHome>
    )
}

const ContainerHome = styled.div`
    margin-right: 20px;
    margin-bottom: 20px;
  /* Estilos aquí */
    height: 100vh;
    padding:50px;
    padding-top: 20px;
    h1{
        margin-bottom:20px;
    }
  
`;

export default Home;
