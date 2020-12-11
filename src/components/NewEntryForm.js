import { React } from 'react';
import { Form } from 'semantic-ui-react';

import Button from './ButtonServeOrCancel';
import EntryForm from './EntryForm';

function NewEntryForm({addEntry, description, value, isExpense, setDescription, setValue, setIsExpense}){



return(    
    <Form unstackable>
    
    <EntryForm 
    description= {description} 
    value = {value} 
    isExpense = {isExpense}
    setDescription = {setDescription} 
    setValue = {setValue}
    setIsExpense = {setIsExpense}
    /> 
    <Button 
    addEntry= {addEntry}      
    />        
    </Form>
)
}

export default NewEntryForm