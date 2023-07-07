/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import FormButtons from "../FormButtons";
import FormInput from "../FormInput";
import FormSelect from "../FormSelect";
import { useNavigate, Link } from "react-router-dom";
import estilos from "../../pages/vaccines/Listagem.module.css"
import http from "../../lib/consts";

const Form = ({ handleSubmit, handleChange, errors, inputs }) => {
  const [optionsBreeds, setoptionsBreeds] = useState([]);
  const [breeds, setBreeds] = useState([{}]);

  const handleChangeBreed = (event) => {
    () => {alert(`Aqui: ${event.target.value}`)}
    handleChange(event);
    setBreeds({...breeds, '000': 'teste'});
  }
  /*
    const vaccine1 = await Vaccine.create({ name: "AHS82", dosage_interval_days: "3"})
        const vaccine2 = await Vaccine.create({ name: "DJGH21", dosage_interval_days: "4"})
        const vaccine3 = await Vaccine.create({ name: "WYRT0", dosage_interval_days: "5"})
        const vaccine4 = await Vaccine.create({ name: "ADFH23", dosage_interval_days: "2"})
  */
 
  const navigate = useNavigate();

  function carregarRacas() {
    http.get(`/breeds`)
      .then((resp) => {
        if (resp.status === 200) {
          const dados = resp.data.map((obj) => {
            
            return {
              value: obj.id,
              label: obj.name,
            };
          });
          setoptionsBreeds(dados);
        } else if (resp.status === 404) {
          navigate("/vaccines");
        } else {
          console.log(resp);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  useEffect(() => {
    carregarRacas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <FormInput type="text" field="name" label="Nome" placeholder="Nome da vacina" error={errors?.name} onChange={handleChange} value={inputs?.name} />
      <div className="form-floating mt-3">
      <FormSelect field="breedId" label="Raça" placeholder="Selecione a Raça..." error={errors?.breedId} onChange={handleChangeBreed} value={inputs?.breedId} options={optionsBreeds} />
      </div>
      <div className="form-floating mt-1">
      <button className="btn btn-success" type="button" onClick={handleChangeBreed}>Adicionar</button>
      </div>
      <FormButtons cancelTarget="/vaccines" />
    </form>
    <hr />
      {breeds &&
        (<div className="text-center">
            <label>Não há restrições em raças!</label>
        </div>)}
      {!breeds && (
        <table className={`table table-striped ${estilos.tabela}`}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome da raça</th>
              <th>Porte</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              breeds.map((breed) =>
                <tr key={breed.id}>
                  <td>{breed.id}</td>
                  <td>{breed.name}</td>
                  <td>{breed.dogSize.name}</td>
                  <td>
                    <Link className="btn btn-sm btn-danger" to={`/breeds/excluir/${breed.id}`}>
                      <i className="bi bi-trash" title="Excluir"></i>
                    </Link>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      )}
      </>
  )
}

export default Form

