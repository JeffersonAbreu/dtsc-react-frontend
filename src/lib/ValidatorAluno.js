import * as yup from "yup";

const validator = yup.object().shape({
    nome: yup.string().required("Nome é obrigatório.").min(6, "Nome deve ter pelo menos 6 caracteres.").max(32, "Nome deve ter no máximo 32 caracteres."),
    email: yup.string().email("E-mail inválido.").required("E-mail é obrigatório."),
    telefone: yup.number("Somente números.").required("Telefone é obrigatório."),
    mensalidade: yup.number("Campo numérico.").required("Mensalidade é obrigatório.")
});

export default validator;