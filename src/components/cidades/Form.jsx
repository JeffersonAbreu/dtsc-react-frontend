/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import FormButtons from "../FormButtons";
import FormInput from "../FormInput";
import FormSelect from "../FormSelect";
import { useNavigate } from "react-router-dom";
import http from "../../lib/consts";
const Form = ({ handleSubmit, handleChange, errors, inputs }) => {
  const [optionsUfs, setOptionsUfs] = useState([]);
  /*
    "uf": {
        "id":1
    }
  */
 
  const navigate = useNavigate();

  function carregarUfs() {
    http.get(`/ufs`)
      .then((resp) => {
        if (resp.status === 200) {
          const dados = resp.data.map((obj) => {
            
            return {
              value: obj.id,
              label: obj.name,
            };
          });
          setOptionsUfs(dados);
        } else if (resp.status === 404) {
          navigate("/cities");
        } else {
          console.log(resp);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }


  useEffect(() => {
    carregarUfs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <FormInput type="text" field="name" label="Nome" placeholder="Nome da Cidade" error={errors?.name} onChange={handleChange} value={inputs?.name} />
      <FormSelect field="ufId" label="UF" placeholder="Selecione a UF..." error={errors?.ufId} onChange={handleChange} value={inputs?.uf?.id} options={optionsUfs} />
      <FormButtons cancelTarget="/cities" />
    </form>
  )
}

export default Form

