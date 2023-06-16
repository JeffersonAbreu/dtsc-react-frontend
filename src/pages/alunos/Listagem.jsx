import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import estilos from "./Listagem.module.css"
import axios from "axios";

const Listagem = () => {
  const [alunos, setAlunos] = useState([]);
  const [loading, setLoading] = useState(true);

  const carregarAlunos = () => {
    axios
      .get("http://localhost:3001/alunos")
      .then((resp) => {
        setAlunos(resp.data);
        setLoading(false);
      });
  }

  useEffect(() => {
    carregarAlunos();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Listagem de Alunos</h1>
        <Link className="btn btn-primary" to="cadastrar">Novo</Link>
      </div>
      <hr />
      {loading &&
        (<div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Carregando...</span>
          </div>
        </div>)}
      {!loading && (
        <table className={`table table-striped ${estilos.tabela}`}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Telefone</th>
              <th>Mensalidade</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              alunos.map((aluno) =>
                <tr key={aluno.id}>
                  <td>{aluno.id}</td>
                  <td>{aluno.nome}</td>
                  <td>{aluno.email}</td>
                  <td>{aluno.telefone}</td>
                  <td>{aluno.mensalidade}</td>
                  <td>
                    <Link className="btn btn-sm btn-success me-1" to={`/alunos/alterar/${aluno.id}`}>
                      <i className="bi bi-pen" title="Alterar"></i>
                    </Link>
                    <Link className="btn btn-sm btn-danger" to={`/alunos/excluir/${aluno.id}`}>
                      <i className="bi bi-trash" title="Excluir"></i>
                    </Link>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      )}
    </>
  )
}

export default Listagem;