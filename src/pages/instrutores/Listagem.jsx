import { Link } from "react-router-dom";
import estilos from "./Listagem.module.css";

const Listagem = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Listagem de Instrutores</h1>
        <Link className="btn btn-primary" to="cadastrar">Novo</Link>
      </div>
      <hr />
      <table className={`table table-striped ${estilos.tabela}`}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E - mail</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Instrutor 1</td>
            <td>instrutor1@email.com</td>
            <td><a href="/instrutores/alterar/1" className="btn btn-sm btn-secondary me-2">Alterar</a><a href="/instrutores/excluir/1" className="btn btn-sm btn-danger">Excluir</a></td>
          </tr>
          <tr>
            <td>Instrutor 2</td>
            <td>instrutor2@email.com</td>
            <td><a href="/instrutores/alterar/2" className="btn btn-sm btn-secondary me-2">Alterar</a><a href="/instrutores/excluir/2" className="btn btn-sm btn-danger">Excluir</a></td>
          </tr>
          <tr>
            <td>Instrutor 3</td>
            <td>instrutor3@email.com</td>
            <td><a href="/instrutores/alterar/3" className="btn btn-sm btn-secondary me-2">Alterar</a><a href="/instrutores/excluir/3" className="btn btn-sm btn-danger">Excluir</a></td>
          </tr>
          <tr>
            <td>Instrutor 4</td>
            <td>instrutor4@email.com</td>
            <td><a href="/instrutores/alterar/4" className="btn btn-sm btn-secondary me-2">Alterar</a><a href="/instrutores/excluir/4" className="btn btn-sm btn-danger">Excluir</a></td>
          </tr>
          <tr>
            <td>Instrutor 5</td>
            <td>instrutor5@email.com</td>
            <td><a href="/instrutores/alterar/5" className="btn btn-sm btn-secondary me-2">Alterar</a><a href="/instrutores/excluir/5" className="btn btn-sm btn-danger">Excluir</a></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Listagem;