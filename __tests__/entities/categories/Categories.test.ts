import Category from "@/entities/category/Category";

describe("Categories", () => {
  let category = new Category("Category name", []);

  beforeEach(() => {
    category = new Category("Category name", []);
  });

  it("Create card", () => {
    category.createCard("Card name", "Card description");

    expect(category.cards.length).toBe(1);
  });

  it("Destroy card", () => {
    const card = category.createCard("Card name", "Card description");

    category.destroyCard(card);

    expect(category.cards.length).toBe(0);
  });

  it("Save card", () => {
    const card = category.saveCard("Card name", "Card description");
    category.saveCard("Card names", "Card description", card);

    expect(category.cards.length).toBe(1);
    expect(card.name).toBe("Card names");
  });
});
