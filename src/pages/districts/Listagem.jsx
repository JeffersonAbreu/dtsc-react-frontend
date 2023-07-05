import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import estilos from "./Listagem.module.css"
import http from "../../lib/consts";

const Listagem = () => {
  const [districts, setDistricts] = useState([]);
  const [loading, setLoading] = useState(true);


  const carregarBairros = () => {
    http
      .get("/district")
      .then((resp) => {
        setDistricts(resp.data);
        setLoading(false);
      });
  }

  useEffect(() => {
    carregarBairros();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Listagem de Bairros</h1>
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
              <th>Nome do bairro</th>
              <th>Nome da cidade</th>
              <th>UF</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              districts.map((district) =>
                <tr key={district.id}>
                  <td>{district.id}</td>
                  <td>{district.name}</td>
                  <td>{district.city.name}</td>
                  <td>{district.city.uf.sigla}</td>
                  <td>
                    <Link className="btn btn-sm btn-success me-1" to={`/districts/alterar/${district.id}`}>
                      <i className="bi bi-pen" title="Alterar"></i>
                    </Link>
                    <Link className="btn btn-sm btn-danger" to={`/districts/excluir/${district.id}`}>
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