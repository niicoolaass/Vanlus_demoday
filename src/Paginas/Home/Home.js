import { PrimeiroConteudo } from "./components/First-content/FirstContent.js";
import { Footer } from "./components/Footer/Footer.js";
import { Header } from "./components/Header/Header.js";
import { SegundoConteudo } from "./components/Second-content/SecondContent.js";
import { SobreNós } from "./components/Sobre-nos/SobreNos.js";
import { TerceiroConteudo } from "./components/Third-content/ThirdContent.js";



function Home() {
  

  return (
    <>
        <Header /> 
        <PrimeiroConteudo />
        <SegundoConteudo />
        <TerceiroConteudo/>
        <SobreNós />
        <Footer /> 
    </> 
  );
}

export default Home;
