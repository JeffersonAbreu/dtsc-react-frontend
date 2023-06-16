/* eslint-disable react/prop-types */
import FormButtons from "../FormButtons"
import FormInput from "../FormInput"


const Form = ({ handleSubmit, handleChange, errors, inputs }) => {
    return (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <FormInput type="text" field="nome" label="Nome" placeholder="Nome do Instrutor" error={errors?.nome} onChange={handleChange} value={inputs?.nome} />
            <FormInput type="email" field="email" label="E-mail" placeholder="aluno@email.com" error={errors?.email} onChange={handleChange} value={inputs?.email} />
            <FormInput type="tel" field="telefone" label="Telefone" placeholder="28999995555" error={errors?.telefone} onChange={handleChange} value={inputs?.telefone} />
            <FormInput type="text" field="mensalidade" label="Mensalidade" placeholder="49.9" error={errors?.mensalidade} onChange={handleChange} value={inputs?.mensalidade} />
            <FormButtons cancelTarget="/alunos" />
        </form>
    )
}

export default Form

