import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"

it("Should Contact Component loads or not", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading")
//   console.log(heading)
  expect(heading).toBeInTheDocument()
});

