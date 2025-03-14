import React from 'react'

const Props = ({role}) => {
  if(role =='admin')
    return(
        <h1>Welcome admin</h1>
    )
    else{
       return(<h1>Welcome guest</h1>) 
        
    }
}

export default Props
