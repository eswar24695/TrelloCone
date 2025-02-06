import { AddItemButton, CardContainer, ColumnContainer, ColumnTitle } from "./styles";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";

type ColumnProps = {
  text: String;
};

export const Column = ({ text }: ColumnProps) => {
  return (
    <>
      <ColumnContainer>
        <ColumnTitle>{text}</ColumnTitle>
        <Card text="Generate app scaffold"/>
        <Card text="Learn Typescript"/>
        <Card text="Begin to use static typing"/>
        <AddNewItem
        toggleText="+ Add another card"
        onAdd={console.log}
        dark
      />
      </ColumnContainer>
    </>
  );
};
