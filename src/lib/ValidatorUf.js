import * as yup from "yup";

const validator = yup.object().shape({
    name: yup.string().required("Nome é obrigatório."),
    sigla: yup.string().required("Sigla é obrigatório.").matches(/^[A-Z]{2}$/, 'A sigla deve conter duas letras maiúsculas.')
});


export default validator;