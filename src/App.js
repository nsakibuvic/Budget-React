import {Container, Button, Header, Segment, Grid, Statistic, Icon, Form} from "semantic-ui-react"
import './App.css';

function App() {
  return (
    <Container>
      <Header as="h1"> Budget </Header>
      <Statistic size= "small">
       <Statistic.Label> Your Balance </Statistic.Label>
       <Statistic.Value>2,550.53</Statistic.Value>
       </Statistic>
        <Segment textAlign = "center">
        <Grid columns={2} divided>        
         <Grid.Row>
         <Grid.Column>
           <Statistic size= "tiny" color = "green">
             <Statistic.Label style = {{textAlign: "left"}}> Income </Statistic.Label>
             <Statistic.Value>1045</Statistic.Value>
           </Statistic>
         </Grid.Column>          
          <Grid.Column>

          <Statistic size= "tiny" color = "red">
             <Statistic.Label style = {{textAlign: "right"}}> Expenses </Statistic.Label>
             <Statistic.Value>250</Statistic.Value>
           </Statistic>
          </Grid.Column>
         </Grid.Row>
        </Grid>
        </Segment>
      
        <Header as="h3"> History </Header>
        <Segment color  = "red">
           <Grid columns ={3}>
            <Grid.Row>
         <Grid.Column textAlign = "left" width = {10}>Something</Grid.Column>
         <Grid.Column textAlign = "right" width = {3}>$10.00</Grid.Column>
         <Grid.Column textAlign = "" width = {3}>
         <Icon name= "edit" bordered/>
         <Icon name= "trash" bordered/>
         </Grid.Column>
         </Grid.Row>                     
           </Grid>
        </Segment>

        <Segment color  = "green">
           <Grid columns ={3}>
            <Grid.Row>
         <Grid.Column textAlign = "left" width = {10}>Something else</Grid.Column>
         <Grid.Column textAlign = "right" width = {3}>$20.00</Grid.Column>
         <Grid.Column textAlign = "" width = {3}>
         <Icon name= "edit" bordered/>
         <Icon name= "trash" bordered/>
         </Grid.Column>
         </Grid.Row>                     
           </Grid>
        </Segment>

        <Segment color  = "red">
           <Grid columns ={3}>
            <Grid.Row>
         <Grid.Column textAlign = "left" width = {10}>Something</Grid.Column>
         <Grid.Column textAlign = "right" width = {3}>$30.00</Grid.Column>
         <Grid.Column textAlign = "" width = {3}>
         <Icon name= "edit" bordered/>
         <Icon name= "trash" bordered/>
         </Grid.Column>
         </Grid.Row>                     
           </Grid>
        </Segment>
        <Header as="h3"> Add New Transaction </Header>
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

        <Button.Group style = {{ marginTop: 20}}>
        <Button> Cancel </Button>
        <Button.Or/>
        <Button primary> Ok </Button>
        </Button.Group>
        </Form>


    </Container>
  );
}

export default App;
