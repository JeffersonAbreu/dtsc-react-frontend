/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import FormButtons from "../../components/FormButtons";
import axios from "axios";
import { useEffect, useState } from "react";

const Exclusao = () => {
    const [aluno, setAluno] = useState({});
    const id = useParams().id;

    const navigate = useNavigate();

    function carregarDados() {
        // setInputs({ ...inputs, id: id });
        axios.get(`http://localhost:3001/alunos/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    setAluno(resp.data);
                } else if (resp.status === 404) {
                    navigate("/alunos");
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
        axios.delete(`http://localhost:3001/alunos/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    alert("Aluno excluído com sucesso!");
                    navigate("/alunos")
                } else {
                    console.log(resp);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <h1>Exclusão de Aluno</h1>
            <hr />
            <p className="lead">Deseja realmente excluir o aluno {aluno.nome}?</p>
            <FormButtons cancelTarget="/alunos" negativeTitle="Não" positiveTitle="Sim" positiveAction={handleDelete} buttonType="button" />
        </>
    )
}

export default Exclusao;