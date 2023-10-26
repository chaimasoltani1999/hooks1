import React, { useRef } from 'react'

const Add= ({myRate,myDescription,myImg,myTitle,handleAdd})=> {
   
  return (
    <div>
        <input placeholder='title' ref={myTitle}/>
        <input placeholder='img' ref={myImg}/>
        <input placeholder='description'ref={myDescription}/>
        <input type="number" placeholder='rate' ref={myRate}/>
        <button onClick={handleAdd}>add movie</button>

    </div>
  )
}

export default Add