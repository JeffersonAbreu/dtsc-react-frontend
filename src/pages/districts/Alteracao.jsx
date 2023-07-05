import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { validar, handleChange } from "../../lib/FormUtils";
import validator from "../../lib/ValidatorDistrict";
import FormDistrict from "../../components/bairros/Form";
import http from "../../lib/consts";

const Alteracao = () => {
    const [inputs, setInputs] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const id = useParams().id;
    if (!id) {
        navigate("/listagem");
    }



    function carregarDados() {
        // setInputs({ ...inputs, id: id });
        http.get(`/district/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    setInputs(resp.data);
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

    function validarLocal(callbackAction) {
        validar(callbackAction, inputs, setErrors, validator);
    }

    function handleChangeLocal(e) {
        handleChange(e, setInputs, inputs);
    }
/**{
    "name": "Bairro teste teste",
    "city":{
        "id": 2
    }
} */
    function handleSubmit(e) {
        e.preventDefault();
        validarLocal(() => {
            http
                .put(`/district/${id}`, inputs)
                .then((resp) => {
                    console.log(resp)
                    if (resp.status == 200) {
                        alert("Bairro alterado com sucesso!");
                        navigate("/districts")
                    }
                });
        });
    }


    

    useEffect(() => {
        validarLocal();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputs])

    return (
        <>
            <h1>Alteração de Bairro</h1>
            <hr />
            <FormDistrict handleSubmit={handleSubmit} handleChange={handleChangeLocal} inputs={inputs} errors={errors} />
        </>
    )
}

export default Alteracao;