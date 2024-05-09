import { IGetDataFromControl } from 'src/interfaces/getDataFromControl.interface';
import {
  obtenerFechaActual,
  loadSheetsData,
} from './getDataUsageFunctions.service';
import { environmentService } from '@core/environment';

export const getDataFromControl: IGetDataFromControl = (sheetsData) => {
  const controlUrl = environmentService.get('CONTROL_URL');
  const fechaActual = obtenerFechaActual();
  const SS = SpreadsheetApp.openByUrl(controlUrl).getSheetByName(fechaActual);
  const lastRow = SS?.getLastRow();
  const dataFromControl = SS?.getRange('A2:J' + lastRow).getValues();
  sheetsData = loadSheetsData(sheetsData, dataFromControl);
  return sheetsData;
};
