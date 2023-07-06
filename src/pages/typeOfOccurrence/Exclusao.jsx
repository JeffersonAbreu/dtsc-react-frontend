/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import FormButtons from "../../components/FormButtons";
import { useEffect, useState } from "react";
import http from "../../lib/consts";


const Exclusao = () => {
    const [typeOfOccurrence, setTypeOfOccurrence] = useState({});
    const id = useParams().id;
    const navigate = useNavigate();

    function carregarDados() {
        http.get(`/tipos/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    setTypeOfOccurrence(resp.data);
                } else if (resp.status === 404) {
                    navigate("/typeOfOccurrence");
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
        http.delete(`/tipos/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    alert("Tipo de Ocorrência excluída com sucesso!");
                    navigate("/typeOfOccurrence")
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
            <h1>Exclusão de Tipos de Ocorrêcnia</h1>
            <hr />
            <p className="lead">Deseja realmente excluir o Tipo de ocorrência {typeOfOccurrence.name}?</p>
            <FormButtons cancelTarget="/typeOfOccurrence" negativeTitle="Não" positiveTitle="Sim" positiveAction={handleDelete} buttonType="button" />
        </>
    )
}

export default Exclusao;