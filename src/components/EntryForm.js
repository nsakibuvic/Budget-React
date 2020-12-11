import React, { Fragment } from 'react';
import { Checkbox, Form, Segment } from 'semantic-ui-react';

function EntryForm ({
    description, value , isExpense, setDescription, setValue, setIsExpense
}){
        return (
            <Fragment>
            <Form.Group>
            <Form.Input 
            icon = "tags" 
            width= {12} 
            placeholder= "New Shiny Thing" 
            label = "Description "
            value= {description}
            onChange= {(event) => setDescription(event.target.value)}
            />
            <Form.Input 
            icon = "dollar" 
            iconPosition= "left"
            width= {4} 
            placeholder= "100.00" 
            label = "Value "
            value= {value}
            onChange= {(event) => setValue(event.target.value)}
            />
            </Form.Group>
            <Segment compact>
            <Checkbox 
            toggle 
            label = "is expense" 
            checked = {isExpense}
            onChange={()=> setIsExpense(oldState => !oldState)}
            />
    
    </Segment>
            </Fragment>
        );
}


export default EntryForm;