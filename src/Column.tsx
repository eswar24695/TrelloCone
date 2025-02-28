import { AddItemButton, CardContainer, ColumnContainer, ColumnTitle } from "./styles";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./state/AppStateContext";
import { addTask } from "./state/actions";

type ColumnProps = {
  text: String;
  id:string;
};

export const Column = ({ text,id }: ColumnProps) => {
  const {getTaskById,dispatch} =useAppState();
  
  const tasks=getTaskById(id);

  return (
    <>
      <ColumnContainer>
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
