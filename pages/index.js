import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://lowcostweb.vercel.app/">Low Cost Web!</a>
      </h1>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2>Next JS Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://www.cypress.io/" className={styles.card}>
          <h2>Learn Cypress.io &rarr;</h2>
          <p>Learn about End to End testing with Cypress!</p>
        </a>

        <a
          href="https://tailwindcss.com/docs/guides/nextjs"
          className={styles.card}
        >
          <h2>Tailwind CSS &rarr;</h2>
          <p>Learn Tailwind CSS.</p>
        </a>

        <a
          href="https://github.com/sharechiwai/lowcostweb"
          className={styles.card}
        >
          <h2>GitHub &rarr;</h2>
          <p>GitHub repository.</p>
        </a>
      </div>
    </main>
  );
}
