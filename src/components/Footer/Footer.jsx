import React from "react";
import styles from "./footer.module.scss";
import logoqwork from "../../img/logo.png";
import logocloudpos from "../../img/cloudpos.png";
import logofaniot from "../../img/fanIot.png";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul>
        <span>
          <div>
            <img width={100} src={logoqwork}></img>
            <p>Qwork Pymes</p>
            <label>Soluciones automatizadas<br></br> para su Hogar, Oficina,<br></br> Industria, sin alterar su<br></br> instalación actual<br></br> brindando máximo Confort,<br></br> Seguridad y Operatividad.</label>  

          </div>
        </span>
        <span>
          <div>
            <img width={100} src={logofaniot}></img>

            <p> IOT & Robótica</p>
            <label>Distribuidores Oficiales <br></br> de soluciones basadas en Internet <br></br> de las cosas y  robótica educativa<br></br>   Fabricadas en la República<br></br>  Argentina por FANIOT</label>
          </div>{" "}
        </span>
    
        <span>
<div>  <img width={33} src={logocloudpos}></img>
          <p> Su negocio en la Nube</p>
          <label>Solución Integral para su negocio<br></br>   las 24 hs. los 365 Días del año.</label>
    </div>     
  </span>


   
      </ul>
    </div>
  );
};
