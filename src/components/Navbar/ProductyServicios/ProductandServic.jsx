import React from "react";
import styles from "./producyservi.module.scss";
import computadora from "../../../img/computadora.png";
import redes from "../../../img/redes.png";
import grupos from "../../../img/grupos.png";
export const ProductandServic = () => {
  return (
    <div className={styles.container}>
      <div className={styles.productServi}>
        <h2>Servicios Profesionales</h2>
        <p>
          Quality Work cuenta con un Staff de profesionales que asistirán a la
          organizacion en todo lo relacionado a su operatividad basada en su
          infraestructura de IT.{" "}
        </p>
        <p>
          Contamos con servicios <b>on demand
            </b> o <b>fijos (mensuales)
              </b> dimensionando
          cada uno en base a la infraestructura de IT de quien o solicita.
        </p>

        <div className={styles.listas}>
          <div className={styles.li}>
            <div className={styles.titulo}>
              <label>Mantenimiento Preventivo y Correctivo</label>
            </div>
<div>

              <img width={250} src={computadora} />
</div>
            <div className={styles.datos}>
              <p>
                Los mantenimiento preventivos y correctivos le permiten a la
                organizacion poder contar con el servicio en tiempo y forma y no
                parar la operatoria de la organización o llegado el caso
                minimizar estos tiempos.
              </p>
              <p>
                Estos programas se dimensionan en base a a estructura de la
                organización y sus necesidades de IT.
              </p>
            </div>
          </div>

          <div className={styles.li}>
            <div className={styles.titulo}>
              <label>Redes y Conectividad e Infraestructura</label>
            </div>
<div>

              <img width={250} src={redes} />
</div>
            <div className={styles.datos}>

              <p>
               Todo lo relacionado a el Diseño, Implementación y mantenimiento de su red o redes, puede
                ser transferido a nuestro staff.
              </p>
              <p>
                Nos encargaremos no solo de diseñarla sino de ponera en
                funcionamiento y controlarla. Realizamos "El Cableado", "La
                conectividad de los componentes" y la "Configuración de
                seguridad y lógica de la misma", pudiendo brindar soluciones
                llave en mano.
              </p>
              <p>
                Tenemos experiencia en el armado de Datacenter para atender
                necesidades primarias de las organizaciones.
              </p>
            </div>
          </div>
          <div className={styles.li}>
            <div className={styles.titulo}>
              <label>Gerenciamiento de Infraestructuras Tecnológicas</label>
            </div>

            <div>
              <img src={grupos} width={250} />
            </div>

            <div className={styles.datos}>
              <p>
                Usted podrá contrar con un gerenciamiento tercerizado, confiando
                la administración y necesidades de IT de su organización en
                nuestra empresa.
              </p>
              <p>
                Podemos participar del Diseño y puesta en marcha del
                Planeamiento Estrategico en IT, basado en las necesidades de su
                negocio
              </p>
              <p>
                Su area de IT puede ser tercerizada o podemos integrarnos a su
                Staff para asesorarlo y ayornarlo tecnológicamente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
