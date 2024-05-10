import { getDataFromCCS } from '@features/getData/getDataFromCCS.setvice';
import { ISheetsData } from 'src/interfaces/sheetsData.interface';

export const deleteRepeatedData = (
  dataFromControl: ISheetsData,
): ISheetsData => {
  const dataFromCCS = getDataFromCCS();
  console.log(dataFromControl);
  console.log(dataFromCCS);
  return dataFromCCS;
};
