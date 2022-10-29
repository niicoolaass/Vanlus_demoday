import { PrimeiroConteudo } from "./components/First-content";
import { Header } from "./components/Header";
import "./styles/style.css";

function App() {
  return (
    <>
      <header>
        <Header /> 
      </header>
      <main>
        <PrimeiroConteudo />
        <PrimeiroConteudo />
        <PrimeiroConteudo />
        <PrimeiroConteudo />
      </main>
      <footer>
        <p>akjshkjahskajhskjahs</p>
      </footer> 
    </> 
  );
}

export default App;
