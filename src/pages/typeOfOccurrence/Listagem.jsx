import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import estilos from "./Listagem.module.css"
import http from "../../lib/consts";
/**const typeofoccurrence4 = await TypeOfOccurrence.create({
            name: "Atropelamento",
            severity: 0.9,
            aggressor: false
        }) */
const Listagem = () => {
  const [typeOfOccurrences, setTypeOfOccurrence] = useState([]);
  const [loading, setLoading] = useState(true);


  const carregarTipos = () => {
    http
      .get("/tipos")
      .then((resp) => {
        setTypeOfOccurrence(resp.data);
        setLoading(false);
      });
  }

  useEffect(() => {
    carregarTipos();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Listagem de Tipos de Ocorrência</h1>
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
              <th>Nome do tipo de Ocorrência</th>
              <th>Gravidade</th>
              <th>O cão foi o agressor ?</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              typeOfOccurrences.map((typeOfOccurrence) =>
                <tr key={typeOfOccurrence.id}>
                  <td>{typeOfOccurrence.id}</td>
                  <td>{typeOfOccurrence.name}</td>
                  <td>{typeOfOccurrence.severity}</td>
                  <td>{` ${typeOfOccurrence.aggressor ? `Sim`  : `Não`}`}</td>
                  <td>
                    <Link className="btn btn-sm btn-success me-1" to={`/typeOfOccurrence/alterar/${typeOfOccurrence.id}`}>
                      <i className="bi bi-pen" title="Alterar"></i>
                    </Link>
                    <Link className="btn btn-sm btn-danger" to={`/typeOfOccurrence/excluir/${typeOfOccurrence.id}`}>
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