import { render, screen } from "@testing-library/react";
import Contact from "../../pages/Contact";
import { BrowserRouter } from "react-router-dom";

test("renders FAQ section", () => {
  render(
    <BrowserRouter>
      <Contact />
    </BrowserRouter>
  );

  expect(screen.getByText(/Frequently Asked Questions/i)).toBeInTheDocument();
});
