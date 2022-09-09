import React from "react";
import { Footer } from "../../Footer/Footer";
import styles from "./softFactory.module.scss"
export const SoftFactory = () => {
  return (
    <div className={styles.factory}>
      <p>
        Software Factory Desarrollos a medida y genericos para el mercado ​
        Desarrollamos soluciones basadas en sistemas del tipo TPS
        (transaccionales) que abarcan soluciones basadas en Gestión Comercial
        (ERP), Puntos de Venta, Manejos de Stock, integrándolos facilmente con
        soluciones de terceros basadas en Business Intelligence, Big Data,
        Datamining. Nuestros desarrollos son escalables, su core tecnológico
        está basado en el lenguaje mas popular para desarrollo de aplicaciones
        JAVA y en un motor de base de datos transaccional lider del mercado
        (Oracle Database). Consideramos que a la hora de elegir desarrollar un
        software o bien adquirirlo el mismo debería cumplir con los siguientes
        estandares:
        
        <ul>
        <li><label>1 Sistema Operativo donde se instalará</label>
        <br></br>
        No debe ser una barrera de entrada, el software aplicativo debe poder adaptarse tanto a
        plataformas abiertas como propietarias.</li>
        <li><label>2 Lenguaje de programación</label><br></br>
        Debe ser el mismo abierto y multiplataforma permitiéndole a la empresa
        llegado el caso migrar sus aplicativos sin tener mayores costos
        relacionados a la migración y reinstalación por cambios en la
        infraestructura tecnológica. Es decir deberia tener una flexibiidad tal
        de correr en distintos procesadores y sistemas operativos del mercado​.
        </li>
        <li><label>3 Base de Datos</label><br></br>
        La base de datos debe cumplir con requisitos de escalabilidad, seguridad y resguardo, con un alto nivel de
        confiabilidad. Debe ser de facil acceso y sobre todo performante. Deben
        estar abiertas a las diversas herramientas del tipo ETL enfocada a
        procesos de Business Intelligence o Big Data.</li>
        <li> <label>4 Interoperatibilidad</label><br></br>
        Debe poder implementarse de tal forma que la conectividad de diversas redes
        generen transparencias en el uso del mismo.</li>
            </ul>​ 
      </p>

    </div>
   
  );
};
