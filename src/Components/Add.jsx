import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Add = () => {

    const Add = (props) => {
        var[input,setInput]=useState(props.data)
        console.log(props.data)
      
    }
        const inputHandler=(e)=>{
            const{name,value}=e.target
            setInput({...input,[name]:value})
        }
        const readValues = ()=>{
            console.log("clicked")
            if(props.method==="post"){
            axios.post("http://localhost:3000/posts",input)
            .then(response=>{
                alert("Successfully added")
            })
            .catch(error=>console.log(error))
        }else if(props.method==="put"){
          axios.put("http://localhost:3000/posts/"+input.Name,input)
          .then(response=>{
            alert("Updated successfully")
            window.location.reload(false)
          })
          .catch(err=>console.log(err))
        }
      }
      return (
        <div>
            <br></br>
            <br></br>
            <br></br>
          <TextField label="Name" name='name' value={input.name}onChange={inputHandler} />
          <br></br>
          <br></br>
          <TextField  label="Brand" name='brand' value={input.brand}onChange={inputHandler}/>
          <br></br>
          <br></br>
          <Button variant="contained"onClick={readValues}color="success">submit</Button>
        </div>
  )
}

export default Add