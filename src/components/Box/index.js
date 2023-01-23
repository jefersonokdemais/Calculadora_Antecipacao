import { FormInput } from "../FormInput"
import { ResponseOutput } from "../ResponseOutput"
import "./styles.css"
import { useEffect, useState } from "react";
import api from "../../services/api"


export function Box(){

    const [amount, setAmount] = useState();
    const [mdr, setMdr] = useState();
    const [installments, setInstallments] = useState();

    useEffect(() => {
        api
          .post("/",{
     })
          .then((response) => 
            setAmount(response.data)
          )
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);

    return (
        <div className="box"> 
            <FormInput/>       
            <ResponseOutput/>    
        </div>
    )        
}