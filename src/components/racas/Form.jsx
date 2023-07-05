/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import FormButtons from "../FormButtons";
import FormInput from "../FormInput";
import FormSelect from "../FormSelect";
import { useNavigate } from "react-router-dom";
import http from "../../lib/consts";
const Form = ({ handleSubmit, handleChange, errors, inputs }) => {
  const [optionsDogSizes, setOptionsDogSizes] = useState([]);
 
  const navigate = useNavigate();

  function carregarUfs() {
    http.get(`/portes`)
      .then((resp) => {
        if (resp.status === 200) {
          const dados = resp.data.map((obj) => {
            
            return {
              value: obj.id,
              label: obj.name,
            };
          });
          setOptionsDogSizes(dados);
        } else if (resp.status === 404) {
          navigate("/breeds");
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
      <FormInput type="text" field="name" label="Nome da Raça" placeholder="Nome da Raça" error={errors?.name} onChange={handleChange} value={inputs?.name} />
      <FormSelect field="dogSizeId" label="Porte" placeholder="Selecione o Porte..." error={errors?.dogSizeId} onChange={handleChange} value={inputs?.dogsize?.id} options={optionsDogSizes} />
      <FormButtons cancelTarget="/breeds" />
    </form>
  )
}

export default Form

