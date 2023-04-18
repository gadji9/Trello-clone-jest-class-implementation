import React, { FunctionComponent, useState } from "react";
import ModalBackdrop from "@/UI/Modal";
import ModalCard from "@/UI/Modal/ModalCard";
import { ICustomModal } from "@/UI/Modal/types";
import RoundedInput from "../UI/Input/RoundedInput";
import Button from "@/UI/Button";

interface ICreateCategoryModal extends ICustomModal {
  onSave: (name: string) => void;
}

const CreateCategoryModal: FunctionComponent<ICreateCategoryModal> = ({
  state,
  setState,
  onSave,
}) => {
  const [name, setName] = useState("");
  const [errors, setErrors] = useState<{ [name: string]: string }>({});

  return (
    <ModalBackdrop state={state} setState={setState}>
      <ModalCard step={0}>
        <div className="w-[85vw] lg:w-[590px] lg:h-[220px] bg-white rounded-lg lg:p-4 flex flex-col justify-between">
          <div>
            <p className="font-semibold">Создание категории</p>
            <div className="mt-3">
              <RoundedInput
                type="text"
                label="Название"
                placeholder=""
                value={name}
                onChange={setName}
                error={errors.name}
              />
            </div>
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
                  onSave(name);
                  setName("");
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
export default CreateCategoryModal;
