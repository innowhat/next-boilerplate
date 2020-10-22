import styles from "./card.module.css";

const Card = ({ data, error }) => {
  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  const [cards, setCards] = React.useState(null);

  React.useEffect(() => {
    setCards(data);
  }, []);

  return (
    <div className={styles.card}>
      {cards &&
        cards.map((card) => (
          <article key={card.id}>
            <img src={card.url} alt="Sample photo" />
            <div className={styles.text}>
              <h3>{card.title}</h3>
              <p>
                veniam proident. Consectetur qui nulla culpa ex id anim in
                excepteur amet excepteur elit pariatur.
              </p>
              <button href="#">Here's why</button>
            </div>
          </article>
        ))}
    </div>
  );
};

export default Card;
