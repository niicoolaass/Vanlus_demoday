import { Routes,Route} from 'react-router-dom';
import Home from './Paginas/Home/Home.js';
import Login from './Paginas/Login/Login.js';
import DadosCondutor1 from './Paginas/CadastroCondutor/components/Cadastro1/DadosCondutor1.js';
import DadosCondutor2 from './Paginas/CadastroCondutor/components/Cadastro2/DadosCondutor2';
import DadosCondutor3 from './Paginas/CadastroCondutor/components/Cadastro3/DadosCondutor3';
import DadosCondutor4 from './Paginas/CadastroCondutor/components/Cadastro4/DadosCondutor4';
import DadosCondutor5 from './Paginas/CadastroCondutor/components/Cadastro5/DadosCondutor5';
import DadosCondutor6 from './Paginas/CadastroCondutor/components/Cadastro6/DadosCondutor6';
import { Cadastro } from './Paginas/Cadastro/Cadastro.js';
import DadosResponsavel1 from './Paginas/CadastroResponsavel/Cadastro7/DadosResponsavel1';
import DadosResponsavel2 from './Paginas/CadastroResponsavel/Cadastro8/DadosResponsavel2';
import DadosResponsavel3 from './Paginas/CadastroResponsavel/Cadastro9/DadosResponsavel3';
import DadosResponsavel4 from './Paginas/CadastroResponsavel/Cadastro10/DadosResponsavel4';
import DadosResponsavel5 from './Paginas/CadastroResponsavel/Cadastro11/DadosResponsavel5';
import HomeResponsavel from './Paginas/HomeResponsavel/HomeResponsavel.js';
import SeuCondutor from './Paginas/SeuCondutor/SeuCondutor.js';
import Erro from './Paginas/Erro/Erro';
import Cartão from './Paginas/Pagamentos/Cartão/Cartão'

import HomeCondutor from './Paginas/HomeCondutor/HomeCondutor.js';
import Acompanhamento from './Paginas/Acompanhamento/Acompanhamento.js';
import Parceiro from './Paginas/Parceiros/Parceiro.js';
import ListaDePresenca from './Paginas/ListaDePresenca/ListaDePresenca'
import Rotas from './Paginas/Rotas/Rotas.js';
import RendaExtra from './Paginas/RendaExtra/RendaExtra.js';

function App () {

    return(
        <>
        
            <Routes>
                <Route path='/' element={<Home />}/>
                
                <Route path='/Login' element={<Login />}/>

                <Route path='/Cadastro' element={<Cadastro />}/>
                <Route path='/CadastroCondutor' element={<DadosCondutor1/>}/>
                <Route  path='/cadastro2' exact element={<DadosCondutor2 />}/>    
                <Route  path='/cadastro3' exact element={<DadosCondutor3 />}/>                   
                <Route  path='/cadastro4' exact element={<DadosCondutor4 />}/>                   
                <Route  path='/cadastro5' exact element={<DadosCondutor5 />}/>                   
                <Route  path='/cadastro6' exact element={<DadosCondutor6 />}/> 

                <Route path='/CadastroResponsavel' element={<DadosResponsavel1 />} />
                <Route path='/cadastro8' exact element={<DadosResponsavel2 />} />    
                <Route path='/cadastro9' exact element={<DadosResponsavel3 />} />
                <Route path='/cadastro10' exact element={<DadosResponsavel4 />} />
                <Route path='/cadastro11' exact element={<DadosResponsavel5 />} />

                <Route path='/responsavel/home' element={<HomeResponsavel/>}/>
                <Route path='/responsavel/acompanhamento' element={<Acompanhamento/>}/>
                <Route path='/responsavel/condutor' element={<SeuCondutor/>}/>
                <Route path='/responsavel/parceiro' element={<Parceiro/>}/>

                <Route path='/condutor/home' element={<HomeCondutor/>}/>
                <Route path='/condutor/rotas' element={<Rotas/>}/>
                <Route path='/condutor/listadepresenca' element={<ListaDePresenca/>}/>
                <Route path='/condutor/rendaextra' element={<RendaExtra/>}/>
                
                <Route path='*' element={<Erro/>}/>
    
                <Route path='/aa' element={<Cartão/>}/>
            </Routes>

        </>
    )
}

export default App;         