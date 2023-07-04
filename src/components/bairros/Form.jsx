/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import FormButtons from "../FormButtons";
import FormInput from "../FormInput";
import FormSelect from "../FormSelect";
import { useNavigate } from "react-router-dom";
import http from "../../lib/consts";
const Form = ({ handleSubmit, handleChange, errors, inputs }) => {
  const [optionsCities, setOptionsCities] = useState([]);
  const navigate = useNavigate();

  function carregarCities(){
    http.get(`/cities`)
      .then((resp) => {
        if (resp.status === 200) {
          const dados = resp.data.map((obj) => {
            
            return {
              value: obj.id,
              label: obj.name,
            };
          });
          setOptionsCities(dados);
        } else if (resp.status === 404) {
          navigate("/districts");
        } else {
          console.log(resp);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    carregarCities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <FormInput type="text" field="name" label="Nome" placeholder="Nome da Cidade" error={errors?.name} onChange={handleChange} value={inputs?.name} />
      <FormSelect field="cityId" label="Cidade" placeholder="Selecione a Cidade..." error={errors?.cityId} onChange={handleChange} value={inputs?.city?.id} options={optionsCities} />
      <FormButtons cancelTarget="/cities" />
    </form>
  )
}

export default Form

