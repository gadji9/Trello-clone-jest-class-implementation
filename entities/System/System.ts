import Category from "@/entities/category/Category";

class System {
  categories: Category[];

  constructor(categories: Category[]) {
    this.categories = categories;
  }

  init() {
    if (localStorage.getItem("categories")) {
      this.categories = [];

      const localCategories: Category[] = JSON.parse(
        localStorage.getItem("categories")!
      );

      localCategories.forEach((category) => {
        this.categories.push(
          Object.setPrototypeOf(category, Category.prototype)
        );
      });
    }
  }

  getCopySystem() {
    const newSystem = new System([]);
    newSystem.categories = this.categories;

    return newSystem;
  }

  createCategory(name: string) {
    const newCategory = new Category(name, []);

    this.categories.push(newCategory);
    this.updateLocalStorage();

    return newCategory;
  }

  destroyCategory(category: Category) {
    this.categories = this.categories.filter((value) => value !== category);
    this.updateLocalStorage();
  }

  private updateLocalStorage() {
    localStorage.setItem("categories", JSON.stringify(this.categories));
  }
}

export default System;
