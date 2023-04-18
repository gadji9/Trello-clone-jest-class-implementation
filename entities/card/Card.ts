class Card {
  id: number | string;
  name: string;
  description: string;

  status: string;

  constructor(name: string, description: string, status: string) {
    this.id = Date.now();
    this.name = name;
    this.description = description;
    this.status = status;
  }
}

export default Card;
