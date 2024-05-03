import { environmentService } from '@core/environment';
// import { ISheetsData } from 'src/interfaces/sheetsData.interface';

export const deleteRepeatedData = (/*dataFromControl: ISheetsData*/) => {
  const newData = structuredClone(environmentService.sheetsData);
  console.log(newData);
};
