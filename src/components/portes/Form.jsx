/* eslint-disable react/prop-types */
import FormButtons from "../FormButtons"
import FormInput from "../FormInput"


const Form = ({ handleSubmit, handleChange, errors, inputs }) => {
    return (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <FormInput type="text" field="name" label="Nome" placeholder="Nome do Porte" error={errors?.name} onChange={handleChange} value={inputs?.name} />
            <FormInput type="number" field="occupied_size" label="Espaço Ocupuado" placeholder="50m²" error={errors?.occupied_size} onChange={handleChange} value={inputs?.occupied_size} />
            <FormButtons cancelTarget="/dogsize" />
        </form>
    )
}

export default Form;