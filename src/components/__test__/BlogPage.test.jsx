import { screen } from "@testing-library/react";
import Blog from "../../pages/Blog";
import { renderWithProviders } from "../../test-utils";

test("renders blog filter bar with All button", () => {
  renderWithProviders(<Blog />);
  expect(
    screen.getByRole("button", { name: /all/i })
  ).toBeInTheDocument();
});
