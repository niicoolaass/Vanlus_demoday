import { PrimeiroConteudo } from "./components/First-content";
import { Header } from "./components/Header";
import { SegundoConteudo } from "./components/Second-content";
import "./styles/style.css";

function App() {
  return (
    <>
      <header>
        <Header /> 
      </header>
      <main>
        <PrimeiroConteudo />
        <SegundoConteudo />
      </main>
    </> 
  );
}

export default App;
