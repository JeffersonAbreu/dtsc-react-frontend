import * as yup from "yup";

const validator = yup.object().shape({
    name: yup.string().required("Nome é obrigatório."),
    occupied_size: yup.number("Somente números").required("Espaço ocupado obrigatório")
});


export default validator;




