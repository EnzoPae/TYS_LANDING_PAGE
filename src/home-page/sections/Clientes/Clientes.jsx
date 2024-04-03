import classes from "./clientes.module.css";
import { ClientesLogos } from "./Logos";

const Clientes = () => {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  return (
    <section
      style={{ backgroundColor: "#fff", paddingTop: 100, paddingBottom: 100 }}
    >
      <h3
        className="color-secondary g-p-left g-p-right fs-3 mb-2"
        style={{ textAlign: "center" }}
      >
        ¿Quienes nos eligen?
      </h3>
      <div className="w-100 overflow-hidden mt-2">
        <div className={`${classes.logos} flex`}>
          <ClientesLogos />
          <ClientesLogos />
        </div>
      </div>
      <div className={`${classes.text_box} color-gray-dark g-p-left g-p-right`}>
        <p>{lorem}</p>
        <div className={classes.divider}></div>
        <p>{lorem}</p>
        <div className={classes.divider}></div>
        <p>{lorem}</p>
      </div>
    </section>
  );
};

export default Clientes;
