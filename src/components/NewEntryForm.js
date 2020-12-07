import React from 'react';
import Button from "./ButtonServeOrCancel"
import {Form} from 'semantic-ui-react'

function NewEntryForm(){
return(
    <Form unstackable>
    <Form.Group>
    <Form.Input 
    icon = "tags" 
    width= {12} 
    placeholder= "New Shiny Thing" 
    label = "Description "
    />
    <Form.Input 
    icon = "dollar" 
    iconPosition= "left"
    width= {4} 
    placeholder= "100.00" 
    label = "Value "
    />
    </Form.Group>
    <Button />        
    </Form>
)
}

export default NewEntryForm