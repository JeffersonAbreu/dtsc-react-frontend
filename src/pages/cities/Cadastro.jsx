import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleChange, validar } from "../../lib/FormUtils";
import validator from "../../lib/ValidatorCity";
import FormCity from "../../components/cidades/Form";
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
        name:inputs.name,
        uf: {
          id: inputs.ufId
        }
      }
      http
        .post("/cities", payload)
        .then((resp) => {
          console.log(resp)
          if (resp.status == 201) {
            alert("Cidade inserida com sucesso!");
            navigate("/cities")
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
      <h1>Cadastro de Cidades</h1>
      <hr />
      <FormCity handleSubmit={handleSubmit} handleChange={handleChangeLocal} inputs={inputs} errors={errors} />
    </>
  )
}

export default Cadastro;