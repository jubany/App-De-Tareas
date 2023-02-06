import React,{ useState }from "react";
import '../components/HomeworkForm.css'
import { v4 as uuidv4 } from 'uuid';

function HomeworkForm(props) {

const [input, setInput] = useState('');


const manejarCambio = e => {
setInput(e.target.value)//esto nos permite extraer el valor del campo d texto
}

const manejarEnvio = e => {
e.preventDefault();//hace que no se actualice todo el tiempo

    const tareaNueva = {//uuidv4 es una libreria externa llamada para producir id
    id: uuidv4(),
    texto:input,
    completada: false
    }

    props.onSubmit(tareaNueva);//es lo que va a ocurrir cuando el form s intente enviar
}
    return(
<form className='homework-form'
onSubmit={manejarEnvio}>
<input className='homework-input'
type='text'
placeholder='Escribe una Tarea'
name='texto'
onChange={manejarCambio}/>
<button className='homework-button'>
    Agregar Tarea
</button>
</form>
    )
}

export default HomeworkForm;