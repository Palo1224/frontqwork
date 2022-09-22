import React from "react";
import styles from "./robotica.module.scss";
import arduino from "../../../img/arduino1.png";
import robot from "../../../img/robot.png";
import camaras from "../../../img/camaras.png";
import { useNavigate } from "react-router-dom";
export const Robotica = () => {

    const navigate=useNavigate()
  return (
    <div className={styles.container}>
      <div className={styles.robotica}>
        <h2>IOT & Robótica</h2>
        <p>
          Comercializamos e implementamos soluciones basadas en IOT y Robótica.
        </p>
        <p>
          QWORK comercializa y distribuye soluciones de FANIOT, que es la
          fábrica de nano sensores & IOT (Misiones - República Argentina).
        </p>

        <div className={styles.listas}>
          <div className={styles.li}>
            <div className={styles.titulo}>
              <label className={styles.kitmarket}>Kit Market IOT</label>
            </div>
            <div className={styles.imagenArduino}>
              <img  width={210} src={arduino} />
            </div>
              <p >
                El kit incluye tres módulos educativos
                FANIOT, que introducen al estudiante en los trabajos del futuro,
                vinculados a la Robótica y a la Programación.
              </p>
              <p>
                <ul>
                  <li>
                    Son módulos encastrables que permiten al estudiante
                    desarrollar diferentes proyectos, alternando los módulos para
                    lograr un proyecto tecnológico a la medida de sus
                    necesidades y sin cables.
                  </li>
                
                </ul>
              </p>
              <p>
                <b>Módulo Interfaz</b> funciona como interacción de usuarios, la
                cual posee una pantalla OLED, 3 pulsadores, 3 LEDs, 3 LEDs
                neopixels, un buzzer y sensores de temperatura y luz. Se utiliza
                en conjunto con el Módulo Base.
              </p>
              <p>
                <b>Módulo Base</b> está basado en el microcontrolador ESP32 de
                Espressif. Cuenta con conexión WiFi y Bluetooth, 20
                entradas/salidas digitales, de las cuales 10 se pueden utilizar
                como entradas analógicas.
              </p>
              <p>
                <b>Módulo de Alimentación</b> funciona como batería y se puede
                utilizar para alimentar los módulos del Kit Maker IOT y Kit
                Maker IOT PRO. <br></br>Posee conexión para cargarse mediante paneles
                solares o un cargador USB de 5V.
              </p>
          </div>

          <div className={styles.li}>
            <div className={styles.titulo}>
              <label className={styles.fanborg}>FanBorg    </label>
            </div>
            <div>
              <img width={210} src={robot} />
            </div>
              <p>
                Es un pequeño vehículo terreste no tripulado, capaz de mantener
                de manera autónoma un recorrido preprogramado. <br></br>Dispone de
                acceso directo a una App sin cargo, donde podés visualizar
                mediciones de los diferentes sensores y enviar comandos de
                dirección, velocidad y geoposicionar el mismo.
              </p>
              <p>
                <ul>
                  <li>
                    Es compatible con módulos MP3, Mini AltaVoz, GPS, cámara de
                    fotos y videos. También con sensores para mediciones
                    ambientales como temperatura, humedad y luminosidad. Cuenta
                    con baterías de ion de litio.
                  </li>
       
                  <li>
                    El Fanborg se puede programar en una interfaz gráfica de
                    programación en bloques y mediante Arduino IDE, una
                    aplicación multiplataforma para Windows, MacOS y Linux que
                    permite escribir y cargar programas en placas compatibles
                    con Arduino. ​
                  </li>
                  <li>
                    La integración de programación en gráfica y en código
                    permite al estudiante abordar la programación en diferentes
                    niveles, desde una interfaz amigable y sencilla, a una de
                    características más avanzadas como Java y C++.
                  </li>
                </ul>
              </p>
          </div>
          <div className={styles.li}>
            <div className={styles.titulo}>
              <label className={styles.sensores}>Sensores IOT</label>
            </div>

            <div>
              <img src={camaras} width={210} />
            </div>

              <p>
                Soluciones para Ciudades Inteligentes y Educación Innovadora
              </p>
              <p>
                <b>Termómetro Inteligente IRM - 100</b><br></br>
                Este integrante de la familia de termómetros infrarrojos
                inteligentes, posee un mango ergonómico para realizar mediciones
                instantáneas sobre objetos y personas. Comparte la precisión y
                calidad de los IR-1000 en un formato manual, fácil de
                transportar, con pantalla OLED de alta definición, que facilita la
                visualización de las mediciones.
              </p>
              <p>
                <b> Sensores CO2 IOT / NDIR</b><br></br>
                Los Sensores CO2 IOT detectan altas concentraciones de CO2 en
                espacios cerrados, para evitar ambientes viciados y contribuir a
                la lucha contra el Covid-19.
              </p>
              <p>
                Los Sensores CO2 IOT incluyen una aplicación web, que permite
                visualizar los datos obtenidos por los sensores y realizar un
                seguimiento de las diferentes concentraciones de dióxido de
                carbono que se encuentran en el ambiente.
              </p>
          </div>

        </div>
        <div>
            <a href={"https://www.faniot.com.ar/dossier/Cat%c3%a1logo-FANIOT-2021.pdf"} target="_blank">
                Catálogo FANIOT
            </a>
        </div>
      </div>
    </div>
  );
};
