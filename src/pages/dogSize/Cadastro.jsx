import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "../../lib/ValidatorDogSize";
import { handleChange, validar } from "../../lib/FormUtils";
import FormDogSize from "../../components/portes/Form";
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
        .post("/portes", inputs)
        .then((resp) => {
          if (resp.status == 201) {
            alert("Porte inserido com sucesso!");
            navigate("/dogsize")
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
      <h1>Cadastro de Portes</h1>
      <hr />
      <FormDogSize handleSubmit={handleSubmit} handleChange={handleChangeLocal} inputs={inputs} errors={errors} />
    </>
  )


}

export default Cadastro;