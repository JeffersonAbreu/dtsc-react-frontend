import * as yup from "yup";

const validator = yup.object().shape({
    name: yup.string().required("Nome é obrigatório."),
    breedId: yup.number("Somente números")
});


export default validator;