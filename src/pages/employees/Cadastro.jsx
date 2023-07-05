import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "../../lib/ValidatorEmployee";
import { handleChange, validar } from "../../lib/FormUtils";
import FormEmployee from "../../components/funcionarios/Form";
import http from "../../lib/consts";

const Cadastro = () => {

  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

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
        .post("/funcionarios", inputs)
        .then((resp) => {
          if (resp.status == 201) {
            alert("Funcionário inserido com sucesso!");
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
      <h1>Cadastro de Funcionários</h1>
      <hr />
      <FormEmployee handleSubmit={handleSubmit} handleChange={handleChangeLocal} inputs={inputs} errors={errors} />
    </>
  )


}

export default Cadastro;