import React, { Fragment } from 'react';
import { Grid, Icon, Segment } from 'semantic-ui-react';

function Entryline({id, description, value, isExpense = false, deleteEntry, editEntry}){

return(
<Fragment>
<Segment color= {isExpense ? 'red': 'green'}>
<Grid columns ={3}>
<Grid.Row>
<Grid.Column textAlign = "left" width = {10}>{description}</Grid.Column>
<Grid.Column textAlign = "right" width = {3}>{value}</Grid.Column>
<Grid.Column textAlign = ""  width = {3}>
<Icon name= "edit" bordered onClick= {() => editEntry(id)}/>
<Icon name= "trash" bordered onClick= {() => {deleteEntry(id)}}/>
</Grid.Column>
</Grid.Row>                     
</Grid>
</Segment>
</Fragment>   
)}

export default Entryline;