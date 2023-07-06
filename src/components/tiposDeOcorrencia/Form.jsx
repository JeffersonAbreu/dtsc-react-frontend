/* eslint-disable react/prop-types */
import FormButtons from "../FormButtons"
import FormInput from "../FormInput"

const Form = ({ handleSubmit, handleChange, errors, inputs }) => {
  return (

    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <FormInput type="text" field="name" label="Nome" placeholder="Nome da UF" error={errors?.name} onChange={handleChange} value={inputs?.name} />
      <FormInput type="number" field="severity" label="Gravidade" placeholder="0.1" error={errors?.severity} onChange={handleChange} value={inputs?.severity} step={0.1}/>
      <FormInput type="radio" field="aggressorS" label="Sim?" onChange={handleChange} value={inputs?.aggressor} error={errors?.aggressor}/>
      <FormInput type="radio" field="aggressorN" label="Não?" onChange={handleChange} value={inputs?.aggressor} error={errors?.aggressor}/>
      <FormButtons cancelTarget="/typeOfOccurrence" />
    </form>
  )
}

export default Form

