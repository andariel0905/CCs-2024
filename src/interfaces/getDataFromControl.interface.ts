import { ISheetsData } from './sheetsData.interface';

export type IGetDataFromControl = (
  sheetsData: ISheetsData,
  sheetsFormat: ISheetsData,
) => [ISheetsData, ISheetsData];
