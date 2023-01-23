import { FormInput } from "../FormInput"
import { ResponseOutput } from "../ResponseOutput"
import "./styles.css"
import { useEffect, useState } from "react";
import api from "../../services/api"


export function Box(){

    const [amount, setAmount] = useState(1000);
    const [mdr, setMdr] = useState(0);
    const [installments, setInstallments] = useState(1);
    const [response, setResponse] = useState([])

    useEffect(() => {
        api
          .post("",{
            amount: amount,
            mdr: mdr,
            installments: installments

     })
          .then((response) => {
            setResponse(response.data)
          }
          )
          .catch(err=> console.error(err))
      }, [amount, mdr, installments]);

    return (
        <div className="box"> 
            <FormInput 
              setAmount={setAmount}
              setMdr={setMdr}
              setInstallments={setInstallments}
            />       
            <ResponseOutput response={response}/>    
        </div>
    )        
}