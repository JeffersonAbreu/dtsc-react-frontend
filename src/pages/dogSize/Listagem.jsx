import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import estilos from "./Listagem.module.css"
import http from "../../lib/consts";
/**const dogsize2 = await DogSize.create({
            name: "pequeno",
            occupied_size: "15"
        }) */
const Listagem = () => {
  const [dogsizes, setDogSize] = useState([]);
  const [loading, setLoading] = useState(true);


  const carregarPortes = () => {
    http
      .get("/portes")
      .then((resp) => {
        setDogSize(resp.data);
        setLoading(false);
      });
  }

  useEffect(() => {
    carregarPortes();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Listagem de Portes</h1>
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
              <th>Espaço ocupado</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              dogsizes.map((dogsize) =>
                <tr key={dogsize.id}>
                  <td>{dogsize.id}</td>
                  <td>{dogsize.name}</td>
                  <td>{dogsize.occupied_size}</td>
                  <td>
                    <Link className="btn btn-sm btn-success me-1" to={`/dogsize/alterar/${dogsize.id}`}>
                      <i className="bi bi-pen" title="Alterar"></i>
                    </Link>
                    <Link className="btn btn-sm btn-danger" to={`/dogsize/excluir/${dogsize.id}`}>
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