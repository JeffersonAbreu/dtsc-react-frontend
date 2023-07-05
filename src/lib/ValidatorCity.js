import * as yup from "yup";

const validator = yup.object().shape({
    name: yup.string().required("Nome é obrigatório."),
    ufId: yup.number("Somente números").required("UF obrigatório")
});


export default validator;