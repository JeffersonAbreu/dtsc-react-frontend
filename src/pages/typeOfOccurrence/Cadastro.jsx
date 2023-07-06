import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleChange, validar } from "../../lib/FormUtils";
import validator from "../../lib/ValidatorTypeOfOccurrence";
import FormTypeOfOccurrence from "../../components/tiposDeOcorrencia/Form";
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
        .post("/tipos", inputs)
        .then((resp) => {
          console.log(inputs)
          if (resp.status == 201) {
            alert("Tipos de ocorrência inserida com sucesso!");
            navigate("/typeOfOccurrence")
          }
        }
        ).catch((resp) =>{
          console.log(resp)
        })
        
        
    });
  }

  useEffect(() => {
    validarLocal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputs])

  return (
    <>
      <h1>Cadastro de Tipos de Ocorrência</h1>
      <hr />
      <FormTypeOfOccurrence handleSubmit={handleSubmit} handleChange={handleChangeLocal} inputs={inputs} errors={errors} />
    </>
  )
}

export default Cadastro;