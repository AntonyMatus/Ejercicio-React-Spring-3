import {useMemo} from 'react'

// const Etiquetas = ({value}) => {
//     return (
//         <>
//         {
//            value.map((etiquetas, idx) => {
//                 return (
//                     <span key={idx} className='etiqueta'>
//                         {etiquetas}
//                     </span>
//                 )
//             })
//         }
//         </>
//     );
// }


export default function useColumns() {
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
           
        },
    ],
    []
);
return columns;
}