import React, {useMemo, useState, useEffect}  from 'react';
import axios from 'axios';
import '../components/Tabla_candidatos/app2.css'
//componentes

import Table from '../components/table';
import Header from '../components/Header';
import FiltroBusqueda from '../components/FiltroBusqueda';




const Etiquetas = ({values}) => {
    return (
        <>
        {values.map((etiquetas, idx) => {
            return (
                <span key={idx} className='etiqueta'>
                    {etiquetas}
                </span>
            )
        }) 
        }
        </>
    )
};

function Tabla_candidatos() {
    const columns = useMemo(
        () => [

            {
                Header: "Nombre",
                accessor: "nombre"
            },
            {
                Header: "Ciudad",
                accessor: "ciudad"
            },
            {
                Header: "Pais",
                accessor: "pais"
            },
            {
                Header: "Telefono",
                accessor: "telefono"
            },
            {
                Header: "Correo",
                accessor: "correo"
            },
            {
                Header: "Etiquetas",
                accessor: "etiquetas",
                Cell: ({ cell: {value} }) => <Etiquetas values={value} />
               
            },
        ],
        []
    );

    const [data, setData] = useState([]);
    useEffect(() => {
        (async () => {
            const result = await axios("json/datos.json");
            setData(result.data);
        })();
    }, []);





    return (
       <div className='App2'>
            <Header />
            <div className="frame1998">
                <div className="frame2000">
                    <div className="frame1673">
                        <Table columns={columns} data={data} />                              
                    </div>
                    <FiltroBusqueda />
                    
                </div>
            </div>    
        </div>   

    );
}

export default Tabla_candidatos;