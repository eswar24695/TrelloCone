import { useState } from "react";
import { NewItemContainer, NewItemButton, NewItemInput } from "./styles";
import { useFocus } from "./utils/useFocus";

type NewItemFormProps = {
  onAdd(text: string): void;
};

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const focus = useFocus();
  const [text, setText] = useState("");
  const handleAddText=(event:React.KeyboardEvent<HTMLInputElement>)=>{
    if(event.key==="Enter"){
        onAdd(text)
    }
  }
  
  return (
    <NewItemContainer>
      <NewItemInput
        ref={focus}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyUp={handleAddText}
      ></NewItemInput>
      <NewItemButton
        onClick={() => {
          onAdd(text);
        }}
      >
        Create
      </NewItemButton>
    </NewItemContainer>
  );
};
