import { AddItemButton } from "./styles";
import { useState } from 'react';

type AddItemButtonProps={
    toggleText:string;
    onAdd(text:string):void;
    dark?:boolean
}

export const AddNewItem=(({toggleText,onAdd,dark}:AddItemButtonProps)=>{
    const [showForm,setShowForm]=useState("false");
    if(showForm){

    }
    return(
        <AddItemButton dark={dark} onClick={()=>setShowForm("true")}>{toggleText}</AddItemButton>


    )
})