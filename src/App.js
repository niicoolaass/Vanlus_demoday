import {Routes,Route} from 'react-router-dom'
import Home from './Paginas/Home/Home.js'
import Login from './Paginas/Login/Login.js';
import CadastroCondutor from './Paginas/CadastroCondutor/CadastroCondutor.js';

function App () {

    return(
        <>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/Login' element={<Login />}/>
                <Route path='/CadastroCondutor' element={<CadastroCondutor />}/>
            </Routes>
        </>
    )
}

export default App;         