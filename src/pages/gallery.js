import { fetcher } from "../utils/fetcher";
import useSWR from "swr";
import Card from "../components/card";
import Layout from "../components/layout";
import styles from "../styles/page.module.css";

const Gallery = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/albums/1/photos",
    fetcher
  );

  return (
    <Layout>
      <section className={styles.container}>
        <Card data={data} error={error} />
      </section>
    </Layout>
  );
};

export default Gallery;
