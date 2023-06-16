import { useState } from "react";
import FormButtons from "../../components/FormButtons";
import FormInput from "../../components/FormInput";

const Cadastro = () => {

  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInputs({ ...inputs, [name]: value });
  }

  return (
    <>
      <h1>Cadastro de Instrutor</h1>
      <hr />
      <form>
        <FormInput type="text" field="nome" label="Nome" placeholder="Nome do Instrutor" error={null} onChange={handleChange} value={inputs?.nome} />
        <FormInput type="email" field="email" label="E-mail" placeholder="instrutor@email.com" error={null} onChange={handleChange} value={inputs?.email} />
      </form>
      <FormButtons cancelTarget="/instrutores" />
    </>
  )
}

export default Cadastro;