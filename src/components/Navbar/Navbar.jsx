import React, { useEffect, useState } from 'react'
import styles from "./navbar.module.scss"
import logo from "../../img/qwork.jpg"
import { Link, Navigate, useNavigate } from 'react-router-dom'

export const Navbar = () => {

  const [ selectOption, setSelectOption ] = useState(""||"Home")

 const navigate=useNavigate("")
  return (
    <div className={styles.containesNav}>
      <div className={styles.logo}>

      <img src={logo} width={180}></img>
      <div>
      <p>Integrando Tecnología e Información para las Organizaciones </p>

      </div>
      </div>
      <div>
      <nav className={styles.nav}>
        {/* <Link >
        <label>Home</label>
        </Link> */}
                <label className={styles.side_bar_item}onClick={ () => navigate("/home")}><span>Home</span></label>
                <label className={styles.side_bar_item}onClick={ () =>   navigate("/sobrenosotros")}><span>Sobre Nosotros</span></label>
                <label className={styles.side_bar_item}onClick={ () =>navigate("/softwarefactory") }><span>Software Factory</span></label>
                <label className={styles.side_bar_item}onClick={ () => navigate("/robotica") }><span>IOT & Robótica </span></label>
                <label className={styles.side_bar_item}onClick={ () => navigate("/cloudpos") }><span>CloudPos</span></label>
                <label className={styles.side_bar_item}onClick={ () => navigate("/datascience&ia") }><span>DataScience & IA</span></label>
                <label className={styles.side_bar_item}onClick={ () => navigate("/soporte") }><span>Soporte</span></label>

                <label className={styles.side_bar_item}onClick={ () => navigate("/contacto") }><span>Contáctenos</span></label>


      </nav>

      </div>
      {/* {
              selectOption === "Home" &&
            } */}
             {/* {
              selectOption === "Sobre Nosotros" && 
            } */}
             {
              selectOption === "Software Factory" && <Link to="/softwarefactory"></Link>
            }
              {
              selectOption === "DataScience"  && <Link to="/datascience&ia"></Link>
            }
                   {
              selectOption === "cloudpos"  && <Link to="/cloudpos"></Link>
            }
                                {
              selectOption ==="Soporte" && <Link to="/soporte"></Link>
            }
                          {
              selectOption ==="Contáctenos" && <Link to="/contacto"></Link>
            }
                                 {
              selectOption ==="robotica" && <Link to="/robotica"></Link>
            }
            
    </div>
    
  )
}
