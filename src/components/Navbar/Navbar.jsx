import React, { useEffect, useState } from 'react'
import styles from "./navbar.module.scss"
import logo from "../../img/logo.png"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Home } from './Home/Home'
import { SobreNosotros } from './SobreNosotros/SobreNosotros'
import { SoftFactory } from './SoftFactory/SoftFactory'
import { ProductandServic } from './ProductyServicios/ProductandServic'
import { Contactenos } from './Contactenos/Contactenos'
export const Navbar = () => {

  const [ selectOption, setSelectOption ] = useState(""||"Home")

 const navigate=useNavigate("")
  return (
    <div className={styles.containesNav}>
      <div className={styles.logo}>

      <img src={logo} width={180}></img>
      <div>
      <p>Integrando Tecnología e Información para las organizaciones </p>

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
                <label className={styles.side_bar_item}onClick={ () => navigate("/productoyservicio") }><span>Productos y Servicios</span></label>
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
              selectOption === "Productos y Servicios"  && <Link to="/productoyservicio"></Link>
            }
                          {
              selectOption ==="Contáctenos" && <Link to="/contacto"></Link>
            }
            
    </div>
    
  )
}
