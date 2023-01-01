import React from 'react'
import { useState } from 'react';
import {Input,Button,Form} from 'antd';
import { OmitProps } from 'antd/es/transfer/ListBody';

const AddFoodForm = (props) => {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")

   
        
    
    //this is for the onChange={}

    function actualizarName(nombre){
        setName(nombre)
    }
    function actualizarImage(imagen){
        setImage(imagen)
    }
    function actualizarCalories(calorias){
        setCalories(calorias)
    }
    function actualizarServings(serviciones){
        setServings(serviciones)
    }


    //this is for the Button onClick={}

    function guardarDatos(){
        console.log({name, image, calories, servings})
        props.updateComida({name, image,calories, servings })
    }
    
    
  //controlled component 
    return (
        <Form layout='vertical'>
          AddFoodForm
        <Form.Item label="Name">
            <Input value={name} placeholder='Name' onChange={(event)=>actualizarName(event.target.value)}/>
        </Form.Item>
          
        <Form.Item label="Image">
            <Input value={image} placeholder='Name' onChange={(event)=>actualizarImage(event.target.value)}/>
        </Form.Item>
          
        <Form.Item label="Calories">
            <Input value={calories} placeholder='Name' onChange={(event)=>actualizarCalories(event.target.value)}/>
        </Form.Item>
          
        <Form.Item label="Servings">
            <Input value={servings} placeholder='Name' onChange={(event)=>actualizarServings(event.target.value)}/>
        </Form.Item>
          
          
          <Button type='primary'onClick={guardarDatos}>Save</Button>
        </Form>
      );
  
}

export default AddFoodForm