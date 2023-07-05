import * as yup from "yup";

const validator = yup.object().shape({
    name: yup.string().required("Nome é obrigatório."),
    dogSizeId: yup.number("Somente números").required("Porte obrigatório")
});


export default validator;