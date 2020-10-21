import styles from "./header.module.css";
import page_styles from "../../styles/page.module.css";

const Header = ({ position = "fixed" }) => {
  return (
    <header className={styles.header} style={{ position: position }}>
      <section className={page_styles.container}>
        <h1>Header section</h1>
      </section>
    </header>
  );
};

export default Header;
