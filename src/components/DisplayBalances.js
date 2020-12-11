import React from 'react';
import { Grid } from 'semantic-ui-react';

import MainStatistics from './MainStatistics';


function DisplayBalances({incomeTotal, expenseTotal}){
return (
    <Grid columns={2} divided>        
         <Grid.Row>
         <Grid.Column>
         <MainStatistics size = "tiny" color= "green" title = "Income" value = {incomeTotal}/>
          </Grid.Column>          
          <Grid.Column>                   
           <MainStatistics size = "tiny" color = "red" title = "Expenses" value = {expenseTotal}/>           
          </Grid.Column>
         </Grid.Row>
        </Grid>
)
}

export default DisplayBalances