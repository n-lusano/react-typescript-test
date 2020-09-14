import React, { useState } from "react";

import { Item } from "../model";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [list, setList] = useState<Item[]>([
    {
      id: 0,
      text: "Make this app",
      tags: ["react", "typescript"],
      isDone: false,
    },
    {
      id: 1,
      text: "Fall in love with TypeScript",
      tags: ["romantic", "typescript"],
      isDone: false,
    },
  ]);

  //called by onChange in TodoItem component
  const toggle = (id: number) => {
    const newItems = list.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isDone: !item.isDone,
        };
      }
      return item;
    });
    setList(newItems);
  };

  return (
    <>
      {list.map((item) => {
        return (
          <TodoItem
            key={item.id}
            item={item}
            toggleDone={() => toggle(item.id)}
          />
        );
      })}
    </>
  );
}
