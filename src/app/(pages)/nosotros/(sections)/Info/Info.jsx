import classes from "./info.module.css";

const Info = () => {
  return (
    <section className="gpl gpr pb-3 pt-3">
      <p className="fs-1-5 fw-semibold">
        Nuestra <strong className="c-primary">estrategia</strong> es contribuir
        al desarrollo sostenible mediante eficiencia y responsabilidad social.
      </p>
      <div className={`${classes.wrapper} mt-3`}>
        <article className={classes.article}>
          <header className="fs-1-2 fw-semibold">
            Sed ut perspiciatis unde omnis iste natus error sit
          </header>
          <p>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
          </p>
        </article>
        <article className={classes.article}>
          <header className="fs-1-2 fw-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </header>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </article>
        <article className={classes.article}>
          <header className="fs-1-2 fw-semibold">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium
          </header>
          <p>Excepteur sint occaecat cupidatat non proident</p>
        </article>
      </div>
    </section>
  );
};

export default Info;
