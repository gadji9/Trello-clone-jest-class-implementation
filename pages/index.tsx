import { useEffect, useState } from "react";

import Category from "@/components/blocks/category/Category";
import CreateCategoryModal from "@/components/modals/CreateCategory";

import System from "@/entities/system/System";
import CategoryEntity from "@/entities/category/Category";
import CardEntity from "@/entities/card/Card";

import DefaultLayout from "@/layouts/DefaultLayout";
import Plus from "@/assets/icons/plus";

export default function Home() {
  const [system, setSystem] = useState(new System([]));

  const [createCategoryModal, setCreateCategoryModal] = useState(false);
  const [draggingCard, setDraggingCard] = useState<CardEntity>();
  const [draggingCategory, setDraggingCategory] = useState<CategoryEntity>();

  useEffect(() => {
    system.init();
    updateSystem();
  }, []);

  function onCategoryCreate(name: string) {
    system.createCategory(name);
    updateSystem();
  }

  function onCategoryDelete(category: CategoryEntity) {
    system.destroyCategory(category);
    updateSystem();
  }

  function updateSystem() {
    setSystem(system.getCopySystem());
  }
  return (
    <>
      <DefaultLayout>
        <div>
          <div className="w-full flex justify-end">
            <div
              className="cursor-pointer hover:opacity-80 transition"
              onClick={() => setCreateCategoryModal(true)}
              data-testid="open-category-modal"
            >
              <Plus />
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          {system.categories.map((category) => (
            <div className="min-w-[300px]" key={category.id}>
              <Category
                category={category}
                draggingCategory={draggingCategory}
                setDraggingCategory={setDraggingCategory}
                setDraggingCard={setDraggingCard}
                draggingCard={draggingCard}
                onDelete={() => onCategoryDelete(category)}
              />
            </div>
          ))}
        </div>
      </DefaultLayout>

      <CreateCategoryModal
        state={createCategoryModal}
        setState={setCreateCategoryModal}
        onSave={onCategoryCreate}
      />
    </>
  );
}
