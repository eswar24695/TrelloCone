// import './App.css'
import { AppContainer, CardContainer, ColumnContainer, ColumnTitle } from './styles'
import { Column } from './Column'
import { AddNewItem } from './AddNewItem'
import { useAppState } from './state/AppStateContext'
import { addList, Action } from './state/actions';

function App() {
  const {lists,dispatch}=useAppState();
  return (
    <>
    <AppContainer>
      {
        lists.map((list)=>{
          // console.log("Rendering list:", list); 
          return (
            <Column text={list.text} id={list.id} key={list.id}/>
          )

        })
      }
      <AddNewItem
        toggleText="+ Add another list"
        onAdd={(text)=>dispatch(addList(text))}
      />
    </AppContainer>
    </>
   
  )
}

export default App
