import React from "react";
import '../components/Tabla_candidatos/app3.css'
import Header2 from "../components/Header2";

//icons Fontawesome
import {faMapMarkerAlt, faCloudUploadAlt, faTrashAlt, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Select from "react-select";


const options = [
    {value: 'html', label: 'HTML'},
    {value: 'js', label: 'JS'},
    {value: 'react', label: 'REACT'},
    {value: 'java', label: 'JAVA'},
    {value: 'python', label: 'PYTHON'},
]


const onDropdownChage = (value) => {
    console.log(value)
}



function Details_Data() {


  return (
    <div className="App3">
       <Header2 />
       <div className="frame1998" > 
            <div className="frame2000" >
                <div className="frame2045">
                    <div className="frame2005">
                    <div className="frame1994">
                        <div className="frame123">
                        <div className="cover"></div>
                        </div>
                        <div className="frame1986">
                        <p className="nombreAlumno">Nombre Almuno</p>
                        <div className="frame1927">
                            <a className="icon">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </a>
                            <div className="frame19272">
                            <p className="valencia">Valencia</p>
                            </div>
                            <div className="frame1928">
                            <p className="barra">|</p>
                            </div>
                            <div className="frame1926">
                            <p className="españa">España</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="frame2041">
                        <div className="frame1433">
                        <p className="nombreYApellidos">Nombre y Apellidos</p>
                        <input className="frame1328" placeholder="Nombre Alumno"></input>
                        </div>
                        <div className="frame2038">
                        <div className="frame14332">
                            <p className="telefono">Nº Teléfono</p>
                            <input
                            type="text"
                            className="frame13282"
                            placeholder="+34 456 456 456"
                            />
                        </div>
                        <div className="frame2023">
                            <p className="email">Email</p>
                            <input
                            type="text"
                            className="frame13283"
                            placeholder="example@example.com"
                            />
                        </div>
                        </div>
                        <div className="frame2039">
                        <div className="frame2024">
                            <p className="pais">Pais</p>
                            <select name="pais" id="pais" className="frame13284">
                            <option value="España">España</option>
                            <option value="Italia">Italia</option>
                            <option value="Argentina">Argentina</option>
                            <option value="México">México</option>
                            <option value="Chile">Chile</option>
                            </select>
                        </div>
                        <div className="frame2027">
                            <p className="ciudad">Ciudad</p>
                            <select name="ciudad" id="ciudad" className="frame13285">
                            <option value="Valencia">Valencia</option>
                            <option value="Cordoba">Cordoba</option>
                            <option value="Zaragoza">Zaragoza</option>
                            <option value="cozumel">Cozumel</option>
                            <option value="Santiago">Santiago de Chile</option>
                            </select>
                        </div>
                        </div>
                        <div className="frame2040">
                        <div className="frame2028">
                            <p className="traslado">Traslado</p>
                            <select name="traslado" id="traslado" className="frame13286">
                            <option value="si">Si</option>
                            <option value="no">No</option>
                            </select>
                        </div>
                        <div className="frame2025">
                            <p className="presencialidad">Presencialidad</p>
                            <select
                            name="presencialidad"
                            id="presencialidad"
                            className="frame13287"
                            >
                            <option value="presencial">Presencial</option>
                            <option value="remoto">Remoto</option>
                            <option value="mixto">Mixto</option>
                            </select>
                        </div>
                        </div>
                        <div className="frame2026">
                        <p className="documentocv">Documento CV</p>
                        <div className="frame20272">
                            <button className="subir">
                            <a className="imgSubir">
                                <FontAwesomeIcon icon={faCloudUploadAlt} />
                            </a>
                            <p className="pSubir">Subir de nuevo</p>
                            </button>
                            <button className="borrar">
                            <a className="imgBorrar">
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </a>
                            <p className="pBorrar">Borrar</p>
                            </button>
                        </div>
                        </div>
                        <div className="frame1380">
                        <div className="frame14333">
                            <p className="etiquetas">Etiquetas</p>
                            <br />
                            <div style={{width: '452px', marginLeft: '10px'}}>
                            <Select
                            options={options}
                            onChange={onDropdownChage}
                            isMulti
                            />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <iframe title="myFrame" src={require('../doc/Antony Rebolledo Matus.pdf')} width="100%" height="100%"  > </iframe>
            </div>
        </div>
    </div>
  );
}

export default Details_Data;
