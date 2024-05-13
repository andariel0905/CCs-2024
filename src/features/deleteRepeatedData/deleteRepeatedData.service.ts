import { environmentService } from '@core/environment';
import { getDataFromCCS } from '@features/getData/getDataFromCCS.setvice';
import { ISheetsData } from 'src/interfaces/sheetsData.interface';

export const deleteRepeatedData = (
  dataFromControl: ISheetsData,
): ISheetsData => {
  const sheetNames = environmentService.sheetsNames;
  const dataFromCCS = getDataFromCCS();
  const clearData: ISheetsData = {};
  sheetNames.forEach((sheetName) => {
    clearData[sheetName] = new Map([
      ...dataFromControl[sheetName],
      ...dataFromCCS[sheetName],
    ]);
  });
  return clearData;
};
