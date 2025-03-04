import {createContext  ,useContext,Dispatch} from "react";
import { appStateReducer,Appstate, List, Task } from "./appStateReducer";
import { useImmerReducer } from "use-immer";
import { Action } from "./actions";
import { DragItem } from "../DragItem";


const appData:Appstate={
    draggedItem:null,
    lists:[
        {
            id:"0",
            text:"To Do",
            tasks:[{id:"c0",text:"Generate app Scaffold"}]
        },
        {
            id:"1",
            text:"In Progress",
            tasks:[{id:"c2",text:"Learn Typescript"}]
        },
        {
            id:"2",
            text:"Done",
            tasks:[{id:"c3",text:"Begin to use static typing"}] 
        }
    ]
}
type AppStateContextProps={
    lists:List[]
    getTaskById(id:string):Task[] 
    dispatch:Dispatch<Action>
    draggedItem:DragItem | null
}

const AppStateContext=createContext<AppStateContextProps>({} as AppStateContextProps)

export const AppStateProvider:React.FC= ({children}) =>{
    const [state,dispatch]=useImmerReducer(appStateReducer,appData)
    const {lists,draggedItem}=state;
    const getTaskById=(id:string)=>{
        return lists.find((list)=>list.id===id).tasks || []

    };
    return (
        <AppStateContext.Provider value={{lists,getTaskById,dispatch,draggedItem}}>
            {children}
        </AppStateContext.Provider>
    )
}

export const useAppState =()=>{
    return useContext(AppStateContext)
}