import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import { DragEvent } from "react";

import CategoryEntity from "entities/category/Category";
import CardEntity from "@/entities/card/Card";

import Trash from "@/assets/icons/trash";
import Plus from "@/assets/icons/plus";
import CreateCardModal from "@/components/modals/CreateCard";

const Category: FunctionComponent<{
  category: CategoryEntity;
  draggingCard: CardEntity | undefined;
  draggingCategory: CategoryEntity | undefined;
  setDraggingCategory: Dispatch<SetStateAction<CategoryEntity | undefined>>;
  setDraggingCard: Dispatch<SetStateAction<CardEntity | undefined>>;
  onDelete: () => void;
}> = ({
  category,
  onDelete,
  draggingCategory,
  draggingCard,
  setDraggingCategory,
  setDraggingCard,
}) => {
  const [createCardModal, setCreateCardModal] = useState(false);
  const [updateCard, setUpdateCard] = useState<CardEntity>();
  const [style, setStyle] = useState({});

  function onCardSave(name: string, description: string) {
    category.saveCard(name, description, updateCard);
  }

  function onCardDelete() {
    category.destroyCard(updateCard!);
  }

  function onDragOver(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    if (draggingCard) {
      setStyle({ opacity: 0.5 });
    }
  }
  function onDragLeave(e: DragEvent<HTMLDivElement>) {
    setStyle({});
  }
  function onDragStart(e: DragEvent<HTMLDivElement>, card: CardEntity) {
    setDraggingCard(card);
    setDraggingCategory(category);
  }
  function onDragEnd(e: DragEvent<HTMLDivElement>) {
    setStyle({});
  }
  function onDrop(e: DragEvent<HTMLDivElement>) {
    if (!draggingCard) {
      return;
    }

    e.preventDefault();
    category?.createCard(draggingCard.name, draggingCard.description);

    draggingCategory?.destroyCard(draggingCard);

    setDraggingCard(undefined);
    setDraggingCategory(undefined);
    setStyle({});
  }

  return (
    <>
      <div className="bg-green p-5 rounded" style={style}>
        <div className="flex justify-between">
          <div className="text-black font-semibold text-lg">
            {category.name}
          </div>
          <div
            className="rounded-full w-[30px] bg-purple flex justify-center cursor-pointer"
            onClick={() => onDelete()}
          >
            <Trash widht={15} />
          </div>
        </div>
        <div className="mt-2">
          {category.cards.length ? (
            category.cards.map((card) => (
              <div
                onDragOver={(e) => onDragOver(e)}
                onDragLeave={(e) => onDragLeave(e)}
                onDragStart={(e) => onDragStart(e, card)}
                onDragEnd={(e) => onDragEnd(e)}
                onDrop={(e) => onDrop(e)}
                draggable={true}
                className="bg-purple h-10 rounded flex justify-center items-center font-semibold text-white mb-2 cursor-grab"
                onClick={() => {
                  setUpdateCard(card);
                  setCreateCardModal(true);
                }}
                key={card.id}
              >
                {card.name}
              </div>
            ))
          ) : (
            <div
              className="bg-purple h-10 rounded flex justify-center items-center font-semibold text-white"
              onDragOver={(e) => onDragOver(e)}
              onDrop={(e) => onDrop(e)}
              onDragEnd={(e) => onDragEnd(e)}
              onDragLeave={(e) => onDragLeave(e)}
              draggable={true}
            >
              Карточек пока нет
            </div>
          )}
        </div>
        <div className="mt-4">
          <div className=" h-10  flex justify-center items-center ">
            <div
              className="cursor-pointer hover:opacity-80 transition"
              onClick={() => {
                setCreateCardModal(true);
                setUpdateCard(undefined);
              }}
              data-testid="open-card-modal"
            >
              <Plus />
            </div>
          </div>
        </div>
      </div>

      <CreateCardModal
        state={createCardModal}
        setState={setCreateCardModal}
        onSave={onCardSave}
        card={updateCard}
        onCardDelete={onCardDelete}
      />
    </>
  );
};
export default Category;
