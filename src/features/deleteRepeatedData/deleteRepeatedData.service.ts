import { environmentService } from '@core/environment';
// import { ISheetsData } from 'src/interfaces/sheetsData.interface';

export const deleteRepeatedData = (/*dataFromControl: ISheetsData*/) => {
  const newData = environmentService.sheetsData;
  console.log(newData);
};
