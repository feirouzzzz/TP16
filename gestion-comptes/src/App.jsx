import appLogo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <main className="main-container">
      <section className="app-hero">
        <img src={appLogo} alt="React logo" className="brand-logo" />

        <p className="description">
          Modifie le fichier <code>src/App.js</code> puis sauvegarde pour voir les changements.
        </p>

        <a
          href="https://react.dev"
          className="primary-link"
          target="_blank"
          rel="noreferrer"
        >
          Découvrir React
        </a>
      </section>
    </main>
  );
};

export default App;
