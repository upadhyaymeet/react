import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("Should render Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument();
});

it("Should render Header component with 0 cart items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart 0");
  expect(cartItems).toBeInTheDocument();
});

it("Should render Header Component with only Cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cart = screen.getByText(/Cart/);
  expect(cart).toBeInTheDocument();
});

it("Should Change Login button to Logout", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", "Login");
  expect(loginButton).toBeInTheDocument();
  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", "Logout");
  expect(logoutButton).toBeInTheDocument();
});

it("Should Change Logout button to Login", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );


  const loginButton = screen.getByRole("button", {name:"Login"})
  expect(loginButton).toBeInTheDocument()
  fireEvent.click(loginButton)

  const logoutButton = screen.getByRole("button", {name:"Logout"})
  expect(logoutButton).toBeInTheDocument()
  fireEvent.click(logoutButton)

  const loginButtonClicked = screen.getByRole("button", {name:"Login"})
  expect(loginButtonClicked).toBeInTheDocument()
});
