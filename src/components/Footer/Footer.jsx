import classes from "./footer.module.css";

const Footer = () => {
  const list = [
    {
      title: "Lorem Ipsum",
      items: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
    {
      title: "Lorem Ipsum",
      items: ["Lorem Ipsum", "Lorem Ipsum"],
    },
    {
      title: "Lorem Ipsum",
      items: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
    {
      title: "Lorem Ipsum",
      items: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
  ];
  return (
    <footer>
      <div className={`${classes.footer} bg-primary-light`}>
        {list.map((l, i) => (
          <div key={i}>
            <div className="mb-1 fw-semibold">{l.title}</div>
            <ul className="fs-0-8">
              {l.items.map((d, i) => (
                <li key={i} className="pointer">
                  Lorem Ipsum
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="bg-primary flex justify-content-center">
        <span className="mt-1 mb-1">2024 Terminales y Servicios</span>
      </div>
    </footer>
  );
};

export default Footer;
