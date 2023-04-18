import { render, screen, fireEvent, within } from "@testing-library/react";

import Home from "../pages";

test("Create category", () => {
  render(<Home />);
  const modal = screen
    .getByText("Создание категории")
    .closest("#modalBackdrop");
  expect(modal).toHaveClass("opacity-0");

  const plusButton = screen.getByTestId("open-category-modal");

  fireEvent.click(plusButton);
  expect(modal).toHaveClass("opacity-100");

  const nameInput = within(modal as HTMLElement).getByRole("textbox");
  const saveButton = within(modal as HTMLElement).getByRole("button");

  fireEvent.change(nameInput, { target: { value: "Название" } });
  fireEvent.click(saveButton);

  expect(screen.getByText("Карточек пока нет")).toBeDefined();
});

test("Create card", () => {
  render(<Home />);

  const modal = screen.getByText("Создание карточки").closest("#modalBackdrop");

  if (modal) {
    expect(modal).toBeDefined();
    expect(modal).toHaveClass("opacity-0");

    const plusButton = screen.getByTestId("open-card-modal");

    fireEvent.click(plusButton);
    expect(modal).toHaveClass("opacity-100");

    const nameInput = within(modal as HTMLElement).getByRole("textbox");
    const descriptionInput = document.querySelector("#card-description");

    const saveButton = within(modal as HTMLElement).getByRole("button");

    fireEvent.change(nameInput, { target: { value: "Название-карточки" } });
    fireEvent.change(descriptionInput as HTMLElement, {
      target: { value: "Описание" },
    });

    fireEvent.click(saveButton);

    expect(screen.getByText("Название-карточки")).toBeDefined();
  }
});
