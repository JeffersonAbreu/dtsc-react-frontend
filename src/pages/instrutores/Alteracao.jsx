import { useParams } from "react-router-dom";
import FormButtons from "../../components/FormButtons";

const Alteracao = () => {
    const id = useParams().id;

    //carregar dados do instrutor via API

    return (
        <>
            <h1>Alteração de Instrutor</h1>
            <hr />
            <p className="lead">Dados do Instrutor {id}</p>
            <FormButtons cancelTarget="/instrutores" />
        </>
    )
}

export default Alteracao;