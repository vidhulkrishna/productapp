import { Button, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState,TableCell } from 'react'

const View = () => {
  return 
    var[Upadte,setUpdate] = useState(false)
    var[Selectd,setSelectd] =useState([])
    var[product,setProduct]= useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/posts")
        .then(response=>{
            setProduct(product=response.data)
            console.log(product)
        })
        .catch(error=>console.log(error))
    },[])
    const deleteValue=(Name)=>{
        console.log(Name)
        axios.delete("http://localhost:3000/posts/"+Name)
        .then(response=>{
            alert("Successfully deleted")
            window.location.reload(false)
        })
        .catch(err=>console.log(err))
    }
    const updateValue=(value)=>{
        setSelectd(value)
        setUpdate(true)

    }
    var finalJSX=<TableContainer>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Brand</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Price</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {product.map((value,index)=>{
                return <TableRow key={index}>
                    <TableCell>{value.Name}</TableCell>
                    <TableCell>{value.Brand}</TableCell>
                    <TableCell>{value.Quantity}</TableCell>
                    <TableCell>{value.Price}</TableCell>
                    <TableCell>
                        <Button></Button>
                        <Button onClick={()=>deleteValue(value.Name)}>Delete</Button></TableCell>
                        <TableCell><Button onClick={()=>updateValue(value)}>Upadte</Button></TableCell>
                </TableRow>
            })}
        </TableBody>
    </Table>
</TableContainer>

if(Upadte)
finalJSX=<Add data={Selectd} method ="put"/>
  return (
    finalJSX
  )
    

}

export default View