import React from "react";
import { Footer } from "../../Footer/Footer";
import styles from "./softFactory.module.scss";
export const SoftFactory = () => {
  return (
    <div className={styles.factory}>
            <div className={styles.listas}>

      <h2> Software Factory </h2>
      <h4>Desarrollos a medida y genéricos para el mercado.</h4>
      <p>
        Desarrollamos soluciones basadas en sistemas del tipo TPS
        (transaccionales) que abarcan soluciones basadas en Gestión Comercial
        (ERP), Puntos de Venta, Manejos de Stock, integrándolos facilmente con
        soluciones de terceros basadas en Business Intelligence, Big Data,
        Datamining.
      </p>
      <p>
        Nuestros desarrollos son escalables, su core tecnológico está basado en
        el lenguaje más popular para desarrollo de aplicaciones JAVA y en un
        motor de base de datos transaccional líder del mercado (Oracle
        Database).
      </p>
      <p>
        {" "}
        Consideramos que a la hora de elegir desarrollar un software o bien
        adquirirlo el mismo debería cumplir con los siguientes estándares:
      </p>
      
       
          <div className={styles.lista}>
          <div className={styles.numero}>

<span>1</span>
  </div>
          <div>
            <p>
              <label>Sistema Operativo donde se instalará</label>
              <br></br>
              No debe ser una barrera de entrada, el software aplicativo debe
              poder adaptarse tanto a plataformas abiertas como propietarias
            </p>
          </div>
        </div>
        
         
          <div className={styles.lista}>
          <div className={styles.numero}>

<span>2</span>
  </div>
          <div>
            <p>
              <label>Lenguaje de programación</label>
              <br></br>
              Debe ser el mismo abierto y multiplataforma permitiéndole a la
              empresa llegado el caso migrar sus aplicativos sin tener mayores
              costos relacionados a la migración y reinstalación por cambios en
              la infraestructura tecnológica. Es decir deberia tener una
              flexibiidad tal de correr en distintos procesadores y sistemas
              operativos del mercado​.
            </p>
          </div>
        </div>
       
          <div className={styles.lista}>
          <div className={styles.numero}>

          <span>3</span>
            </div>
       
          
          <div>

          <p>
            <label>Base de Datos</label>
            <br></br>
            La base de datos debe cumplir con requisitos de escalabilidad,
            seguridad y resguardo, con un alto nivel de confiabilidad. Debe ser
            de fácil acceso y sobre todo performante. Deben estar abiertas a las
            diversas herramientas del tipo ETL enfocada a procesos de Business
            Intelligence o Big Data.{" "}
          </p>
        </div>
        </div>


       
            
        <div className={styles.lista}>
         
       
        <div className={styles.numero}>

<span>4</span>
</div>
<div>

          <p>


            <label>Interoperabilidad</label>
            <br></br>
            Debe poder implementarse de tal forma que la conectividad de
            diversas redes generen transparencias en el uso del mismo.{" "}
          </p>
        </div>
        </div>

    

      
      

      </div>
    </div>
  );
};
