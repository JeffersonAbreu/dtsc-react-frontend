import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import AppContext from "./components/AppContext";
import Leiaute from './pages/leiaute';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import NotFound from './pages/NotFound';
// Alunos
import ListagemAluno from './pages/tutors/Listagem';
// import CadastroAluno from './pages/alunos/Cadastro';
// import AlteracaoAluno from './pages/alunos/Alteracao';
// import ExclusaoAluno from './pages/ufs/Exclusao';
// UF
import ListagemUF from './pages/ufs/Listagem';
import CadastroUF from './pages/ufs/Cadastro';
import AlteracaoUF from './pages/ufs/Alteracao';
import ExclusaoUF from './pages/ufs/Exclusao';
// Instrutor
import ListagemInstrutor from './pages/instrutores/Listagem';
import CadastroInstrutor from './pages/instrutores/Cadastro';
import AlteracaoInstrutor from './pages/instrutores/Alteracao';
import ExclusaoInstrutor from './pages/instrutores/Exclusao';


const App = () => {
  const [tema, setTema] = useState("light");

  return (
    <div data-bs-theme={tema}>
      <AppContext.Provider value={{ tema, setTema }}>
        <Router>
          <Routes>
            <Route path="/" element={<Leiaute />}>
              <Route index element={<Home />} />
              <Route path="sobre" element={<Sobre />} />
              <Route path="tutors">
                <Route index element={<ListagemAluno />} />
                {/* <Route path="cadastrar" element={<CadastroAluno />} />
                <Route path="alterar/:id" element={<AlteracaoAluno />} />
                <Route path="excluir/:id" element={<ExclusaoAluno />} /> */}
              </Route>
              <Route path="ufs">
                <Route index element={<ListagemUF />} />
                <Route path="cadastrar" element={<CadastroUF />} />
                <Route path="alterar/:id" element={<AlteracaoUF />} />
                <Route path="excluir/:id" element={<ExclusaoUF />} />
              </Route>
              <Route path="instrutores">
                <Route index element={<ListagemInstrutor />} />
                <Route path="cadastrar" element={<CadastroInstrutor />} />
                <Route path="alterar/:id" element={<AlteracaoInstrutor />} />
                <Route path="excluir/:id" element={<ExclusaoInstrutor />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  )
}

export default App;