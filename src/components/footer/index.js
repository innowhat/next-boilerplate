import styles from "./footer.module.css";
import page_styles from "../../styles/page.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={page_styles.container}>
        <h1>Footer section</h1>
      </section>
    </footer>
  );
};

export default Footer;
