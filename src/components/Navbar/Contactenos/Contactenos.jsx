import React from "react";
import styles from "./contactenos.module.scss";
export const Contactenos = () => {
  return (
    <div className={styles.container}>
        <h2> Sobre Nosotros</h2>
        <p>
          Gracias por visitarnos Si Usted esta interesado por nuestros servicios
          o productos no dude en contactarnos completando este formulario.
          Nuestros asistentes comerciales en breve estarán asesorandolo y
          respondiendo todas sus inquietudes.
        </p>
      <div className={styles.form}>
        <form>
          <input></input>
          <input></input>
          <input></input>
          <input></input>

          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
};
