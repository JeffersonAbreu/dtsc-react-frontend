import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import estilos from "./Listagem.module.css"
import http from "../../lib/consts";


const Listagem = () => {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);




  const carregarRacas = () => {
    http
      .get("/breeds")
      .then((resp) => {
        setBreeds(resp.data);
        setLoading(false);
      });
  }

  useEffect(() => {
    carregarRacas();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Listagem de Raças</h1>
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
              <th>Nome da raça</th>
              <th>Porte</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              breeds.map((breed) =>
                <tr key={breed.id}>
                  <td>{breed.id}</td>
                  <td>{breed.name}</td>
                  <td>{breed.dogSize.name}</td>
                  <td>
                    <Link className="btn btn-sm btn-success me-1" to={`/breeds/alterar/${breed.id}`}>
                      <i className="bi bi-pen" title="Alterar"></i>
                    </Link>
                    <Link className="btn btn-sm btn-danger" to={`/breeds/excluir/${breed.id}`}>
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