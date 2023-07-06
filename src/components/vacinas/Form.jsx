/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import FormButtons from "../FormButtons";
import FormInput from "../FormInput";
import FormSelect from "../FormSelect";
import { useNavigate } from "react-router-dom";
import http from "../../lib/consts";
const Form = ({ handleSubmit, handleChange, errors, inputs }) => {
  const [optionsBreeds, setoptionsBreeds] = useState([]);
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
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <FormInput type="text" field="name" label="Nome" placeholder="Nome da Cidade" error={errors?.name} onChange={handleChange} value={inputs?.name} />
      <div className="form-floating mt-3 d-flex justify-content-between">
      <FormSelect field="breedId" label="Raça" placeholder="Selecione a Raça..." error={errors?.breedId} onChange={handleChange} value={inputs?.breedId} options={optionsBreeds} />
      </div>
      <FormButtons cancelTarget="/vaccines" />
    </form>
  )
}

export default Form

