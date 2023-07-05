/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import FormButtons from "../../components/FormButtons";
import { useEffect, useState } from "react";
import http from "../../lib/consts";


const Exclusao = () => {
    const [raca, setRaca] = useState({});
    const id = useParams().id;
    const navigate = useNavigate();

    function carregarDados() {
        http.get(`/breeds/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    setRaca(resp.data);
                } else if (resp.status === 404) {
                    navigate("/breeds");
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
        http.delete(`/breeds/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    alert("Raça excluída com sucesso!");
                    navigate("/breeds")
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
            <h1>Exclusão de Raças</h1>
            <hr />
            <p className="lead">Deseja realmente excluir a Raça {raca.name}?</p>
            <FormButtons cancelTarget="/breeds" negativeTitle="Não" positiveTitle="Sim" positiveAction={handleDelete} buttonType="button" />
        </>
    )
}

export default Exclusao;