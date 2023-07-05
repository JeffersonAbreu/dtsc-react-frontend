import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import estilos from "./Listagem.module.css"
import axios from "axios";
import consts from "../../lib/consts";


const Listagem = () => {
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);

  const http = axios.create({
    baseURL: `${consts.API_URL}`
  });

  const carregarTutors = () => {
    http
      .get("/tutors")
      .then((resp) => {
        console.log(resp.data)
        setTutors(resp.data);
        setLoading(false);
      });
  }
  

  useEffect(() => {
    carregarTutors();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Listagem de Tutores</h1>
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
        <div className="table-responsive">
        <table className={`table table-striped ${estilos.tabela} table-sm align-middle text-center`}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Número da casa</th>
              <th>CEP</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Termo</th>
              <th>Data de nascimento</th>
              <th>Espaço disponível</th>
              <th>UF</th>
              <th>Bairro</th>
              <th>Cidade</th>
              <th>Ações</th> 
            </tr>
          </thead>
          <tbody>
            {
              tutors.map((tutor) =>
                <tr key={tutor.id}>
                  <td>{tutor.id}</td>
                  <td>{tutor.name}</td>
                  <td>{tutor.house_number}</td>
                  <td>{tutor.zip_code}</td>
                  <td>{tutor.email}</td>
                  <td>{tutor.phone}</td>
                  <td>{tutor.public_place}</td>
                  <td>{new Date(tutor.date_of_birth).toLocaleDateString("pt-br")}</td>
                  <td>{tutor.space_size}</td>
                  <td>{tutor.district.city.uf.name}</td>
                  <td>{tutor.district.name}</td>
                  <td>{tutor.district.city.name}</td>
                  <td>
                    <Link className="btn btn-sm btn-success me-1" to={`/tutors/alterar/${tutor.id}`}>
                      <i className="bi bi-pen" title="Alterar"></i>
                    </Link>
                    <Link className="btn btn-sm btn-danger" to={`/tutors/excluir/${tutor.id}`}>
                      <i className="bi bi-trash" title="Excluir"></i>
                    </Link>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
        </div>
      )}
    </>
  )
}

export default Listagem;