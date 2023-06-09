/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import FormButtons from "../../components/FormButtons";
import { useEffect, useState } from "react";
import http from "../../lib/consts";

const Exclusao = () => {
    const [uf, setUf] = useState({});
    const id = useParams().id;
    const navigate = useNavigate();

    function carregarDados() {
        http.get(`/ufs/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    setUf(resp.data);
                } else if (resp.status === 404) {
                    navigate("/ufs");
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
        http.delete(`/ufs/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    alert("UF excluído com sucesso!");
                    navigate("/ufs")
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
            <h1>Exclusão de UF</h1>
            <hr />
            <p className="lead">Deseja realmente excluir a UF {uf.nome}?</p>
            <FormButtons cancelTarget="/ufs" negativeTitle="Não" positiveTitle="Sim" positiveAction={handleDelete} buttonType="button" />
        </>
    )
}

export default Exclusao;