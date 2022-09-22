import React from "react";
import styles from "./contactenos.module.scss";
import contact from "../../../img/contact.jfif";
export const Contactenos = () => {

  return (
    <div className={styles.container}>

        <h2>Contáctenos</h2>
        <p>
          Gracias por visitarnos.
          <p>
          Si usted está interesado por nuestros servicios
          o productos no dude en contáctarnos completando este formulario.
          Nuestros asistentes comerciales en breve estarán asesorandolo y
      respondiendo todas sus inquietudes.
            </p> 
        </p>
      <div className={styles.form}>
        <form action="https://formspree.io/f/xqkjpqnw" method="POST">
          <input type="text" name="name"placeholder="Nombre*" required></input>

          <input type="email" name="email"placeholder="Email*" required></input>
          <textarea placeholder="Asunto" class="form-control" name="message" rows="10" required></textarea>

          <button type="submit">Enviar</button>
        </form>
        <div>
          <img src={contact} width={240}/>
        </div>
      </div>
    </div>
  );
};

