import React from "react";
import styles from "./datascience.module.scss";
import datascience from "../../../img/DataScience.jpg"
export const DataScience = () => {
  return (

    <div className={styles.container}>
  <div className={styles.home}>
        <div>

<h2>Data Science</h2>
</div>

<div className={styles.texto}>
<p>

El campo de la ciencia de datos está creciendo a un ritmo rápido, y su organización puede lograr resultados sorprendentes con solo entender sus datos, su historia y proyectarlos en escenarios futuros.

Nuestro equipo de profesionales combina el Analisis deductivo, Analisis predictivo y la Inteligencia artificial para que sus procesos y sus decisiones esten alineados al estrategia organizacional.

</p>
<img src={datascience} width={250}></img>
</div>






        </div>
      
       
   
    </div>
  );
};
