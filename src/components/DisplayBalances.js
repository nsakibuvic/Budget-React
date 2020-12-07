import React from 'react';
import MainStatistics from "./MainStatistics"
import {Grid} from 'semantic-ui-react'


function DisplayBalances(){
return (
    <Grid columns={2} divided>        
         <Grid.Row>
         <Grid.Column>
         <MainStatistics size = "tiny" color= "green" title = "Income" value = "1045.00"/>
          </Grid.Column>          
          <Grid.Column>                   
           <MainStatistics size = "tiny" color = "red" title = "Expenses" value = "250.00"/>           
          </Grid.Column>
         </Grid.Row>
        </Grid>
)
}

export default DisplayBalances