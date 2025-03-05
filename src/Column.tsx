import { AddItemButton, CardContainer, ColumnContainer, ColumnTitle } from "./styles";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./state/AppStateContext";
import { addTask, moveList } from "./state/actions";
import { useRef } from 'react';
import { useItemDrag } from "./utils/useItemDrag";
import { useDrop } from "react-dnd";
import { throttle } from "throttle-debounce-ts";
import { isHidden } from "./utils/isHidden";

type ColumnProps = {
  text: string;
  id:string;
};

export const Column = ({ text,id }: ColumnProps) => {
  const {getTaskById,dispatch,draggedItem} =useAppState();
  const ref=useRef<HTMLDivElement>(null)
  const {drag}=useItemDrag({type:"COLUMN",id,text})
  const [,drop]=useDrop({
    accept:"COLUMN",
    hover:throttle(200,()=>{
      if(!draggedItem){
        return
      }
      if(draggedItem.type==="COLUMN"){
        if(draggedItem.id===id){
          return
        }
        dispatch(moveList(draggedItem.id,id))
      }
    })
  })
  drag(drop(ref))
  
  const tasks=getTaskById(id);

  return (
    <>
      <ColumnContainer ref={ref} isHidden={isHidden(draggedItem,"COLUMN",id)}>
        <ColumnTitle>{text}</ColumnTitle>
        {
          tasks.map((task)=>(
            <Card text={task.text} key={task.id} id={task.id}/>
          ) )
        }
        {/* <Card text="Generate app scaffold"/>
        <Card text="Learn Typescript"/>
        <Card text="Begin to use static typing"/> */}
        <AddNewItem
        toggleText="+ Add another card"
        onAdd={(text)=> dispatch(addTask(text,id))}
        dark
      />
      </ColumnContainer>
    </>
  );
};
