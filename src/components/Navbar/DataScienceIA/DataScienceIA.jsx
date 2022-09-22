import React from "react";
import styles from "./datascienceIA.module.scss";
import computadora from "../../../img/computadora.png";
import redes from "../../../img/redes.png";
import grupos from "../../../img/grupos.png";
export const DataScienceIA = () => {
  return (
    <div className={styles.container}>
      <div className={styles.productServi}>
        <h2>Data Science e Inteligencia Artificial</h2>
        <p>
        En QWORK entendemos que sus datos y su historia son el potencial para  pode montar escenarios que apoyen la toma de decisiones. Es por eso que nuestro staff de profesionales puede acompañarlo en el proceso de obtención de patrones de conducta, indicadores y reingenieria de negocios, utilizando los mismos como fuente de información primaria.
        </p>
        <p>
          Contamos con servicios <b>on demand
            </b> o <b>fijos (mensuales)
              </b> dimensionando cada uno en base a la necesidad de cada cliente.
        </p>

        <div className={styles.listas}>
          <div className={styles.li}>
            <div className={styles.titulo}>
              <label className={styles.analisisD}>Análisis deductivo</label>
            </div>
<div>

              <img width={230} src={computadora} />
</div>
            
              <p>
              El proceso de análisis deductivo ayuda a las organizaciones a entender que sucedio, cual pueden ser la mejor estrategia y sobre todo apoyar la toma de decisiones.
              </p>
              <p>
              Utilizamos herramientas OLAP y motores MOLAP combinado con poderosas ETLs para tener una visión del negocio basado en los datos.
              </p>
        
          </div>

          <div className={styles.li}>
            <div className={styles.titulo}>
              <label className={styles.analisisP}>Análisis predictivo</label>
            </div>
<div>

              <img width={230} src={redes} />
</div>
          

              <p>
              Los datos de su organización son sometidos a procesos basados en algoritmos de minería de datos que le permitiran poder obtener una análsis predictivo, identificando patrones de conducta, clusterizaciones entro otras ventajas de dichas tecnologías.
              </p>
             
        
          </div>
          <div className={styles.li}>
            <div className={styles.titulo}>
              <label className={styles.maquina}>Máquinas de aprendizaje e Inteligencia artificial</label>
            </div>

            <div>
              <img src={grupos} width={230} />
            </div>

         
              <p>
              Los procesos de negocio pueden necesitar aletargar el flujo de datos por indicadores que surgen del análisis de información.
              </p>
              <p>Nuestro equipo pone en marcha máquinas de aprendizaje de rápida  implementación y bajo costo, como así también procesos de Inteligencia Artificial aplicados al flujo de procesos organizacional.

              </p>
             
            
          </div>
        </div>
      </div>
    </div>
  );
};
