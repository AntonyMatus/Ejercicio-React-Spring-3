import React from "react";
// imagenes
import trash from '../img/trash.png'
import x from '../img/x.png'

const FiltroBusqueda = () => {
  return (
    <div className="frame1422">
      <div className="frame2001">
        <p className="filtros">Filtros de búsqueda</p>
        <img src={trash} alt="trash" id="borrar" />
      </div>
      <div className="frame1999">
        <div className="frame1380">
          <div className="frame14333">
            <p className="etiquetas">Etiquetas</p>
            <select className="frame1328">
              <option>Escribe para buscar</option>
            </select>
          </div>
          <div className="frame1430">
            <div className="frame1401">
              <div className="tagReact">
                <p className="react">REACT</p>
                <img src={x} alt="" className="cruz" />
              </div>
              <div className="tagHtml">
                <p className="html">HTML&CSS</p>
                <img src={x} alt="" className="cruz" />
              </div>
            </div>
            <div className="frame1403">
              <div className="tagAngular">
                <p className="angular">ANGULAR</p>
                <img src={x} alt="" className="cruz" />
              </div>
            </div>
          </div>
        </div>
        <div className="frame1433">
          <p className="pais">País</p>
          <select className="frame13282">
            <option value="España">España</option>
            <option value="México">México</option>
            <option value="Chile">Chile</option>
            <option value="Argentina">Argentina</option>
          </select>
        </div>
        <div className="frame1434">
          <p className="ciudad">Ciudad</p>
          <select className="frame13283">
            <option value="Ciudad">Valencia</option>
            <option value="Ciudad">Cozumel</option>
            <option value="Ciudad">Barcelona</option>
            <option value="Ciudad">Madrid</option>
          </select>
        </div>
        <div className="frame14222">
          <p className="presencialDistancia">Presencial / a distancia</p>
          <div className="frame1421">
            <div className="frame1414">
              <input type="checkbox" className="checkPresencial" />
              <p className="presencial">Presencial</p>
            </div>
            <div className="frame1415">
              <input type="checkbox" className="checkRemoto" />
              <p className="remoto">En remoto</p>
            </div>
          </div>
        </div>
        <div className="frame1435">
          <p className="posibilidadTraslado">Posibilidad traslado</p>
          <div className="frame14212">
            <div className="frame14142">
              <input type="checkbox" className="checkSi" />
              <p className="si">Si</p>
            </div>
            <div className="frame14152">
              <input type="checkbox" className="checkNo" />
              <p className="no">No</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltroBusqueda;
