import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleChange, validar } from "../../lib/FormUtils";
import validator from "../../lib/ValidatorVaccine";
import FormVaccine from "../../components/vacinas/Form";
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
      const breeds = {
        name: inputs.Breed.nameBreed,
        id: inputs.Breed.id
      }
      const payload = {
        name:inputs.name,
        dosage_interval_days: 3,
        breeds: [
           breeds
        ]
      }
      http
        .post("/vacinas", payload)
        .then((resp) => {
          console.log(resp)
          if (resp.status == 201) {
            alert("Vacina inserida com sucesso!");
            navigate("/vaccines")
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
      <h1>Cadastro de Vacinas</h1>
      <hr />
      <FormVaccine handleSubmit={handleSubmit} handleChange={handleChangeLocal} inputs={inputs} errors={errors} />
    </>
  )
}

export default Cadastro;