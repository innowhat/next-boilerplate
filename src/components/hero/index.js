import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroCover}>
      <div className={styles.heroContent}>
        <h1>I am Tito O</h1>
        <p>And I'm a Frontend Developer</p>
        <button>Hit me up !</button>
      </div>
    </div>
  );
};

export default Hero;
