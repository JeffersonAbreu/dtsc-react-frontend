export const validar = (callbackAction, inputs, setErrors, validator) => {
    validator.validate(inputs, { abortEarly: false })
        .then(() => {
            setErrors({});
            if (callbackAction) callbackAction();
        })
        .catch((error) => {
            setErrors({});
            error.inner.forEach((err) => {
                setErrors((prevErrors) => ({ ...prevErrors, [err.path]: err.message }));
            });
        });
}

export const handleChange = (event, setInputs) => {
    const name = event.target.name;
    const value = event.target.value;
    //setInputs({ ...inputs, [name]: value });
    //opção sem necessidade da variável de estado no parâmetro
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value}) 
    );
    if(event.target.type ==="select-one" && event.target.id ==="ufId"){
        setInputs((prevInputs)=>({name: prevInputs.name,uf: {id: event.target.value},ufId:event.target.value
        }))
    }else if (event.target.type ==="select-one" && event.target.id ==="cityId"){
        setInputs((prevInputs)=>({name: prevInputs.name,city: {id: event.target.value}, cityId: prevInputs.cityId
        }))
    }else if (event.target.type ==="select-one" && event.target.id ==="dogSizeId"){
        setInputs((prevInputs)=>({name: prevInputs.name,dogSize: {id: event.target.value}, dogSizeId: prevInputs.dogSizeId
        }))
    }
};