import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import estilos from "./Listagem.module.css"
import axios from "axios";
import consts from "../../lib/consts";

const http = axios.create({
  baseURL: `${consts.API_URL}`
});
const Listagem = () => {
  const [ufs, setUfs] = useState([]);
  const [loading, setLoading] = useState(true);

  const carregarUfs = () => {
    http
      .get("/ufs")
      .then((resp) => {
        setUfs(resp.data);
        setLoading(false);
      });
  }

  useEffect(() => {
    carregarUfs();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Listagem de UFs</h1>
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
              <th>Sigla</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              ufs.map((uf) =>
                <tr key={uf.id}>
                  <td>{uf.id}</td>
                  <td>{uf.name}</td>
                  <td>{uf.sigla}</td>
                  <td>
                    <Link className="btn btn-sm btn-success me-1" to={`/ufs/alterar/${uf.id}`}>
                      <i className="bi bi-pen" title="Alterar"></i>
                    </Link>
                    <Link className="btn btn-sm btn-danger" to={`/ufs/excluir/${uf.id}`}>
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