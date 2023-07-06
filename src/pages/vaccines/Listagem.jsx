import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import estilos from "./Listagem.module.css"
import http from "../../lib/consts";


const Listagem = () => {
  const [vaccines, setVaccines] = useState([]);
  const [loading, setLoading] = useState(true);




  const carregarVacinas = () => {
    http
      .get("/vacinas")
      .then((resp) => {
        setVaccines(resp.data);
        setLoading(false);
        console.log(resp.data)
      });
  }

  useEffect(() => {
    carregarVacinas();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Listagem de Vacinas</h1>
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
              <th>Nome da Vacina</th>
              <th>Intervalo em dias</th>
              <th>Raças Restritas</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              vaccines.map((vaccine) =>
                <tr key={vaccine.id}>
                  <td>{vaccine.id}</td>
                  <td>{vaccine.name}</td>
                  <td>{vaccine.dosage_interval_days}</td>
                  <td>{vaccine.breeds[0]?.name}</td>
                  <td>
                    <Link className="btn btn-sm btn-success me-1" to={`/vaccines/alterar/${vaccine.id}`}>
                      <i className="bi bi-pen" title="Alterar"></i>
                    </Link>
                    <Link className="btn btn-sm btn-danger" to={`/vaccines/excluir/${vaccine.id}`}>
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