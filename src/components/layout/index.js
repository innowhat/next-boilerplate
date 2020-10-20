import Head from "next/head";
import Footer from "../footer";
import Header from "../header";
import styles from "./layout.module.css";

const Layout = ({ children, title = "Next Boilerplate " }) => {
  return (
    <React.Fragment>
      <Head>
        <title> {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
