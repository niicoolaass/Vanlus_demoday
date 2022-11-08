import {Routes,Route} from 'react-router-dom'
import Home from './Paginas/Home/Home.js'
import Login from './Paginas/LoginResp/Login.js';

function App () {

    return(
        <>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/Login' element={<Login />}/>
            </Routes>
        </>
    )
}

export default App;         