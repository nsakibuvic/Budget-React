import {Container, Segment} from "semantic-ui-react"
import './App.css';
import MainStatistics from "./components/MainStatistics"
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import MainGridColumn from "./components/MainGridColumn"
import DisplayBalances from "./components/DisplayBalances";

function App() {
  return (
    <Container>
     <MainHeader title= "Budget" type= "h1"/>     
       <MainStatistics size = "small" title = "Your Balance" value = "2550.53"/>
        <Segment textAlign = "center">
         <DisplayBalances />
        </Segment>

        <MainHeader      title= "History" type= "h3" />  
        <MainGridColumn  description= "income" value= "10" />     
        <MainGridColumn  description= "expense" value= "20" isExpense />        
        <MainGridColumn  description= "income" value= "30" />
      
        <MainHeader title= "Add New Transaction" type ="h3"/>
        <MainGridColumn number= "3" description= "expense" value= "40" isExpense />
        
       <NewEntryForm />
    </Container>
  );
}

export default App;
