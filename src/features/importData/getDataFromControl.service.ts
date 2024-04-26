import { IGetDataFromControl } from 'src/interfaces/getDataFromControl.interface';
import { ISheetsData } from 'src/interfaces/sheetsData.interface';
import { environmentService } from '@core/environment';

function obtenerFechaActual() {
  const meses = [
    'ENERO',
    'FEBRERO',
    'MARZO',
    'ABRIL',
    'MAYO',
    'JUNIO',
    'JULIO',
    'AGOSTO',
    'SEPTIEMBRE',
    'OCTUBRE',
    'NOVIEMBRE',
    'DICIEMBRE',
  ];

  const fecha = new Date();
  const textoMes = meses[fecha.getMonth()];
  const textoAño = fecha.getFullYear();

  return textoMes + textoAño;
}

export const getDataFromControl: IGetDataFromControl = (
  sheetsData: ISheetsData,
) => {
  const controlUrl = environmentService.get('CONTROL_URL');
  const fechaActual = obtenerFechaActual();
  const SS = SpreadsheetApp.openByUrl(controlUrl).getSheetByName(fechaActual);
  const lastRow = SS?.getLastRow();
  const dataFromControl = SS?.getRange('A2:J' + lastRow);
  console.log(dataFromControl);
  return sheetsData;
};
