import Card from "@/entities/card/Card";

class Category {
  id: string | number;
  name: string;
  cards: Card[];

  constructor(name: string, cards: Card[]) {
    this.id = Date.now();
    this.name = name;
    this.cards = cards;
  }

  saveCard(name: string, description: string, card?: Card) {
    if (card) {
      const foundCardId = this.cards.findIndex((el) => el.id === card.id);
      this.cards[foundCardId].name = name;
      this.cards[foundCardId].description = description;
      return this.cards[foundCardId];
    }

    return this.createCard(name, description);
  }

  createCard(name: string, description: string) {
    const card = new Card(name, description, this.name);
    this.cards.push(card);
    this.updateLocalStorage();
    return card;
  }

  destroyCard(card: Card) {
    this.cards = this.cards.filter((el) => el.id !== card.id);
    this.updateLocalStorage();
  }

  private updateLocalStorage() {
    if (localStorage.getItem("categories")) {
      const categories: Category[] = JSON.parse(
        localStorage.getItem("categories")!
      );

      const thisIndex = categories.findIndex((value) => value.id === this.id);

      categories[thisIndex] = this;

      localStorage.setItem("categories", JSON.stringify(categories));
    }
  }
}
export default Category;
