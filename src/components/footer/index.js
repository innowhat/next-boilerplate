import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="#" target="_blank" rel="noopener noreferrer">
        Powered by{" "}
        <img src="/logo.svg" alt="Logo" className={styles.logo} width="100px" />
      </a>
    </footer>
  );
};

export default Footer;
