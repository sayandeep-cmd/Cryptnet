import React, { useEffect ,useState } from 'react'
import axios from 'axios'
function Test() {
   let [state,setstate]=useState([]);
    
      useEffect(()=>{
        axios.get(' http://localhost:3005/bought').then(res => { 
          console.log(res.data)  
          setstate(res.data) }).catch(err => {console.log(err) })
      },[])
  return (
    <div>
        {state.map((x)=>(
            <h1 style={{color:'white'}}>{x.price}</h1>
        ))}
    </div>
  )
}

export default Test