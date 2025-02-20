// import './App.css'
import { AppContainer, CardContainer, ColumnContainer, ColumnTitle } from './styles'
import { Column } from './Column'
import { AddNewItem } from './AddNewItem'
import { useAppState } from './state/AppStateContext'

function App() {
  const {lists}=useAppState();
  return (
    <>
    <AppContainer>
      {
        lists.map((list)=>{
          return (
            <Column text={list.text} id={list.id} key={list.id}/>
          )

        })
      }
      <AddNewItem
        toggleText="+ Add another card"
        onAdd={(text)=>console.log(text)}
      />
    </AppContainer>
    </>
   
  )
}

export default App
