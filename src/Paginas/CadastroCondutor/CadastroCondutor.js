
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './CadastroCondutor.css';
import  DadosCondutor1  from "./components/Cadastro1/DadosCondutor1"
import  DadosCondutor2  from "./components/Cadastro2/DadosCondutor2"
import  DadosCondutor3  from "./components/Cadastro3/DadosCondutor3"
import  DadosCondutor4  from "./components/Cadastro4/DadosCondutor4"
import  DadosCondutor5  from "./components/Cadastro5/DadosCondutor5"
import  DadosCondutor6  from "./components/Cadastro6/DadosCondutor6"


function CadastroCondutor () {

    return(

        <> 
            <div id="CadastroCondutor">
                <DadosCondutor1 />
            </div>  
        </>


    )
}

export default CadastroCondutor;