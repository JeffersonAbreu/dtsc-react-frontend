/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import FormButtons from "../../components/FormButtons";
import { useEffect, useState } from "react";
import http from "../../lib/consts";


const Exclusao = () => {
    const [vaccine, setVaccine] = useState({});
    const id = useParams().id;
    const navigate = useNavigate();

    function carregarDados() {
        http.get(`/vacinas/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    setVaccine(resp.data);
                } else if (resp.status === 404) {
                    navigate("/vaccines");
                } else {
                    console.log(resp);
                }
            })
            .catch((error) => {
                alert(error.response.data.message);
            });
    }

    useEffect(() => {
        carregarDados();
    }, [id]);

    function handleDelete() {
        http.delete(`/vacinas/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    alert("Vacina excluída com sucesso!");
                    navigate("/vaccines")
                } else {
                    console.log(resp);
                }
            })
            .catch((error) => {
                alert(error.response.data.message);
            });
    }

    return (
        <>
            <h1>Exclusão de Vacina</h1>
            <hr />
            <p className="lead">Deseja realmente excluir a Vacina {vaccine.name}?</p>
            <FormButtons cancelTarget="/vaccines" negativeTitle="Não" positiveTitle="Sim" positiveAction={handleDelete} buttonType="button" />
        </>
    )
}

export default Exclusao;