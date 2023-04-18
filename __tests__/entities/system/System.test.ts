import SystemEntity from "@/entities/system/System";

const localStorageMock = (function () {
  let store: any = {};

  return {
    getItem(key: string) {
      return store[key];
    },

    setItem(key: string, value: string) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key: string) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

describe("System", () => {
  let system = new SystemEntity([]);

  beforeEach(() => {
    system = new SystemEntity([]);
  });
  it("Init with no categories", () => {
    const mockInit = jest.fn(system.init);
    mockInit();

    expect(mockInit).toBeCalledTimes(1);
  });

  it("Init with categories", () => {
    localStorage.setItem(
      "categories",
      JSON.stringify([
        {
          id: 12313123123,
          name: "asdawdasdaw",
          cards: [{ id: 1323232, name: "ws", description: "sssssssssss" }],
        },
      ])
    );
    system.init();
    expect(system.categories.length).toBe(1);
  });

  it("Create category", () => {
    const category = system.createCategory("Category name");

    expect(system.categories.length).toBe(1);
  });

  it("Destroy category", () => {
    const category = system.createCategory("Category name");

    system.destroyCategory(category);

    expect(system.categories.length).toBe(0);
  });

  it("Update localstorage", () => {
    const category = system.createCategory("Category name");

    expect(Array.isArray(JSON.parse(localStorage.getItem("categories")!))).toBe(
      true
    );

    expect(JSON.parse(localStorage.getItem("categories")!).length).toBe(1);
  });
});
