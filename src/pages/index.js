import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <section className={styles.container}>
        <h1 className={styles.title}>Hero Section</h1>
      </section>
      <section style={{ backgroundColor: "brown" }}>
        <h1 className={styles.title}>Feature Section</h1>
      </section>
      <section style={{ backgroundColor: "silver" }}>
        <h1 className={styles.title}>Feature Section</h1>
      </section>
    </Layout>
  );
}
