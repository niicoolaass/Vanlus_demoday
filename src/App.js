import { Routes,Route} from 'react-router-dom';
import Home from './Paginas/Home/Home.js';
import Login from './Paginas/Login/Login.js';
import CadastroCondutor from './Paginas/CadastroCondutor/CadastroCondutor.js';
import  DadosCondutor1  from "./Paginas/CadastroCondutor/components/Cadastro1/DadosCondutor1"
import  DadosCondutor2  from "./Paginas/CadastroCondutor/components/Cadastro2/DadosCondutor2"
import  DadosCondutor3  from "./Paginas/CadastroCondutor/components/Cadastro3/DadosCondutor3"
import  DadosCondutor4  from "./Paginas/CadastroCondutor/components/Cadastro4/DadosCondutor4"
import  DadosCondutor5  from "./Paginas/CadastroCondutor/components/Cadastro5/DadosCondutor5"
import  DadosCondutor6  from "./Paginas/CadastroCondutor/components/Cadastro6/DadosCondutor6"


function App () {

    return(
        <>
        
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/Login' element={<Login />}/>
                <Route path='CadastroConduto' element={<CadastroCondutor />}>
                    <Route  path='./cadastro1' element={<DadosCondutor1 />}/>
                    <Route  path='./cadastro2' element={<DadosCondutor2 />}/>
                    <Route  path='./cadastro3' element={<DadosCondutor3 />}/>
                    <Route  path='./cadastro4' element={<DadosCondutor4 />}/>
                    <Route  path='./cadastro5' element={<DadosCondutor5 />}/>
                    <Route  path='./cadastro6' element={<DadosCondutor6 />}/>
                </Route>
            </Routes>
            
        </>
    )
}

export default App;         