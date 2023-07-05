import * as yup from "yup";

const validator = yup.object().shape({
    name: yup.string().required("Nome é obrigatório."),
    cityId: yup.number("Somente números").required("Cidade obrigatório"),
});


export default validator;