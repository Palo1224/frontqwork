import React, { useEffect, useState } from 'react'
import { Footer } from '../../Footer/Footer'
import { Contactenos } from '../Contactenos/Contactenos'
import styles from "./home.module.scss"
import principal from "../../../img/images.jfif"
import { Navigate, useNavigate } from 'react-router-dom'
export const Home = () => {


  const [select, setSelect]=useState("")
  const navigate=useNavigate()


  return (


    <div className={styles.container}>
  <div className={styles.home}>
  <label>Un equipo confiable de profesionales comprometidos con el cambio tecnológico y su impacto en las organizaciones trabajará integrándose a sus procesos de negocio y  en el desarrollo de software, despliegue, reingeniería de procesos y actividades criticas en su infraestructura de IT.
  <div> 
 <button onClick={ () => navigate("/contacto") }>
      Contáctenos</button>


</div>
</label>
 
<img width={500}  src={principal}></img>



</div>

</div>


   
  )
}
