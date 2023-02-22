import React from 'react'
import styled from "styled-components"
import Table from '../components/tables/Table';

const columns = [
    {
        Header: "ID",
        accessor: "id",
    },
    {
        Header: "Nombre",
        accessor: "name",
    },
    {
        Header: "Edad",
        accessor: "age",
    },
    {
        Header: "Correo electrónico",
        accessor: "email",
    },
];

const data = [
    {
        id: 1,
        name: "Juan",
        age: 26,
        email: "juan@example.com",
    },
    {
        id: 2,
        name: "María",
        age: 35,
        email: "maria@example.com",
    },
    {
        id: 3,
        name: "Pedro",
        age: 42,
        email: "pedro@example.com",
    },
];

function Home() {
    return (
        <ContainerHome>
            <h1>Lista de Bots</h1>
            <Table columns={columns} data={data} />
        </ContainerHome>
    )
}

const ContainerHome = styled.div`
  /* Estilos aquí */
  height: 100vh;
  padding: 50px;
  h1{
    margin-bottom:20px;
  }
  table {
    border-collapse: collapse;
    border-radius: 20px;
    box-sizing: content-box;
    overflow: hidden;
    width: 100%;
    thead{
        background-color: #757575;
    }
    th,
    td {
      padding: 8px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    th {
      color: white;
      div {
        input{
            background-color: #000000;
            border: none;
            border-radius: 5px;
            padding: 10px;
        }
      }
    }
    tbody {
        tr:hover {
            background-color: #f5f5f5;
          }
    }
  }
  
  
`;

export default Home;
