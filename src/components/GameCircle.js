import React from 'react'
import '../Game.css'

/*const onClick = (ev, id) => {
    
    alert(` clicked ${id}`)
}*/

const GameCircle = ({id,onCircleClicked,classname,children}) => { //unlike "id" which comes from "props" ; "children" is a specific variable for Data inserted in the  beginning tag and the ending tag of a component

   let color = parseInt(id)%2===0 ?"blue":"red" // can be remove, but I will as it for a study purpose
   let additionalClass = parseInt(id)%2 ===0 ? "even":"odd"
   //let additionalClass2 = parseInt(clicked)!==0 ? "stateColor":"odd"
   const style ={
    backgroundColor:color   // style={style} this can be kept because this is a dynamic variable
    }
  return (
    <div className={`gameCircle ${classname}`}  onClick={() => onCircleClicked(id)}>
         {children}
    </div>
  )
}

export default GameCircle