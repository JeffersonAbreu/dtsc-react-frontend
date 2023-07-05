import * as yup from "yup";

const validator = yup.object().shape({
    name: yup.string().required("Nome é obrigatório."),
    email: yup.string().email("E-mail inválido.").required("E-mail é obrigatório."),
    telefone: yup.number("Somente números.").required("Telefone é obrigatório."),
    house_number: yup.number("Somente números.").required("Número da casa é obrigatório."),
    public_place: yup.string().required("Termo é obrigatório."),
    date_of_birth: yup.date().required("Data de nascimento é obrigatório."),
    space_size: yup.number().required("Espaço disponível é obrigatório.").positive("Apenas números positivos."),
    districtId: yup.number("Somente números.").required("Bairro é obrigatório.")
});


export default validator;