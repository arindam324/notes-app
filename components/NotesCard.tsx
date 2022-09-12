import React, { useMemo } from "react";
import { useMantineColorScheme } from "@mantine/core";

import { useEditor } from "../Context/EditorProvider";

type NotesCardProps = {
  heading: string;
  description: string;
  tags: string[];
  date: string;
  value?: string;
};

const COLORS = ["#1690FF", "#e6005b", "#e0d040", "#40e0d0", "#0b5e70"];

const NotesCard: React.FC<NotesCardProps> = (props) => {
  const { heading, description, tags, date, value } = props;
  {
    /* TODO: find another way rather than calling the hook twice */
  }
  const { colorScheme } = useMantineColorScheme();

  const randomColor = useMemo(() => {
    const randomInt = Math.floor(Math.random() * 5) + 1;
    return COLORS[randomInt];
  }, [COLORS]);

  const editor = useEditor();

  return (
    <div
      onClick={() => {
        value && editor?.setValue(value);
      }}
      className={`px-2 cursor-pointer    p-2 ${
        colorScheme === "dark" ? "hover:bg-gray-600 " : "hover:bg-gray-100"
      }`}
    >
      <h2 style={{ color: randomColor }} className={"text-2xl font-semibold"}>
        {heading}
      </h2>
      <p>{description}</p>
      <div className={"flex text-sm text-gray-500 mt-2 space-x-2"}>
        <p>{date}</p>
        {tags.map((tag) => (
          <span className={""}>{`#${tag}`}</span>
        ))}
      </div>
    </div>
  );
};

export default NotesCard;
