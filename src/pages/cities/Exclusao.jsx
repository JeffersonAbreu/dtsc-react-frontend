/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import FormButtons from "../../components/FormButtons";
import { useEffect, useState } from "react";
import http from "../../lib/consts";

const Exclusao = () => {
    const [cidade, setCidade] = useState({});
    const id = useParams().id;
    const navigate = useNavigate();

    function carregarDados() {
        http.get(`/cities/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    setCidade(resp.data);
                } else if (resp.status === 404) {
                    navigate("/cities");
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
        http.delete(`/cities/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    alert("Cidade excluído com sucesso!");
                    navigate("/cities")
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
            <h1>Exclusão de Cidade</h1>
            <hr />
            <p className="lead">Deseja realmente excluir a Cidade {cidade.nome}?</p>
            <FormButtons cancelTarget="/cities" negativeTitle="Não" positiveTitle="Sim" positiveAction={handleDelete} buttonType="button" />
        </>
    )
}

export default Exclusao;