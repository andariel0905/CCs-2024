import { IGetDataFromControl } from 'src/interfaces/getDataFromControl.interface';
import {
  obtenerFechaActual,
  loadSheetsData,
} from './getDataUsageFunctions.service';
import { environmentService } from '@core/environment';

export const getDataFromControl: IGetDataFromControl = (
  sheetsData,
  sheetsFormat,
) => {
  const controlUrl = environmentService.get('CONTROL_URL');
  const fechaActual = obtenerFechaActual();
  const SS = SpreadsheetApp.openByUrl(controlUrl).getSheetByName(fechaActual);
  const lastRow = SS?.getLastRow();
  const dataFromControl = SS?.getRange('A2:J' + lastRow).getValues();
  const formatFromControl = SS?.getRange('A2:J' + lastRow).getBackgrounds();
  [sheetsData, sheetsFormat] = loadSheetsData(
    sheetsData,
    sheetsFormat,
    dataFromControl,
    formatFromControl,
  );
  return [sheetsData, sheetsFormat];
};
