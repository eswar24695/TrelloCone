// import './App.css'
import { AppContainer, CardContainer, ColumnContainer, ColumnTitle } from './styles'
import { Column } from './Column'
import { AddNewItem } from './AddNewItem'

function App() {
  return (
    <>
    <AppContainer>
      <Column text="Todo:"/>
      <AddNewItem
        toggleText="+ Add another card"
        onAdd={(text)=>console.log(text)}
      />
    </AppContainer>
    </>
   
  )
}

export default App
