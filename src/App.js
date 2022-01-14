// import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';



/** Componentes */

import Titulo from './components/Titulo';
import Input from './components/Input';
import Recuerdame from './components/Recuerdame';
// import BtnText from './components/BtnText';
import Copyright from './components/Copyright';
import LoginImage from './components/Login_image';


function App() {
  return (
    <div className="App">
      <div id="login">
        <div id="Frame1223">
            <Titulo />
            <div id="Frame1254">
                    <div id="Frame943">
                        <div id="Frame1433">
                            <p id="email">Email</p>
                            <Input  type="text" placeholder="Introduce tu correo" name="email"  />
                        </div>
                        <div id="Frame1434">
                            <p className="contraseña"> Contraseña</p>
                            <Input type="password" placeholder="Introduce tu contraseña" name="password" />
                        </div>
                    </div>
                   <Recuerdame />

                  <Link id='button' role="button" to="/tabla" > Iniciar Sesión </Link>
                  {/* <BtnText  texto="Iniciar Sesión" /> */}
                  
            </div>
        </div>
        <Copyright />
    </div>
    <LoginImage/>
    </div>
  );
}

export default App;
