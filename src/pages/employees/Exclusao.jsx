/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import FormButtons from "../../components/FormButtons";
import { useEffect, useState } from "react";
import http from "../../lib/consts";

const Exclusao = () => {
    const [employee, setEmployee] = useState({});
    const id = useParams().id;
    const navigate = useNavigate();

    function carregarDados() {
        http.get(`/funcionarios/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    setEmployee(resp.data);
                } else if (resp.status === 404) {
                    navigate("/employees");
                } else {
                    console.log(resp);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        carregarDados();
    }, [id]);

    function handleDelete() {
        http.delete(`/funcionarios/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    alert("Funcionário excluído com sucesso!");
                    navigate("/employees")
                } else {
                    alert(resp.response.data.message)
                }
            })
            .catch((error) => {
                alert(error.response.data.message);
            });
    }

    return (
        <>
            <h1>Exclusão de Funcionário</h1>
            <hr />
            <p className="lead">Deseja realmente excluir o funcionário {employee.name}?</p>
            <FormButtons cancelTarget="/employees" negativeTitle="Não" positiveTitle="Sim" positiveAction={handleDelete} buttonType="button" />
        </>
    )
}

export default Exclusao;