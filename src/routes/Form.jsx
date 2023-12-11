import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import './Form.css'
import Resposta from "./Resposta";



function Form () {
const {register, handleSubmit} = useForm()


const onSubmit = data => axios.post("http://127.0.0.1:5001/idiomas", data)

.then((response) => {


    var nome = response.data
    
  

    console.log(nome)

    return nome

   })
 
   .catch(() => {
       console.log("deu errado")
   
   })



    return (
  
 
<div> 
            
            <form className="container" onSubmit={handleSubmit(onSubmit)}>
                <div>
                <label className="titulo" >DIGITE UMA FRASE</label>
                </div>

                <div> 
                <input className="frase" type="text" name="text" {...register("frase")}/>
                </div>

                <div>
               <button className="botao" type="submit"> ENVIAR</button>  
               </div>

               <div>   <Resposta /></div>
            

            </form>     
           
            </div>

            
            
    )

  
}




export default Form



