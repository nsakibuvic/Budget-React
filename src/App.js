import './App.css';

import { useEffect, useState } from 'react';
import { Container, Segment } from 'semantic-ui-react';

import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import MainStatistics from './components/MainStatistics';
import ModelEdit from './components/ModelEdit';
import NewEntryForm from './components/NewEntryForm';

function App() {

  const [entries, setEntries]=  useState (initialEntries)
  const [description, setDescription] = useState ('')
  const [value, setValue]= useState ('')
  const [isExpense, setIsExpense] = useState (true)
  const [isOpen, setIsOpen] = useState ()
  const [entryId, setEntryId] = useState ()
  const [incomeTotal, setIncomeTotal] = useState (0)
  const [expenseTotal, setExpenseTotal] = useState (0)
  const [total, setTotal] = useState (0)




  useEffect(() => {
    if(!isOpen && entryId){
      const index= entries.findIndex (entry => entry.id === entryId)
      const newEntries = [...entries]
      newEntries[index].description = description 
      newEntries[index].value = value
      newEntries[index].isExpense= isExpense
      setEntries(newEntries)
      resetEntry()
    }
    // esLint-disable-next-line-react-hooks/exhaustive-deps
  }, [isOpen])

   useEffect(() => {
     let totalIncome = 0
     let totalExpenses = 0

     entries.map(entry => {
       if(entry.isExpense){
        return( totalExpenses += Number(entry.value))
       }else{
        return (totalIncome += Number(entry.value))
       }
     })
     setTotal (totalIncome - totalExpenses)
     setIncomeTotal (totalIncome)
     setExpenseTotal (totalExpenses)

     console.log(`total income is ${totalIncome} and total expense is ${totalExpenses} `)
   }, [entries])



  function resetEntry() {
    setDescription('')
    setValue('')
    setIsExpense('')
  }
  

  function deleteEntry (id){    
  const result = entries.filter(entry => entry.id !== id)
   setEntries(result)
  }
  
  function editEntry (id){
      console.log (`edit entry line with id ${id}`)
      if (id){
      const index= entries.findIndex (entry => entry.id === id)
      const entry= entries[index]
      setEntryId(id)
      setDescription(entry.description)
      setValue(entry.value)
      setIsExpense(entry.isExpense)
      setIsOpen(true)
    }
  }

  function addEntry (){
    const result = entries.concat({
      id: entries.length+1, 
      description,
      value, 
      isExpense
    })
  setEntries(result)
  resetEntry()

  }

  return (
    <Container>
     <MainHeader title= "Budget" type= "h1"/>     
       <MainStatistics size = "small" title = "Your Balance" value = {total}/>
        <Segment textAlign = "center">
        <DisplayBalances expenseTotal = {expenseTotal} incomeTotal = {incomeTotal} />
        </Segment>
        <MainHeader title= "History" type= "h3" />        
        <EntryLines 
        entries = {entries} 
        deleteEntry= {deleteEntry} 
        editEntry = {editEntry}/>
         <NewEntryForm
          description= {description} 
          value = {value} 
          isExpense = {isExpense}
          setDescription = {setDescription} 
          setValue = {setValue}
          setIsExpense = {setIsExpense}
          addEntry = {addEntry}/>
          
          <ModelEdit 
          isOpen = {isOpen} 
          setIsOpen= {setIsOpen} 
          description= {description} 
          value = {value} 
          isExpense = {isExpense}
          setDescription = {setDescription} 
          setValue = {setValue}
          setIsExpense = {setIsExpense}
          addEntry = {addEntry}  
          />
    </Container>
  );
}

export default App;

var initialEntries= [
  {
    id: 1,
    description : "Work Income", 
    value : 1000, 
    isExpense : false
  }, 
  {
    id: 2,
    description : "Water bill", 
    value : 20, 
    isExpense : true
  }, 
  {
    id: 3,
    description : "Rent", 
    value : 300, 
    isExpense : true
  }, 
  {
    id: 4,
    description : "Power Bill", 
    value : 50, 
    isExpense : true
  }
]