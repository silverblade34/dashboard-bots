import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import styled from "styled-components";
import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai"

const columns = [
    { field: 'nombre', headerName: 'Nombre', width: 150 },
    { field: 'estado', headerName: 'Estado', width: 130 },
    { field: 'interprete', headerName: 'Interprete', width: 130 },
    {
        field: 'fecha_inicio',
        headerName: 'Fecha de inicio',
        type: 'date',
        width: 170,
    },
];

function useFilteredRows(rows) {
    const [filterFirstName, setFilterFirstName] = useState('');

    const filteredRows = rows.filter((row) =>
        row.nombre && row.nombre.toLowerCase().includes(filterFirstName.toLowerCase())
    );

    return [filteredRows, setFilterFirstName, filterFirstName];
}

export function DataTable() {
    const [tableData, setTableData] = useState([]);
    const [filteredRows, setFilteredRows,filterFirstName ] = useFilteredRows(tableData);

    useEffect(() => {
        fetch('http://192.168.1.38:3000/api/v1/bots')
            .then(response => response.json())
            .then(data => setTableData(data));
    }, []);

    return (
        <ContainerTabla style={{ height: 400, width: '100%' }}>
            <div className='search-input'>
                <AiOutlineSearch className='icon-search' />
                <input
                    type="text"
                    value={filterFirstName}
                    onChange={(event) => setFilteredRows(event.target.value)}
                    placeholder="Filtrar por nombre"
                />
            </div>
            <DataGrid
                rows={filteredRows}
                getRowId={(row) => row.nombre}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </ContainerTabla>
    );
}


const ContainerTabla = styled.div`
    padding: 20px;
    padding-bottom: 70px;
    border-radius: 20px;
    background-color: #ffff;
    box-sizing: content-box;
    .icon-search{
        margin-left: 10px;
        color: #757575;
    }
    input{
        padding: 10px;
        border: none;
        outline: none;
        border-radius:8px;
    }
    .search-input{
        width: min-content;
        display: flex;
        align-items: center;
        border: 1px solid #ddd;
        margin-bottom: 10px;
        border-radius:8px;
    }
`

