import React, { useState } from 'react'
import { Contactenos } from '../Contactenos/Contactenos'
import styles from "./home.module.scss"
export const Home = () => {
    const [ selectOption, setSelectOption ] = useState("")

  return (
    <div className={styles.container}>
 <div className={styles.home}>
        <label>Un equipo confiable de profesionales comprometidos con el cambio tecnológico y su impacto en las organizaciones trabajará integrándose a sus procesos de negocio y  en el desarrollo de software, despliegue, reingeniería de procesos y actividades criticas en su infraestructura de IT.

</label>
<button onClick={ () => setSelectOption("Contáctenos")}>
      Contáctenos</button>


      {selectOption ==="Contáctenos" && <Contactenos></Contactenos>}
    </div>
    </div>
   
  )
}
