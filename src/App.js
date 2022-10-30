import { PrimeiroConteudo } from "./components/First-content";
import { Header } from "./components/Header";
import { SegundoConteudo } from "./components/Second-content";
import { SobreNós } from "./components/Sobre-nos";

function App() {
  return (
    <>
        <Header /> 
        <PrimeiroConteudo />
        <SegundoConteudo />
        <SobreNós />
    </> 
  );
}

export default App;
