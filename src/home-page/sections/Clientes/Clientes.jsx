import classes from "./clientes.module.css";
import { ClientesLogos } from "./Logos";

const Clientes = () => {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  return (
    <section
      style={{ backgroundColor: "#fff", paddingTop: 100, paddingBottom: 100 }}
    >
      <h3 className="c-primary gpl gpr fs-3 mb-2 text-align-center">
        ¿Quienes nos eligen?
      </h3>
      <div className="w-100 o-hidden mt-2">
        <div className={`${classes.logos} flex`}>
          <ClientesLogos />
          <ClientesLogos />
        </div>
      </div>
      <div className={`${classes.text_box} c-gray gpl gpr`}>
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
