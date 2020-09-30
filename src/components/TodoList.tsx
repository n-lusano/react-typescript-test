import React, { useState } from "react";
import { Button, List, ListItem, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Item } from "../model";
import TodoItem from "./TodoItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TodoList() {
  const itemsList = [
    {
      id: 0,
      text: "Make this app",
      tags: ["react", "typescript"],
      isDone: false,
    },
    {
      id: 1,
      text: "Start learning TypeScript",
      tags: ["learn", "typescript"],
      isDone: false,
    },
    {
      id: 2,
      text: "Hate TypeScript a bit",
      tags: ["frustrated", "typescript"],
      isDone: false,
    },
    {
      id: 3,
      text: "Relearn how to use React Hooks apparently",
      tags: ["frustrated", "react"],
      isDone: false,
    },
    {
      id: 4,
      text: "The filter finally works",
      tags: ["excited", "react"],
      isDone: false,
    },
  ];
  const [list, setList] = useState<Item[]>(itemsList);
  const [requiredTags, setRequiredTags] = useState<string[]>([]);
  const [filtered, setFiltered] = useState<Boolean>(false);
  const tags = Array.from(new Set(itemsList.map((item) => item.tags).flat()));

  //called by onChange in TodoItem component
  const toggle = (id: number) => {
    const items = list.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isDone: !item.isDone,
        };
      }
      return item;
    });
    setList(items);
  };

  //a function that toggles a given tag
  const toggleTagRequired = (tag: string) => {
    const filteredItems = [
      ...itemsList.filter((item) => item.tags.includes(tag)),
    ];
    setList(filteredItems);

    const filterTag = tags.filter((filterTag) => filterTag === tag);
    setRequiredTags(filterTag);

    setFiltered(!filtered);
  };

  const classes = useStyles();

  return (
    <>
      <div>
        Tags:{" "}
        {tags.map((tag) => {
          return (
            <Button
              color="secondary"
              size="small"
              key={tag}
              style={{
                fontWeight: requiredTags.includes(tag) ? "bold" : undefined,
              }}
              onClick={() => toggleTagRequired(tag)}
            >
              {tag}
            </Button>
          );
        })}
        <Button
          size="small"
          onClick={() => (setList(itemsList), setRequiredTags([]))}
        >
          All
        </Button>
      </div>
      <br />
      <List component="nav" className={classes.root}>
        {list.map((item) => {
          return (
            <div key={item.id}>
              <ListItem button key={item.id}>
                <TodoItem
                  key={item.id}
                  item={item}
                  toggleDone={() => toggle(item.id)}
                />
              </ListItem>
              <Divider key={item.text} />
            </div>
          );
        })}
      </List>
    </>
  );
}
