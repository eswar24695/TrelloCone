import { AddItemButton, CardContainer, ColumnContainer, ColumnTitle } from "./styles";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./state/AppStateContext";

type ColumnProps = {
  text: String;
  id:string;
};

export const Column = ({ text,id }: ColumnProps) => {
  const {getTaskById} =useAppState();
  
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
        onAdd={console.log}
        dark
      />
      </ColumnContainer>
    </>
  );
};
