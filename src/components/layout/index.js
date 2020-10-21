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
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
