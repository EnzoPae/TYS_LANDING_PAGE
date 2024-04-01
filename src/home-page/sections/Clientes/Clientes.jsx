import classes from "./clientes.module.css";
import { ClientesLogos } from "./Logos";

const Clientes = () => {
  return (
    <section
      style={{ backgroundColor: "#fff", paddingTop: 100, paddingBottom: 100 }}
    >
      <div className="g-p-left g-p-right flex justify-content-center">
        <div className={`${classes.hero} flex`}>
          <h3 className="color-secondary fs-3">¿Por qué elegirnos?</h3>
          <p className="color-gray-dark">
            La calidad es el distintivo de nuestro enfoque. Desde la concepción
            de nuestras ideas hasta la entrega final, cada paso de nuestro
            proceso se realiza con una atención meticulosa a los detalles.
            Nuestro equipo de profesionales altamente capacitados trabaja
            incansablemente para garantizar que cada producto/servicio no solo
            cumpla, sino que supere las expectativas más exigentes.
          </p>
        </div>
      </div>
      <div className="w-100 overflow-hidden">
        <div className={`${classes.logos} flex`}>
          <ClientesLogos />
          <ClientesLogos />
        </div>
      </div>
    </section>
  );
};

export default Clientes;
