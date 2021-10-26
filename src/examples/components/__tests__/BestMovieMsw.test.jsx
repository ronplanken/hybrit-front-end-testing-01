import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { BestMovie } from "../BestMovie";

test("if BestMovie retrieves a response and shows the title", async () => {
  render(<BestMovie />);

  const button = screen.getByRole("button", {
    name: "What is the best StarWars movie?",
  });

  userEvent.click(button);

  expect(await screen.findByText("The Phantom Menace")).toBeInTheDocument();

});
