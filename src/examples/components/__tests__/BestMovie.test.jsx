import React from "react";
import { render, screen } from "@testing-library/react";
import { BestMovieService as mockBestMovieService } from "../../services/BestMovieService";
import { BestMovie } from "../BestMovie";
import userEvent from "@testing-library/user-event";

jest.mock("../../services/BestMovieService");

test("if BestMovie retrieves a automocked response and shows the title", async () => {
  mockBestMovieService.getMovie.mockResolvedValueOnce({
    title: "The Clone Wars",
  });

  render(<BestMovie />);

  const button = screen.getByRole("button", {
    name: "What is the best StarWars movie?",
  });

  userEvent.click(button);

  expect(await screen.findByText("The Clone Wars")).toBeInTheDocument();

});
