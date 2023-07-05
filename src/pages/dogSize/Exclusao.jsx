/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import FormButtons from "../../components/FormButtons";
import { useEffect, useState } from "react";
import http from "../../lib/consts";

const Exclusao = () => {
    const [dogsize, setDogsize] = useState({});
    const id = useParams().id;
    const navigate = useNavigate();

    function carregarDados() {
        http.get(`/portes/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    setDogsize(resp.data);
                } else if (resp.status === 404) {
                    navigate("/dogsize");
                } else {
                    console.log(resp.request.data.message);
                }
            })
            .catch((error) => {
                console.log(error.request.data.message);
            });
    }

    useEffect(() => {
        carregarDados();
    }, [id]);

    function handleDelete() {
        http.delete(`/portes/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    alert("Porte excluído com sucesso!");
                    navigate("/dogsize")
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
            <h1>Exclusão de Porte</h1>
            <hr />
            <p className="lead">Deseja realmente excluir o porte {dogsize.name}?</p>
            <FormButtons cancelTarget="/dogsize" negativeTitle="Não" positiveTitle="Sim" positiveAction={handleDelete} buttonType="button" />
        </>
    )
}

export default Exclusao;