import React from "react";
import { Item } from "../model";

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
      <label
        style={{
          textDecoration: props.item.isDone ? "line-through" : undefined,
        }}
      >
        <input
          type="checkbox"
          checked={props.item.isDone}
          onChange={props.toggleDone}
        />{" "}
        {props.item.text} (
        {props.item.tags.map((tag, i) => {
          if (props.item.tags[i + 1]) {
            return <span key={i}>{tag}, </span>;
          } else {
            return <span key={i}>{tag}</span>;
          }
        })}
        )
      </label>
    </div>
  );
}
