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
import { ProductandServic } from "./components/Navbar/ProductyServicios/ProductandServic";
import { Soporte } from "./components/Navbar/Soporte/Soporte";
import { Robotica } from "./components/Navbar/Robotica/Robotica";
import { DataScience } from "./components/Navbar/DataScience/DataScience";

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
            path="/serviciosprofesionales"
            element={<ProductandServic />}
          ></Route>
                          <Route
            path="/robotica"
            element={<Robotica />}
          ></Route>
                         <Route
            path="/datascience"
            element={<DataScience />}
          ></Route>
                <Route
            path="/soporte"
            element={<Soporte />}
          ></Route>
          
          
          <Route path="/contacto" element={<Contactenos />}></Route>
          <Route path="*"></Route>
        </Routes>
      </div>
      <div className={styles.footer}>
      
        <ul>
          <li>
          <div className={styles.li}>
              <div  >
                <img width={110} src={logoqwork}></img>
              

              </div>
                <p>QworkPymes</p>

              <label>
                Soluciones automatizadas<br></br> para su Hogar, Oficina,
                <br></br> Industria, sin alterar su<br></br> instalación actual
                <br></br> brindando máximo Confort,<br></br> Seguridad y
                Operatividad.
              </label>
            </div>
          </li>
          <li>
          <div className={styles.li}>
              <div >
                <img width={110} src={logofaniot}></img>

              </div>{" "}
                <p> IOT & Robótica</p>
              <label>
                Distribuidores Oficiales <br></br> de soluciones basadas en
                Internet <br></br> de las cosas y robótica educativa<br></br>{" "}
                Fabricadas en la República<br></br> Argentina por FANIOT
              </label>
            </div>{" "}
          </li>
          <li>
            
          <div className={styles.li}>
              <div >
                <img width={110} src={logocloudpos}></img>
              </div>{" "}
                <p> Su negocio en la Nube</p>
              <label>
                Solución Integral para su negocio<br></br> las 24 hs. los 365
                Días del año.
              </label>
            </div>
          </li>
        
           

        </ul>
        
       
      </div>
    </div>
  );
}

export default App;
