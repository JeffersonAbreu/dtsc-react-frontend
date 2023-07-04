/* eslint-disable react/prop-types */
import FormButtons from "../FormButtons"
import FormInput from "../FormInput"

const Form = ({ handleSubmit, handleChange, errors, inputs }) => {
  return (

    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <FormInput type="text" field="name" label="Nome" placeholder="Nome da UF" error={errors?.name} onChange={handleChange} value={inputs?.name} />
      <FormInput type="text" field="sigla" label="Sigla" placeholder="ES" error={errors?.sigla} onChange={handleChange} value={inputs?.sigla}/>
      <FormButtons cancelTarget="/ufs" />
    </form>
  )
}

export default Form