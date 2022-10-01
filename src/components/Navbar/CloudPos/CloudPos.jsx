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
        <h4 className={styles.subtitulo}>“Punto de Venta Integral para la Gestión Comercial de su empresa”</h4>
        <p>
          Este software es ideal para aquellos que buscan una aplicación sencilla
          y flexible, que permita manejar las ventas en forma descentralizada y
          eficientemente dentro de su empresa, con ubicación de los puntos de
          venta en diversos lugares geográficos (ciudades, provincias y países),
          con un intercambio de datos rápido y seguro, centralizando la
          información en un sólo punto para una gestión eficiente, usando
          niveles de seguridad avanzados y usando como vínculo de enlace la red
          Internet.
        </p>
        <p>
          Está pensado para una implementación rápida y eficiente, pudiéndose
          optar por incorporar soluciones de alta disponibilidad en el caso que la
          empresa lo requiera.
        </p>
        <p>
          El esquema de Concentradores y Puntos de Venta inteligente le permite
          ante un fallo o imprevisto, tanto de la central como de uno o más
          puntos de venta en particular, seguir procesando sus datos y una vez
          establecida la conectividad, en forma inteligente, realizar el
          intercambio de novedades y actualizar el componente que así lo
          requiera. Los diferentes enlaces Internet, satelitales, fibra óptica,
          no son una frontera para la operatoria diaria de nuestra solución.
        </p>
        <p>
          El bajo costo de licenciamiento "inicial" y la estabilidad de la
          infraestructura tecnológica de software (Linux, Java, Oracle), nos
          posicionan en un lugar privilegiado a la hora de realizar el Startup
          en el segmento de "Retail" de la industria.
        </p>

        <div className={styles.listas}>
          <div className={styles.li}>
            <div className={styles.titulo}>
              <label className={styles.alcance}>
                Alcance funcional de los módulos
              </label>
            </div>
            <div className={styles.imagenArduino}>
              <img width={210} src={analisis} />
            </div>
          
            <p>
      
              <ul>      <p  className={styles.subtitulo}>
                Puntos de Venta
              </p>
                <li>Facturación en Punto de Venta</li>
                <li>Proveedores en Punto de Venta</li>
                <li>Manejo de lista de precios</li>
                <li>Manejo de tarjetas de pago</li>
                <li>Ventas en multimoneda</li>
                <li>Cambio de turnos</li>
                <li>Retiros/Cierres de caja</li>
                <li>Stock en locales</li>
                <li>Envío de mercaderías entre locales</li>
                <li>Inventario en tiempo real</li>
                <li>Manejo impresora fiscal</li>
                <li>Ventas por promociones</li>
              </ul>
         
              <ul>
                       <p  className={styles.subtitulo}>
                Administración Central
              </p>
                <li>Administración de locales</li>
                <li>Administración de empleados</li>
                <li>Administración de cajas</li>
                <li>Administración de mercaderías</li>
                <li>Administración de promociones</li>
                <li>Manejo de listas de precios</li>
                <li>Administración de promociones</li>
                <li>Reportes de gestión</li>
                <li>Monitoreo vía Internet de operatoria</li>
                <li>Administración de monedas</li>
                <li>Seguridad de usuario</li>
              </ul>
              
              <p className={styles.subtitulo}>
                Reportes de gestión
              </p>
              <p>
                Posibilidad de explotación de datos vía Damarts de ventas,
                compras, stocks, tomando como dimensiones tiempo, lugar de
                venta, línea de productos, etc.
              </p>
            </p>
          </div>

          <div className={styles.li}>
            <div className={styles.titulo}>
              <label className={styles.valoragregado}>
                Valor agregado del Punto de Venta
              </label>
            </div>
            <div>
              <img width={210} src={valor} />
            </div>
            <div>
            <p className={styles.subtitulo}>
              Integración con QWGestión (ERP)
            </p>
            <p>
              En el caso que su empresa necesite manejar el proceso de compras,
              cobranzas y pagos con sus Clientes/Proveedores, podrá optar con
              complementar QWPos con QWGestión, un ERP basado en la misma
              tecnología que abarca el ciclo comercial de su empresa.
            </p>

            <p  className={styles.subtitulo}>
              Business Intelligence Integrado
            </p>
            <p>
              Podrá incorporar herramientas del tipo OLAP a fin de obtener
              reportes del tipo sumarizados y consultas Adhoc.
            </p>
            <p  className={styles.subtitulo}>
              Trazabilidad
            </p>
            <p>
              Todos las operaciones pueden ser trazadas por el módulo de
              "Trazabilidad", que permite conocer todas las operaciones en detalle.
            </p>
            <p  className={styles.subtitulo}>
              "POINT OF SALE" bajo tecnología
            </p>
            </div>
          
          </div>
          <div className={styles.li}>
            <div className={styles.titulo}>
              <label className={styles.infractura}>
                Infraestructura <br></br>Tecnológica
              </label>
            </div>

            <div>
              <img src={infractura} width={210} />
            </div>
    <div>
    <p  className={styles.subtitulo}>
              Requerimientos Mínimos
            </p>
            <p>
            Requiere un mínimo de hardware y prácticamente cero licenciamiento.
            </p>

            <p  className={styles.subtitulo}>
              Licenciamiento
            </p>
            <p>
            Tanto los puntos de venta como el módulo de administración Central, son LIBRES DE LICENCIAMIENTO. Su corazón esta montado sobre el lenguaje más popular de Internet JAVA y su certificación sobre LINUX ha sido probada en más de tres versiones de este popular sistema operativo.
        
            </p>
            <p  className={styles.subtitulo}>
              Bases de Datos
            </p>
            <p>
            Posibilidad de correr sobre Oracle Database Express Edition/Standard Edition/Enterprise Edition, para los Puntos de venta o la administración central.
            </p>
            <p  className={styles.subtitulo}>
              Accesos Locales/Remotos
            </p>
            <p>
            Certificado sobre ambientes LAN/MAN/WAN, sin limites geográficos para la conectividad.
            </p>
            <p className={styles.subtitulo}>
              Seguridad en la transmisión de datos
            </p>
            <p>
            La transmisión de datos esta basada en encriptamiento asimétrico, combinada con algoritmos de HASH para el control de integridad de datos.
            </p>
    </div>
           
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
