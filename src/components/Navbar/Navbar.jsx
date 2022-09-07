import React, { useState } from 'react'
import styles from "./navbar.module.scss"
import logo from "../../img/logo.png"
import { Link } from 'react-router-dom'
import { Home } from './Home/Home'
import { SobreNosotros } from './SobreNosotros/SobreNosotros'
import { SoftFactory } from './SoftFactory/SoftFactory'
import { ProductandServic } from './ProductyServicios/ProductandServic'
import { Contactenos } from './Contactenos/Contactenos'
export const Navbar = () => {

  const [ selectOption, setSelectOption ] = useState(""||"Home")

  // const handleHome=()=>{

  // }
  return (
    <div className={styles.containesNav}>
      <div className={styles.logo}>

      <img src={logo} width={160}></img>
      <div>
      <p>Integrando Tecnología e Información para las organizaciones </p>

      </div>
      </div>
      <div>
      <nav className={styles.nav}>
        {/* <Link >
        <label>Home</label>
        </Link> */}
                <label className={styles.side_bar_item}onClick={ () => setSelectOption("Home") }><span>Home</span></label>
                <label className={styles.side_bar_item}onClick={ () => setSelectOption("Sobre Nosotros") }><span>Sobre Nosotros</span></label>
                <label className={styles.side_bar_item}onClick={ () => setSelectOption("Software Factory") }><span>Software Factory</span></label>
                <label className={styles.side_bar_item}onClick={ () => setSelectOption("Productos y Servicios") }><span>Productos y Servicios</span></label>
                <label className={styles.side_bar_item}onClick={ () => setSelectOption("Contáctenos") }><span>Contáctenos</span></label>


      </nav>

      </div>
      {
              selectOption === "Home" && <Home/>
            }
             {
              selectOption === "Sobre Nosotros" && <SobreNosotros/>
            }
             {
              selectOption === "Software Factory" && <SoftFactory/>
            }
              {
              selectOption === "Productos y Servicios" && <ProductandServic/>
            }
                          {
              selectOption ==="Contáctenos" && <Contactenos/>
            }
            
    </div>
    
  )
}
