export type Action=
   | { type:"ADD_LIST"; payload:{text:string}}
   | {type:"ADD_TASK"; payload:{text:string;listId:string}}

export const addTask=(text:string,listId:string)=>({
    type:"ADD_TASK",
    payload:{
        text,listId
    }
})
export const addList=(text:string)=>({
    type:"ADD_LIST",
    payload:{
        text
    }
})
