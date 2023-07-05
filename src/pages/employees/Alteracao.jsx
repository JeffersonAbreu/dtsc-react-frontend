import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { validar, handleChange } from "../../lib/FormUtils";
import validator from "../../lib/ValidatorEmployee";
import FormEmployee from "../../components/funcionarios/Form";
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
        http.get(`/funcionarios/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    setInputs(resp.data);
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

    function validarLocal(callbackAction) {
        validar(callbackAction, inputs, setErrors, validator);
    }

    function handleChangeLocal(e) {
        handleChange(e, setInputs, inputs);
    }

    function handleSubmit(e) {
        e.preventDefault();
        validarLocal(() => {
            http
                .put(`/funcionarios/${id}`, inputs)
                .then((resp) => {
                    if (resp.status == 200) {
                        alert("Funcionario alterado com sucesso!");
                        navigate("/employees")
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
            <h1>Alteração de Funcionário</h1>
            <hr />
            <FormEmployee handleSubmit={handleSubmit} handleChange={handleChangeLocal} inputs={inputs} errors={errors} />
        </>
    )
}

export default Alteracao;