import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import validator from "../../lib/ValidatorAluno";
import { handleChange, validar } from "../../lib/FormUtils";
import FormAluno from "../../components/alunos/Form";


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
      axios
        .post("http://localhost:3001/alunos", inputs)
        .then((resp) => {
          if (resp.status == 201) {
            alert("Aluno inserido com sucesso!");
            navigate("/alunos")
          }
        });
      console.log("Enviou dados para a API.");
    });
  }

  useEffect(() => {
    validarLocal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputs])

  return (
    <>
      <h1>Cadastro de Aluno</h1>
      <hr />
      <FormAluno handleSubmit={handleSubmit} handleChange={handleChangeLocal} inputs={inputs} errors={errors} />
    </>
  )


}

export default Cadastro;