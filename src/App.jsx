import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import AppContext from "./components/AppContext";
import Leiaute from './pages/Leiaute';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import NotFound from './pages/NotFound';
// UF
import ListagemUF from './pages/ufs/Listagem';
import CadastroUF from './pages/ufs/Cadastro';
import AlteracaoUF from './pages/ufs/Alteracao';
import ExclusaoUF from './pages/ufs/Exclusao';
//Cidade
import ListagemCity from './pages/cities/Listagem';
import CadastroCity from './pages/cities/Cadastro';
import AlteracaoCity from './pages/cities/Alteracao';
import ExclusaoCity from './pages/cities/Exclusao';
//DISTRICT
import ListagemDistrict from './pages/districts/Listagem';
import CadastroDistrict from './pages/districts/Cadastro';
import ExclusaoDistrict from './pages/districts/Exclusao';
import AlteracaoDistrict from './pages/districts/Alteracao';
//Funcionários
import ListagemEmployee from './pages/employees/Listagem';
//Tutor
import ListagemTutor from './pages/tutors/Listagem';
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
                <Route index element={<ListagemTutor />} />
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
              <Route path="cities">
                <Route index element={<ListagemCity />} />
                <Route path="cadastrar" element={<CadastroCity />} />
                <Route path="alterar/:id" element={<AlteracaoCity />} />
                <Route path="excluir/:id" element={<ExclusaoCity />} />
              </Route>
              <Route path="districts">
                <Route index element={<ListagemDistrict />} />
                <Route path="cadastrar" element={<CadastroDistrict />} />
                <Route path="excluir/:id" element={<ExclusaoDistrict />} />
                <Route path="alterar/:id" element={<AlteracaoDistrict />} />
              </Route>
              <Route path="employees">
                <Route index element={<ListagemEmployee />} />
                <Route path="cadastrar" element={<CadastroDistrict />} />
                <Route path="excluir/:id" element={<ExclusaoDistrict />} />
                <Route path="alterar/:id" element={<AlteracaoDistrict />} />
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