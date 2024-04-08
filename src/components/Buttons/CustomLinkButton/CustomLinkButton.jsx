import Link from "next/link";
import classes from "./link.button.module.css";

const CustomLinkButton = ({
  href,
  className,
  children,
  black,
  ...otherProps
}) => {
  const styles = `${classes.button} ${
    black ? classes.black : classes.white
  } ${className}`;
  return (
    <Link href={href} className={styles} {...otherProps}>
      {children}
    </Link>
  );
};

export default CustomLinkButton;
