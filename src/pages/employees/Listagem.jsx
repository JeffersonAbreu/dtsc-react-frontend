import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import estilos from "./Listagem.module.css"
import http from "../../lib/consts";
/**const employee1 = await Employee.create({
            name: "Lucas Macedo Bernardino",
            email: "lucasmacedoes@gmail.com",
            login: "lukasombrado",
            password: "Ab123!@#"
        }) */
const Listagem = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);


  const carregarFuncionarios = () => {
    http
      .get("/funcionarios")
      .then((resp) => {
        setEmployees(resp.data);
        setLoading(false);
      });
  }

  useEffect(() => {
    carregarFuncionarios();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Listagem de Funcionarios</h1>
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
              <th>Email</th>
              <th>Login</th>
              <th>Password</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              employees.map((employee) =>
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.login}</td>
                  <td>{employee.password}</td>
                  <td>
                    <Link className="btn btn-sm btn-success me-1" to={`/employees/alterar/${employee.id}`}>
                      <i className="bi bi-pen" title="Alterar"></i>
                    </Link>
                    <Link className="btn btn-sm btn-danger" to={`/employees/excluir/${employee.id}`}>
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