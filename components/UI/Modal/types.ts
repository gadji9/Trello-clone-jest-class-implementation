import { Dispatch, SetStateAction } from 'react';

export interface ICustomModal {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}
