import logo from "./logo.svg";
import styles from "./App.module.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Navbar/Home/Home";
import { SobreNosotros } from "./components/Navbar/SobreNosotros/SobreNosotros";
import logoqwork from "./img/logo.png";
import logocloudpos from "./img/cloudpos.png";
import logofaniot from "./img/fanIot.png";
import { Contactenos } from "./components/Navbar/Contactenos/Contactenos";
import { SoftFactory } from "./components/Navbar/SoftFactory/SoftFactory";
import { ProductandServic } from "./components/Navbar/ProductyServicios/ProductandServic";

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
            path="/productoyservicio"
            element={<ProductandServic />}
          ></Route>
          <Route path="/contacto" element={<Contactenos />}></Route>
          <Route path="*"></Route>
        </Routes>
      </div>
      <div className={styles.footer}>
        <ul>
          <span>
            <div>
              <div className={styles.imge}>
                <img width={100} src={logoqwork}></img>
                <br></br>

                <p>Qwork Pymes</p>
              </div>

              <label>
                Soluciones automatizadas<br></br> para su Hogar, Oficina,
                <br></br> Industria, sin alterar su<br></br> instalación actual
                <br></br> brindando máximo Confort,<br></br> Seguridad y
                Operatividad.
              </label>
            </div>
          </span>
          <span>
            <div>
              <div className={styles.imge}>
                <img width={130} src={logofaniot}></img>

                <p> IOT & Robótica</p>
              </div>{" "}
              <label>
                Distribuidores Oficiales <br></br> de soluciones basadas en
                Internet <br></br> de las cosas y robótica educativa<br></br>{" "}
                Fabricadas en la República<br></br> Argentina por FANIOT
              </label>
            </div>{" "}
          </span>

          <span>
            <div>
              <div className={styles.imge}>
                <img width={38} src={logocloudpos}></img>
                <p> Su negocio en la Nube</p>
              </div>{" "}
              <label>
                Solución Integral para su negocio<br></br> las 24 hs. los 365
                Días del año.
              </label>
            </div>
          </span>
        </ul>
      </div>
    </div>
  );
}

export default App;
