import React from "react";
import { Footer } from "../../Footer/Footer";
import styles from "./SobreNosotros.module.scss"
import image from "../../../img/descarga.jpg"
import soluciones from "../../../img/soluciones.jpg"
export const SobreNosotros = () => {

  return (
    <div className={styles.container}>
    <div className={styles.sobrenostros}>
      
      <h2 > Sobre Nosotros</h2>
      <p>
        QWORK es una empresa enfocada a soluciones tecnológicas
        orientadas a la integración de sistemas de información.
        Por integración entendemos, la capacidad de proveer soluciones completas que permitan a
        nuestros clientes contar en un determinado proyecto con un proveedor
        único.</p>
        <p>Por solución entendemos, la incorporación de tecnología con la
        finalidad de reducir costos, aumentando la eficiencia de los procesos de
        negocios y apoyando la estrategia organizacional.</p><p> QWORK fue fundada en
        el año 2001 con la finalidad de proveer productos y servicios
        informáticos a empresas de diferentes rubros, sean estas pymes o grandes
        empresas, tal como lo demuestra nuestra actual cartera de clientes.
        </p><p>Desde nuestra fundación, hemos privilegiado la calidad de nuestros
        productos y servicios y la atención a nuestros clientes, como así también
        la entrega de nuestros proyectos en tiempo y presupuesto.</p><p> Para llevar a
        cabo nuestra estrategia de negocios nos hemos basado en los siguientes
        aspectos y factores que consideramos claves para un desarrollo de
        negocios exitosos:
        <ul>
            <li>
            Un equipo de profesionales altamente calificado para
        la integración de soluciones.
            </li>
            <li>
            Integración con los proveedores líderes
        del mercado para brindar productos y servicios de alta calidad.
            </li>
            <li>
            Productos de hardware y software reconocidos y producidos por empresas
        líderes en tecnología a nivel mundial.
            </li>
        </ul>
   
       QWORK basa su modelo de negocios
        en desarrollar e implementar soluciones que puedan ser incorporadas con
        éxito en la infraestructura tecnológica de las organizaciones.
      </p>
    </div>
    <div className={styles.imagen}>
    <div>
      <img src={image} width={260}></img>
      </div>

      <div>

      <img src={soluciones}  width={260}></img>
      </div>

    </div>
  

    </div>
  );
};
