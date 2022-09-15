import React from "react";
import styles from "./soporte.module.scss";
import help from "../../../img/help.jpg"
export const Soporte = () => {
  return (
    <div className={styles.container}>

        <div className={styles.soporte}>
        <div>

<h2>Soporte</h2>
</div>

<div className={styles.texto}>
<p>



Si Usted tiene algún problema con nuestros servicios.
No dude en ingresar a nuestro soporte remoto 

</p>
<img src={help} width={200}></img>
</div>


<div>
<button>
        Ingresar a Soporte
    </button>
</div>



        </div>
      
       
   
    </div>
  );
};
