import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <article>
        <img src="https://picsum.photos/600/400" alt="Sample photo" />
        <div className={styles.text}>
          <h3>Labore exercitation ut consequat sunt non ex.</h3>
          <p>
            veniam proident. Consectetur qui nulla culpa ex id anim in excepteur
            amet excepteur elit pariatur.
          </p>
          <button href="#">Here's why</button>
        </div>
      </article>
      <article>
        <img src="https://picsum.photos/600/400" alt="Sample photo" />
        <div className={styles.text}>
          <h3>Labore exercitation ut consequat sunt non ex.</h3>
          <p>
            veniam proident. Consectetur qui nulla culpa ex id anim in excepteur
            amet excepteur elit pariatur.
          </p>
          <button href="#">Here's why</button>
        </div>
      </article>{" "}
      <article>
        <img src="https://picsum.photos/600/400" alt="Sample photo" />
        <div className={styles.text}>
          <h3>Labore exercitation ut consequat sunt non ex.</h3>
          <p>
            veniam proident. Consectetur qui nulla culpa ex id anim in excepteur
            amet excepteur elit pariatur.
          </p>
          <button href="#">Here's why</button>
        </div>
      </article>{" "}
      <article>
        <img src="https://picsum.photos/600/400" alt="Sample photo" />
        <div className={styles.text}>
          <h3>Labore exercitation ut consequat sunt non ex.</h3>
          <p>
            veniam proident. Consectetur qui nulla culpa ex id anim in excepteur
            amet excepteur elit pariatur.
          </p>
          <button href="#">Here's why</button>
        </div>
      </article>{" "}
    </div>
  );
};

export default Card;
