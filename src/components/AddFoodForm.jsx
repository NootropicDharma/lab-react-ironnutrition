import React from 'react'
import { useState } from 'react';
import {Input,Button,Form} from 'antd';

const AddFoodForm = () => {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")

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
          
          
          <Button type='primary'>Save</Button>
        </Form>
      );
  
}

export default AddFoodForm