import React from 'react';

import {Segment, Grid, Icon} from 'semantic-ui-react'

function MainGridColumn({description, value, isExpense = false }){
return(
    <Segment color= {isExpense ? 'red': 'green'}>
    <Grid columns ={3}>
    <Grid.Row>
 <Grid.Column textAlign = "left" width = {10}>{description}</Grid.Column>
 <Grid.Column textAlign = "right" width = {3}>{value}</Grid.Column>
 <Grid.Column textAlign = ""  width = {3}>
 <Icon name= "edit" bordered/>
 <Icon name= "trash" bordered/>
 </Grid.Column>
 </Grid.Row>                     
   </Grid>
   </Segment>
)}

export default MainGridColumn;