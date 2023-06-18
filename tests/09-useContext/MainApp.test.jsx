import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";

describe("Pruebas en <MainApp/>", () => {
  test("should show HomePage", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText('HomePage')).toBeTruthy();
  });

  test("should show LoginPage", () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>
    );    

    expect(screen.getByText('LoginPage')).toBeTruthy();
    expect(screen.getAllByRole('link')[3].classList.contains('active') ).toBe(true);
  });
});
