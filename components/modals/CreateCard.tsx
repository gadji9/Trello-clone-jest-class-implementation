import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

import CardEntity from "@/entities/card/Card";

import Trash from "@/assets/icons/trash";

import ModalBackdrop from "@/UI/Modal";
import ModalCard from "@/UI/Modal/ModalCard";
import { ICustomModal } from "@/UI/Modal/types";
import RoundedInput from "../UI/Input/RoundedInput";
import Button from "@/UI/Button";

interface ICreateCardModal extends ICustomModal {
  card: CardEntity | undefined;
  onSave: (name: string, description: string) => void;
  onCardDelete: () => void;
}

const CreateCardModal: FunctionComponent<ICreateCardModal> = ({
  state,
  card,
  setState,
  onSave,
  onCardDelete,
}) => {
  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [errors, setErrors] = useState<{ [name: string]: string }>({});

  const editorRef = useRef<null | any>(null);

  useEffect(() => {
    setName(card?.name || "");
    setDescription(card?.description || "");
    if (editorRef.current)
      editorRef.current.contentDocument.activeElement.innerHTML =
        card?.description || "";
  }, [card]);

  function onDelete() {
    onCardDelete();
    setState?.(false);
  }

  return (
    <ModalBackdrop state={state} setState={setState}>
      <ModalCard step={0}>
        <div className="w-[85vw] lg:w-[590px] lg:h-[550px] bg-white rounded-lg lg:p-4 flex flex-col justify-between">
          <div>
            {!card ? (
              "Создание карточки"
            ) : (
              <div className="flex justify-between">
                <p>Изменение карточки</p>
                <div
                  className="rounded-full w-[30px] bg-purple flex justify-center cursor-pointer"
                  onClick={() => onDelete()}
                >
                  <Trash widht={15} />
                </div>
              </div>
            )}
            <p className="font-semibold"></p>
            <div className="mt-3">
              <RoundedInput
                type="text"
                label="Название"
                placeholder=""
                value={name || ""}
                onChange={setName}
                error={errors.name}
              />
            </div>
          </div>
          <div className="mt-1">
            <p className="font-semibold">Описание карточки</p>
            <Editor
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue=""
              apiKey={process.env.NEXT_PUBLIC_TINYMCE_API}
              init={{
                height: 300,
                max_height: 300,
                menubar: false,

                toolbar:
                  "undo redo | formatselect | " +
                  "bold italic backcolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
          </div>

          <div className="w-full flex justify-end">
            <div className="w-5/6 lg:w-2/3 flex items-center gap-10 align-right">
              <div
                className="cursor-pointer"
                onClick={() => {
                  setState?.(false);
                }}
              >
                Отмена
              </div>
              <Button
                onClick={() => {
                  onSave(name || "", description || "");

                  if (!card) {
                    setName("");
                    setDescription("");
                    if (editorRef.current) {
                      editorRef.current.contentDocument.activeElement.innerHTML =
                        "";
                    }
                  }
                  setState?.(false);
                }}
              >
                Сохранить
              </Button>
            </div>
          </div>
        </div>
      </ModalCard>
    </ModalBackdrop>
  );
};
export default CreateCardModal;
