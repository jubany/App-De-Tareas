import React, { useState } from "react";
import HomeworkForm from "./HomeworkForm";
import '../components/ListOfHomeworks.css';
import Tarea from './Tarea';

function ListOfHomeworks() {
    
    const[tareas, setTarea] = useState([]);
    
    const agregarTarea = tarea => {
        if (tarea.texto.trim()) {//tarea=objeto, le decimos q su propiedad texto, sacandole los espacios al principio y final con trim, todavia sigue siendo una cadena no vacia.
            tarea.texto = tarea.texto.trim()// ahora reasignamos el valor para usarlo 
        
        const tareaActualizada = [tarea,...tareas]
        setTarea(tareaActualizada)
        //un array xq queremos agregar la tarea al principio, despues tomamos toda las tareas anteriores y con el operador...estamos convirtiendolas de un array a tareas ind, obj individuales del array.llamamos a setTarea y le pasamos el nuevo estado, nos permite tomar tareas anteriores y agregar la tarea nueva.
        }
    }

    const eliminarTarea= id => {//el id es la unica manera d determinar q vamos a eliminar
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTarea(tareasActualizadas);
    }// lo q estamos haciendo es filtrar, decimos el q cumpla la condicion va a incluirse en el arreglo, pero si el id es igual no lo incluimos.
    const completarTarea= id => {
        const tareaActualizada = tareas.map(tarea => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        })
        setTarea(tareaActualizada);
    }

    return(//estamos pasando un props aqui abajo llamado onSubmit
<>
<HomeworkForm onSubmit ={agregarTarea}/>
<div className='task-list-container'>
{tareas.map((tarea) =>//map es un metodo,toma cada una d las tareas las pasa una x una como un argumento para otra function y va a realizar lo q especifiquemos, aqui creamos un componente tarea para cada una d las tareas en el [], tomamos esos datos y para cada uno creamos un componente en react.cada una d las tareas va a tener un texto especifico.Vamos a tener un array d objetos. (ask) En este caso es un objeto
<Tarea //cuando mostramos una lista d react, para q este sepa el orden debemos pasar un prop o atributo muy importante d react, key es una forma q tiene react d identificar el elemento d la lista y debe ser unico, pasamos doble xq no solamente usamos key
key= {tarea.id}
id={tarea.id}
texto={tarea.texto}
completada={tarea.completada}
eliminarTarea={eliminarTarea}
completarTarea={completarTarea}
/>
)
}
</div>
</>
)  
}

export default ListOfHomeworks;