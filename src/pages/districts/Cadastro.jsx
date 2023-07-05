import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleChange, validar } from "../../lib/FormUtils";
import validator from "../../lib/ValidatorDistrict";
import FormDistric from "../../components/bairros/Form";
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
      const payload = {
        city: {
          id: inputs.cityId
        },
        name: inputs.name,
      }
      http
        .post("/districts", payload)
        .then((resp) => {
          console.log(resp)
          if (resp.status == 201) {
            alert("Bairro inserido com sucesso!");
            navigate("/districts")
          }
        }
        ).catch((resp) => {
          console.log(resp)
        })

      /*
        {
          "city": {
          "id":1
        },
        "name":"Bairro teste"
}
      */
    });
  }
  useEffect(() => {
    validarLocal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputs])

  return (
    <>
      <h1>Cadastro de Cidades</h1>
      <hr />
      <FormDistric handleSubmit={handleSubmit} handleChange={handleChangeLocal} inputs={inputs} errors={errors} />
    </>
  )
}

export default Cadastro;