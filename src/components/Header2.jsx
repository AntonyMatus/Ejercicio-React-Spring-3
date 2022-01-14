import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';



const Header2 = () => {

    const UseNavigate = useNavigate;
    const navigate = UseNavigate();

    const navigateTo = (path) => {
        navigate(path);
    }


    return (
        <div className="frame22" >
           <div className="frame1216">
                <div className="frame1893">
                    <div className="frame1200">
                        <div className="frame1283">
                             <p className="na">NA</p>
                        </div>
                        <p className="username">Username</p>
                        </div>
                        <select name="" id="" className="icon">
                            <option value="logout">Cerrar sessión</option>
                        </select>
               </div>

           </div>
           <div className="frame1217">
               <div className="frame1185" >
                   <p className="volver" onClick={() => navigateTo('/tabla')}>Volver</p>
                    <a className="icon" >
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </a>
               </div>
           </div>
       </div>
    );
};

export default Header2;