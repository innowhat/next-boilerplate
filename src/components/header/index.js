import styles from "./header.module.css";
import page_styles from "../../styles/page.module.css";
import Nav from "./nav";

const Header = () => {
  return (
    <header className={styles.header}>
      <section className={page_styles.container}>
        <Nav />
      </section>
    </header>
  );
};

export default Header;
