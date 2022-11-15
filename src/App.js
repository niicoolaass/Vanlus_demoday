import { Routes,Route} from 'react-router-dom';
import Home from './Paginas/Home/Home.js';
import Login from './Paginas/Login/Login.js';
import DadosCondutor1 from './Paginas/CadastroCondutor/components/Cadastro1/DadosCondutor1.js';
import { Cadastro } from './Paginas/Cadastro/Cadastro.js';

function App () {

    return(
        <>
        
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/Login' element={<Login />}/>
                <Route path='/CadastroCondutor' element={<DadosCondutor1 />}/>
                <Route path='/Cadastro' element={<Cadastro />}/>
            </Routes>
            
        </>
    )
}

export default App;         