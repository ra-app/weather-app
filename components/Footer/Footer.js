import styles from "./Footer.module.scss";

const footer = props => {
  return (
    <footer className={styles["footer"]}>
      <div className="container-fluid">
        SmartSolar App by <a href="https://devcups.com/">Saber Maram</a>
      </div>
    </footer>
  );
};

export default footer;
