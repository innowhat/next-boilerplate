import styles from "./nav.module.css";
import Link from "next/link";

const Nav = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <nav className={styles.site_navbar}>
        <a href="#home" className={styles.site_logo}>
          logo
        </a>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/gallery">
              <a>Gallery</a>
            </Link>
          </li>
        </ul>

        <button className={styles.nav_toggler}>
          <span></span>
        </button>
      </nav>
    </div>
  );
};

export default Nav;
