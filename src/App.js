import styles from "./App.module.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Navbar/Home/Home";
import { SobreNosotros } from "./components/Navbar/SobreNosotros/SobreNosotros";
import logoqwork from "./img/logo.png";
import logocloudpos from "./img/cloudpos.png";
import logofaniot from "./img/faniotpng.png";
import { Contactenos } from "./components/Navbar/Contactenos/Contactenos";
import { SoftFactory } from "./components/Navbar/SoftFactory/SoftFactory";
import { DataScienceIA } from "./components/Navbar/DataScienceIA/DataScienceIA";
import { Soporte } from "./components/Navbar/Soporte/Soporte";
import { Robotica } from "./components/Navbar/Robotica/Robotica";
import { CloudPos } from "./components/Navbar/CloudPos/CloudPos";
import {FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa"
function App() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/sobrenosotros" element={<SobreNosotros />}></Route>
          <Route path="/softwarefactory" element={<SoftFactory />}></Route>
          <Route
            path="/datascience&ia"
            element={<DataScienceIA />}
          ></Route>
          <Route path="/robotica" element={<Robotica />}></Route>
          <Route path="/cloudpos" element={<CloudPos />}></Route>
          <Route path="/soporte" element={<Soporte />}></Route>

          <Route path="/contacto" element={<Contactenos />}></Route>
          <Route path="*"></Route>
        </Routes>
      </div>
      <div className={styles.footer}>
        <ul>
          <li>
            <div className={styles.li}>
              <div>
                <img width={110} src={logoqwork}></img>
              </div>
              <p>QworkPymes</p>

              <span>
                Soluciones automatizadas para su Hogar, Oficina,
                 Industria, sin alterar su instalación actual
                 brindando máximo Confort, Seguridad y
                Operatividad.
              </span>
            </div>
          </li>
          <li>
            <div className={styles.li}>
              <div>
                <img width={110} src={logofaniot}></img>
              </div>{" "}
              <p> IOT & Robótica</p>
              <span>
                Distribuidores Oficiales de soluciones basadas en
                Internet  de las cosas y robótica educativa
                Fabricadas en la RepúblicaArgentina por FANIOT
              </span>
            </div>{" "}
          </li>
          <li>
            <div className={styles.li}>
              <div>
                <img width={110} src={logocloudpos}></img>
              </div>{" "}
              <p> Su negocio en la Nube</p>
              <span>
                Solución Integral para su negocio las 24 hs. los 365
                Días del año.
              </span>
            </div>
          </li>
        </ul>
      </div>

      <div className={styles.datos}>
        <div>
          <p>
          <FaMapMarkerAlt></FaMapMarkerAlt>
          <a target="_blank" href="https://goo.gl/maps/BMHfivXVRc6K7PXv5">
          Av. Caseros 2862 P3 Of. A Distrito Tecnológico Ciudad Autonoma Bs.
            As. Argentna
          </a>
          
          </p>
          <p><FaPhoneAlt/> 
             <a target="_blank"  href="tel:+54 11 68474405">  +54 11 68474405 / </a>
             <a target="_blank" href="tel:+54 11 68474684" >+54 11 68474684 / </a> 
             <a  target="_blank" href="tel:+54 11 68474238">+54 11 68474238</a> </p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default App;
