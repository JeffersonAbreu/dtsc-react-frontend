/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import FormButtons from "../../components/FormButtons";
import { useEffect, useState } from "react";
import http from "../../lib/consts";


const Exclusao = () => {
    const [bairro, setBairro] = useState({});
    const id = useParams().id;
    const navigate = useNavigate();

    function carregarDados() {
        http.get(`/district/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    setBairro(resp.data);
                } else if (resp.status === 404) {
                    navigate("/districts");
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
        http.delete(`/district/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    alert("Bairro excluído com sucesso!");
                    navigate("/districts")
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
            <h1>Exclusão de Bairro</h1>
            <hr />
            <p className="lead">Deseja realmente excluir o Bairro {bairro.name}?</p>
            <FormButtons cancelTarget="/cities" negativeTitle="Não" positiveTitle="Sim" positiveAction={handleDelete} buttonType="button" />
        </>
    )
}

export default Exclusao;