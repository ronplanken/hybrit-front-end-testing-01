import React from "react";

interface Props {
  name?: string;
}

export const HelloWorld = ({ name = "World" }: Props): JSX.Element => {
  return (
    <span>
      Hello {name}
    </span>
  );
};