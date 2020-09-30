import React from "react";
import { Item } from "../model";
import {
  FormControlLabel,
  Checkbox,
  Button,
  ButtonGroup,
} from "@material-ui/core";

type Props = {
  // we should receive a todo item object
  item: Item;

  // and a function that we don't have to give
  //  anything, and doesn't return anything either
  //  (it "just does" something)
  toggleDone: () => void;
};

export default function TodoItem(props: Props) {
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={props.item.isDone}
            onChange={props.toggleDone}
            name="isDoneCheckbox"
          />
        }
        label={props.item.text}
        style={{
          textDecoration: props.item.isDone ? "line-through" : undefined,
        }}
      />
      <br />
      <ButtonGroup
        color="secondary"
        size="small"
        variant="outlined"
        aria-label="outlined secondary button group"
        key={props.item.id}
      >
        {props.item.tags.map((tag) => {
          return <Button key={tag}>{tag}</Button>;
        })}
      </ButtonGroup>
    </div>
  );
}

// {props.item.tags.map((tag, i) => {
//   if (props.item.tags[i + 1]) {
//     return <span key={i}>{tag}, </span>;
//   } else {
//     return <span key={i}>{tag}</span>;
//   }
// })}
