import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProgramCard from "../program/ProgramCard";

const mockProgram = {
  ID: 1,
  "Program Name": "Project Tiger",
  Description: "Protecting tigers",
  Duration: "Ongoing",
};

test("renders program name", () => {
  render(
    <BrowserRouter>
      <ProgramCard program={mockProgram} />
    </BrowserRouter>
  );

  expect(screen.getByText(/Project Tiger/i)).toBeInTheDocument();
});
