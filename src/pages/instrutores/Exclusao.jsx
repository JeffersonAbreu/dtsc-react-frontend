import { useParams } from "react-router-dom";
import FormButtons from "../../components/FormButtons";

const Exclusao = () => {
    const id = useParams().id;

    //carregar dados do instrutor via API

    return (
        <>
            <h1>Exclusão de Instrutor</h1>
            <hr />
            <p className="lead">Dados do Instrutor {id}</p>
            <FormButtons cancelTarget="/instrutores" negativeTitle="Não" positiveTitle="Sim" />
        </>
    )
}

export default Exclusao;