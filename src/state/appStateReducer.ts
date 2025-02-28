import { nanoid } from "nanoid/non-secure";
import { Action } from "./actions";
import { findItemIndexById } from "../utils/arrayUtils";

export type Task={
    id:string;
    text:string;
}
export type List = {
    id:string;
    text:string;
    tasks:Task[];
}

export type Appstate={
    lists:List[];
}

export const appStateReducer=(draft:Appstate,action:Action):Appstate | void=>{
    switch(action.type){
        case "ADD_LIST":{
            draft.lists.push({
                id:nanoid(),
                text:action.payload.text,
                tasks:[]
            })
            break
        }
        case "ADD_TASK":{
            const {text,listId}=action.payload
            const targetListIndex=findItemIndexById(draft.lists,listId)

            draft.lists[targetListIndex].tasks.push({
                id:nanoid(),
                text
            })
            break
        }

    }

}