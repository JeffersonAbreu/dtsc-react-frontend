/* eslint-disable react/prop-types */
import FormButtons from "../FormButtons"
import FormInput from "../FormInput"


const Form = ({ handleSubmit, handleChange, errors, inputs }) => {
    return (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <FormInput type="text" field="name" label="Nome" placeholder="Nome do Funcionário" error={errors?.name} onChange={handleChange} value={inputs?.name} />
            <FormInput type="email" field="email" label="E-mail" placeholder="aluno@email.com" error={errors?.email} onChange={handleChange} value={inputs?.email} />
            <FormInput type="text" field="login" label="Login" placeholder="Login do Funcionário" error={errors?.login} onChange={handleChange} value={inputs?.login} />
            <FormInput type="text" field="password" label="Senha" placeholder="Senha do Funcionário" error={errors?.password} onChange={handleChange} value={inputs?.password} />
            <FormButtons cancelTarget="/employees" />
        </form>
    )
}

export default Form;