import React, {useState}  from 'react'
import {useTable, useSortBy,  useGlobalFilter, useAsyncDebounce} from 'react-table';
import { useNavigate } from 'react-router-dom';


export default function table({ columns, data }) {
    const UseTable = useTable;
    const UseState = useState;
    // useGlobalFilter
    const{
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        setGlobalFilter,
        state: { globalFilter }  
    } = UseTable(
        {
            columns,
            data
        },
        useGlobalFilter,
        useSortBy
    );

    const [value, setValue] = UseState(globalFilter);
    const UseAsyncDebounce = useAsyncDebounce;
    const onFilterChange = UseAsyncDebounce(
        (value) => setGlobalFilter(value || undefined),
        200
    );

    
    const handleFilterChange = (e) => {
       setValue(e.target.value);
       onFilterChange(e.target.value);
    };
    
    const UseNavigate = useNavigate;
    const navigate = UseNavigate();

    const navigateTo = (path) => {
        navigate(path);
    }


    return (

            <>
            <div className="frame1964">
                <div className='frame2002' >
                    <p className='alumnos'>Alumnos</p>
                    <input type="text" id='myInput' className='input' placeholder="Buscar por Nombre, Email o Palabra Clave"
                    onChange={handleFilterChange} value={value || ""} />
                </div>
                <button className="button">+ Añadir alumno</button>
            </div>
            <div className='frame1076'>
                <table className='frame1723' {...getTableProps()}>
                    <thead>
                        {
                            // Recorremos las columnas
                            headerGroups.map((headerGroup) => (
                            // Añadimos las propiedades al conjunto de columnas
                            <tr className='frame758' {...headerGroup.getHeaderGroupProps()}>
                                {
                                // Recorremos cada columna del conjunto para acceder a su información
                                headerGroup.headers.map((column) => (
                                    // Añadimos las propiedades a cada celda de la cabecera
                                    <th   id={'th'+ column.render("Header")} {...column.getHeaderProps(column.getSortByToggleProps())} 
                                    className={
                                        column.isSorted 
                                        ? column.isSortedDesc 
                                        ? "desc" 
                                        : "asc" 
                                        : ""
                                        }
                                    >
                                    {
                                        // Pintamos el título de nuestra columna (propiedad "Header")
                                        column.render("Header")
                                    }
                                    </th>
                                ))
                                }
                            </tr>
                            ))
                        }
                    </thead>
                    <tbody className='frame1077' {...getTableBodyProps()}>
                        {
                            rows.map((row, i) => {
                                
                                prepareRow(row);
                                return (
                                    <tr onClick={() => navigateTo('/tabla/details')} {...row.getRowProps()}>
                                        {
                                            row.cells.map((cell) => {
                                                return (
                                                    <td id={'td'+ cell.render("Header")} {...cell.getCellProps()}>
                                                        {
                                                        
                                                            cell.render("Cell")
                                                        }
                                                    </td>
                                                );
                                            })
                                        }
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>  
        </div>
        </> 
    );
}
