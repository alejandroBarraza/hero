import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import { useInput } from '../../hooks/useInput';
import TextField from '@material-ui/core/TextField';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.getValue(params.id, 'firstName') || ''} ${
                params.getValue(params.id, 'lastName') || ''
            }`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
];

const useStyles = makeStyles((theme) => ({
    DataGrid: {
        borderRadius: '10px',
    },
    row: {},
}));

export const TableCustom = () => {
    const [dataRow, setdataRow] = useState(rows);

    const [{ nombre }, onHandleChange] = useInput({
        nombre: '',
    });

    const onHandleSubmit = (e) => {
        e.preventDefault();
        setdataRow({
            ...rows,
            firstName: nombre,
        });
    };

    const clasess = useStyles();
    return (
        <div style={{ height: 400, width: '80%' }}>
            <form onSubmit={onHandleSubmit}>
                <TextField
                    id='outlined-basic'
                    label='nombre'
                    variant='outlined'
                    name='nombre'
                    value={nombre}
                    onChange={onHandleChange}
                />
            </form>

            <DataGrid
                className={clasess.DataGrid}
                rows={dataRow}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
};
