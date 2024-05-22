import { environmentService } from '@core/environment';
import { getDataFromCCS } from '@features/getData/getDataFromCCS.setvice';
import { ISheetsData } from 'src/interfaces/sheetsData.interface';

export const deleteRepeatedData = (
  dataFromControl: ISheetsData,
  formatsFromControl: ISheetsData,
): [ISheetsData, ISheetsData] => {
  const sheetNames = environmentService.sheetsNames;
  const [dataFromCCS, formatsFromCCS] = getDataFromCCS();
  const clearData: ISheetsData = {};
  const clearFormats: ISheetsData = {};
  sheetNames.forEach((sheetName) => {
    clearData[sheetName] = new Map([
      ...dataFromControl[sheetName],
      ...dataFromCCS[sheetName],
    ]);
    clearFormats[sheetName] = new Map([
      ...formatsFromControl[sheetName],
      ...formatsFromCCS[sheetName],
    ]);
  });
  return [clearData, clearFormats];
};
