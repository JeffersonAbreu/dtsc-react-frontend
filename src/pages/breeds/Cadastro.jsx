import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleChange, validar } from "../../lib/FormUtils";
import validator from "../../lib/ValidatorBreed";
import FormBreed from "../../components/racas/Form";
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
        dogSize: {
          id: inputs.dogSizeId
        }
      }
      http
        .post("/breeds", payload)
        .then((resp) => {
          console.log(resp)
          if (resp.status == 201) {
            alert("Raça inserida com sucesso!");
            navigate("/breeds")
          }
        }
        ).catch((error) =>{
          alert(error.response.data.message)
        })
    });
  }
  useEffect(() => {
    validarLocal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputs])

  return (  
    <>
      <h1>Cadastro de Raças</h1>
      <hr />
      <FormBreed handleSubmit={handleSubmit} handleChange={handleChangeLocal} inputs={inputs} errors={errors} />
    </>
  )
}

export default Cadastro;