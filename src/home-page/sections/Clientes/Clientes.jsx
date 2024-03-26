import "./clientes.css";
import { ClientesLogos } from "./Logos";

const Clientes = () => {
  return (
    <section className="clientes-section">
      <div className="clientes-hero-container global-padding">
        <div className="clientes-hero">
          <h3>¿Por qué elegirnos?</h3>
          <p>
            La calidad es el distintivo de nuestro enfoque. Desde la concepción
            de nuestras ideas hasta la entrega final, cada paso de nuestro
            proceso se realiza con una atención meticulosa a los detalles.
            Nuestro equipo de profesionales altamente capacitados trabaja
            incansablemente para garantizar que cada producto/servicio no solo
            cumpla, sino que supere las expectativas más exigentes.
          </p>
        </div>
      </div>
      <div className="clientes-banner-container">
        <div className="clientes-banner">
          <div className="clientes-logos">
            <ClientesLogos />
            <ClientesLogos />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clientes;
