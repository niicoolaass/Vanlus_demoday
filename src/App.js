import { PrimeiroConteudo } from "./components/First-content";
import { Footer } from "./components/Footer";
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
        <Footer />
    </> 
  );
}

export default App;
