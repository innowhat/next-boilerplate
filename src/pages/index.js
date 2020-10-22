import Card from "../components/card";
import Hero from "../components/hero";
import Layout from "../components/layout";
import styles from "../styles/page.module.css";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <section className={styles.container}>
        <h1>CSS Grid Template</h1>
        <Card />
      </section>
      <section className={styles.container_small}>
        <h1 className={styles.title}>Small container content</h1>
        <p>
          Ex do labore exercitation ut consequat sunt non ex. Labore ex amet
          nisi in consectetur quis elit nulla ex incididunt minim ad eiusmod ad.
          Enim adipisicing incididunt officia pariatur ullamco adipisicing
          cupidatat minim incididunt cillum ipsum. Laboris et veniam non in esse
          minim magna nulla excepteur cupidatat consequat consequat. Officia
          quis nostrud consequat esse ex incididunt velit commodo velit et
          aliquip. Lorem id mollit do nisi amet proident dolore amet ut do culpa
          veniam proident. Consectetur qui nulla culpa ex id anim in excepteur
          amet excepteur elit pariatur. Eiusmod quis nisi aliqua irure dolore
          esse. Amet sint aliqua adipisicing pariatur excepteur dolor eu et
          proident elit culpa nulla. Tempor laborum officia incididunt sunt
          culpa culpa irure velit. Non minim cupidatat nostrud ipsum non velit
          quis nulla aute proident esse dolor ullamco nisi. Labore laborum ea et
          nisi veniam minim ut minim ut. Veniam excepteur excepteur eu proident.
          Ad dolore anim duis dolor velit id duis est id deserunt incididunt
          excepteur cupidatat aliquip. Ea sit duis ullamco veniam fugiat
          exercitation voluptate aute dolor do. Consequat culpa ad amet
          consectetur commodo laborum nulla cillum irure duis proident ipsum.
          occaecat.
        </p>
      </section>
      <section className={styles.container}>
        <h1 className={styles.title}>Default container content</h1>
        <p>
          Ex do labore exercitation ut consequat sunt non ex. Labore ex amet
          nisi in consectetur quis elit nulla ex incididunt minim ad eiusmod ad.
          Enim adipisicing incididunt officia pariatur ullamco adipisicing
          cupidatat minim incididunt cillum ipsum. Laboris et veniam non in esse
          minim magna nulla excepteur cupidatat consequat consequat. Officia
          quis nostrud consequat esse ex incididunt velit commodo velit et
          aliquip. Lorem id mollit do nisi amet proident dolore amet ut do culpa
          veniam proident. Consectetur qui nulla culpa ex id anim in excepteur
          amet excepteur elit pariatur. Eiusmod quis nisi aliqua irure dolore
          esse. Amet sint aliqua adipisicing pariatur excepteur dolor eu et
          proident elit culpa nulla. Tempor laborum officia incididunt sunt
          culpa culpa irure velit. Non minim cupidatat nostrud ipsum non velit
          quis nulla aute proident esse dolor ullamco nisi. Labore laborum ea et
          nisi veniam minim ut minim ut. Veniam excepteur excepteur eu proident.
          Ad dolore anim duis dolor velit id duis est id deserunt incididunt
          excepteur cupidatat aliquip. Ea sit duis ullamco veniam fugiat
          exercitation voluptate aute dolor do. Consequat culpa ad amet
          consectetur commodo laborum nulla cillum irure duis proident ipsum.
          occaecat.
        </p>
      </section>
      <section className={styles.container_large}>
        <h1 className={styles.title}>Large container content</h1>
        <p>
          Ex do labore exercitation ut consequat sunt non ex. Labore ex amet
          nisi in consectetur quis elit nulla ex incididunt minim ad eiusmod ad.
          Enim adipisicing incididunt officia pariatur ullamco adipisicing
          cupidatat minim incididunt cillum ipsum. Laboris et veniam non in esse
          minim magna nulla excepteur cupidatat consequat consequat. Officia
          quis nostrud consequat esse ex incididunt velit commodo velit et
          aliquip. Lorem id mollit do nisi amet proident dolore amet ut do culpa
          veniam proident. Consectetur qui nulla culpa ex id anim in excepteur
          amet excepteur elit pariatur. Eiusmod quis nisi aliqua irure dolore
          esse. Amet sint aliqua adipisicing pariatur excepteur dolor eu et
          proident elit culpa nulla. Tempor laborum officia incididunt sunt
          culpa culpa irure velit. Non minim cupidatat nostrud ipsum non velit
          quis nulla aute proident esse dolor ullamco nisi. Labore laborum ea et
          nisi veniam minim ut minim ut. Veniam excepteur excepteur eu proident.
          Ad dolore anim duis dolor velit id duis est id deserunt incididunt
          excepteur cupidatat aliquip. Ea sit duis ullamco veniam fugiat
          exercitation voluptate aute dolor do. Consequat culpa ad amet
          consectetur commodo laborum nulla cillum irure duis proident ipsum.
          occaecat.
        </p>
      </section>
    </Layout>
  );
}
