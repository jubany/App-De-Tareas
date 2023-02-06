import React from "react";
import '../components/Tarea.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({id, texto, completada, completarTarea, eliminarTarea}) { //desestructuracion
    return(// cuando dejamos un espacio en una clase, significa que estamos agregando una nueva clase.
        <div className={completada ? 'homework-container completada' : 'homework-container'}> 
            <div className='text-homework'//le asignamos la funcion completar tarea al evento click, definimos una funcion anonima, decimos q esa func se va a ejecutar y va a llamar a complet tarea, q es una funcion pasada como prop y esta func detrmina q se hara si se completa la tarea, cuando se haga click se llamara a la funcion q tiene q recibir un valor q seria el id, xq sino no sabria q tarea seria la q se marco como completada.
            onClick={() => completarTarea(id)}>
            {texto}
            </div>
            <div className='container-icon'
             onClick={() => eliminarTarea(id)}>
            <AiOutlineCloseCircle className='homework-icon'/>
            </div>
        </div>
    )// el classname homework.icon en este caso es una props, ya que pertenece a AiOutlineCloseCircle
}

export default Tarea;