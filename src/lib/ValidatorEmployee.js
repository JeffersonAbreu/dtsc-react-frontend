import * as yup from "yup";

const validator = yup.object().shape({
    name: yup.string().required("Nome é obrigatório."),
    email: yup.string().email("E-mail inválido.").required("E-mail é obrigatório."),
    login: yup.string().required("Login é obrigatório."),
    password: yup.string().required("Password é obrigatório."),
});


export default validator;




