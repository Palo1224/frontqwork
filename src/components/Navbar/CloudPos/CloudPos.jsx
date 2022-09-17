import React from "react";
import styles from "./cloudpos.module.scss";
import analisis from "../../../img/analisis.png";
import infractura from "../../../img/infracturatecnologica.png";
import valor from "../../../img/valor.png";
import { useNavigate } from "react-router-dom";
export const CloudPos = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.cloudpos}>
        <h2>CloudPos</h2>
        <p>“Punto de Venta Integral para la Gestión Comercial de su empresa”</p>
        <p>
          Este Software es ideal para aquellos que buscan un aplicativo sencillo
          y flexible que permita manejar las ventas en forma descentraliza y
          eficientemente dentro de su empresa, con ubicación de los puntos de
          venta en diversos lugares geográficos (Ciudades, Provincias y Paises),
          con un intercambio de datos rápido y seguro, centralizando la
          información en un solo punto para una gestión eficiente, usando
          niveles de seguridad avanzados y usando como vinculo de enlace la red
          Internet.
        </p>
        <p>
          Esta pensado para una implementación rápida y eficiente, pudiendose
          optar por incorporar soluciones de Alta Dispibilidad en el caso que la
          empresa lo requiera.
        </p>
        <p>
          El esquema de Concentradores y Puntos de venta inteligentes le permite
          ante un fallo o imprevisto tanto de la central como de uno o mas
          puntos de venta en particular, seguir procesando sus datos y una vez
          establecida la conectividad, en forma inteligente, realizar el
          intercambio de novedades y actualizar el componente que asi lo
          requiera. Los diferentes enlaces Internet, Satelitales, Fibra Optica,
          no son una frontera para la operatoria diaria de nuestra solución.
        </p>
        <p>
          El bajo costo de licenciamiento "Inicial" y la estabilidad de la
          infraestructura tecnológica de software (Linux, Java, Oracle) nos
          posicionan en un lugar privilegiado a la hora de realizar el Startup
          en el segmento de "Retail" de la industria.
        </p>

        <div className={styles.listas}>
          <div className={styles.li}>
            <div className={styles.titulo}>
              <label className={styles.kitmarket}>
                Alcance funcional de los módulos
              </label>
            </div>
            <div className={styles.imagenArduino}>
              <img width={210} src={analisis} />
            </div>
          
            <p>
            <p>
                <b>Puntos de Venta</b>
              </p>
              <ul>
                <li>Facturacion en Punto de Venta</li>
                <li>Proveedores en Punto de Venta</li>
                <li>Manejo de lista de precios</li>
                <li>Manejo de tarjetas de pago</li>
                <li>Ventas en multimoneda</li>
                <li>Cambio de turnos</li>
                <li>Retiros/Cierres de caja</li>
                <li>Stock en locales</li>
                <li>Envio de mercaderias entre locales.</li>
                <li>Inventario en tiempo real.</li>
                <li>Manejo impresora fiscal</li>
                <li>Ventas por promociones</li>
              </ul>
              <p>
                <b>Administración Central</b>
              </p>
              <ul>
                <li>Administracion de locales</li>
                <li>Administracion de empleados</li>
                <li>Administracion de Cajas</li>
                <li>Administracion de mercaderias</li>
                <li>Administracion de promociones</li>
                <li>Manejo de listas de precios</li>
                <li>Administracion de promociones</li>
                <li>Reportes de Gestion</li>
                <li>Monitoreo via Internet de operatoria</li>
                <li>Administracion de monedas</li>
                <li>Seguridad de Usuario</li>
              </ul>
              
              <p>
                <b>Reportes de Gestión</b>
              </p>
              <p>
                Posibilidad de explotación de datos vias Damarts de Ventas,
                Compras, Stocks, tomando como dimensiones Tiempo, Lugar de
                venta, Linea de productos, etc.
              </p>
            </p>
          </div>

          <div className={styles.li}>
            <div className={styles.titulo}>
              <label className={styles.fanborg}>
                Valor agregado del Punto de Venta{" "}
              </label>
            </div>
            <div>
              <img width={210} src={valor} />
            </div>
            <p>
              <b>Integración con QWGestión (ERP)</b>
            </p>
            <p>
              En el caso que su Empresa necesite manejar el proceso de compras,
              cobranzas y pagos con sus Clientes/Proveedores podrá optar con
              complementar QWPos con QWGestión, un ERP basado en la misma
              tecnológica que abarca el ciclo comercial de su empresa.
            </p>

            <p>
              <b>Business Intelligence Integrado</b>
            </p>
            <p>
              Podra incorporar herramientas del tipo OLAP a fin de obtener
              reportes del tipo sumarizados y consultas Adhoc.
            </p>
            <p>
              <b>Trazabilidad</b>
            </p>
            <p>
              Todos las operaciones pueden ser trazadas por el modulo de
              "Trazabilidad" permite conocer todas las operaciones al detalle".
            </p>
            <p>
              <b>"POINT OF SALE" bajo tecnología</b>
            </p>
          </div>
          <div className={styles.li}>
            <div className={styles.titulo}>
              <label className={styles.sensores}>
                Infraestructura Tecnológica
              </label>
            </div>

            <div>
              <img src={infractura} width={210} />
            </div>

            <p>
              <b>Requerimientos Mínimos</b>
            </p>
            <p>
            Requiere un minimo de Hardware y practicamente cero licenciamiento.
            </p>

            <p>
              <b>Licenciamiento</b>
            </p>
            <p>
            Tanto los punto de ventas como el módulo de administración Central, son LIBRES DE LICENCIAMIENTO. Su corazon esta montado sobre el lenguaje mas popular de Internet JAVA y su certificación sobre LINUX ha sido probada en mas de tres versiones de este popular sistema operativo.
        
            </p>
            <p>
              <b>Bases de Datos</b>
            </p>
            <p>
            Posibilidad de correr sobre Oracle Database Express Edition/Standard Edition/Enterprise Edition, para los Puntos de venta o la administración Central.
            </p>
            <p>
              <b>Accesos Locales/Remotos</b>
            </p>
            <p>
            Certificado sobre ambientes LAN/MAN/WAN, sin limites geograficos para la conectividad.
            </p>
            <p>
              <b>Seguridad en la transmisión de datos</b>
            </p>
            <p>
            La transmisión de datos esta basada en encriptamiento asimétrico, combinada con algoritmos de HASH para el control de integridad de datos.
            </p>
          </div>
        </div>
        <div>
          <a
            href={
              "https://www.cloudpos.com.ar/"
            }
            target="_blank"
          >
Ver más info     </a>
        </div>
      </div>
    </div>
  );
};
