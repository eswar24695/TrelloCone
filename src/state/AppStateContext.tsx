import {createContext  ,useContext} from "react";

type Task={
    id:string;
    text:string;
}
type List = {
    id:string;
    text:string;
    tasks:Task[];
}

export type Appstate={
    lists:List[];
}

const appData:Appstate={
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
}

const AppStateContext=createContext<AppStateContextProps>({} as AppStateContextProps)

export const AppStateProvider:React.FC= ({children}) =>{
    const {lists}=appData;
    const getTaskById=(id:string)=>{
        return lists.find((list)=>list.id===id).tasks || []

    };
    return (
        <AppStateContext.Provider value={{lists,getTaskById}}>
            {children}
        </AppStateContext.Provider>
    )
}

export const useAppState =()=>{
    return useContext(AppStateContext)
}