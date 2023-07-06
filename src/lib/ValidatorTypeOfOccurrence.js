import * as yup from "yup";

const validator = yup.object().shape({
    name: yup.string().required("Nome é obrigatório."),
    severity: yup.number().required("Nível de agressão obrigatório"),
    aggressor: yup.boolean().required("Selecione uma das duas opções!")
});


export default validator;